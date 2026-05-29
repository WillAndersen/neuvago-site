import { supabase } from "@/lib/supabase/client"

export type AccountSessionSource =
  | "recommended"
  | "alternative"
  | "manual"
  | "sessions"
  | "library"
  | "progress"

export type AccountSessionMode = "guided" | "silent"

type StartAccountSessionInput = {
  userId: string
  protocolSlug: string
  source: AccountSessionSource | string
  mode: AccountSessionMode
  ambientSound?: string | null
  voiceEnabled?: boolean
}

type UpdateAccountSessionProgressInput = {
  userId: string
  sessionId: string
  completionPercent: number
  playbackPositionSeconds?: number
  completed?: boolean
}

function normalizeSessionSource(source: string): AccountSessionSource {
  const allowed: AccountSessionSource[] = [
    "recommended",
    "alternative",
    "manual",
    "sessions",
    "library",
    "progress",
  ]

  return allowed.includes(source as AccountSessionSource)
    ? (source as AccountSessionSource)
    : "manual"
}

async function getProtocolIdBySlug(protocolSlug: string) {
  const { data, error } = await supabase
    .from("protocols")
    .select("id")
    .eq("slug", protocolSlug)
    .eq("is_active", true)
    .single()

  if (error) throw error
  return data.id as string
}

export async function startAccountSession(input: StartAccountSessionInput) {
  const protocolId = await getProtocolIdBySlug(input.protocolSlug)

  const startedAtIso = new Date().toISOString()
  const today = startedAtIso.slice(0, 10)

  const { data: scoreRow } = await supabase
    .from("nervous_system_scores")
    .select("state_label")
    .eq("user_id", input.userId)
    .eq("score_date", today)
    .maybeSingle()

  const { data, error } = await supabase
    .from("sessions")
    .insert({
      user_id: input.userId,
      protocol_id: protocolId,
      source: normalizeSessionSource(input.source),
      mode: input.mode,
      ambient_sound: input.ambientSound ?? null,
      voice_enabled: input.voiceEnabled ?? (input.mode === "guided"),
      started_at: startedAtIso,
      completion_percent: 0,
      playback_position_seconds: 0,
      last_position_updated_at: startedAtIso,
      pre_state_label: scoreRow?.state_label ?? null,
    })
    .select("id, started_at")
    .single()

  if (error) throw error

  return {
    sessionId: data.id as string,
    startedAt: data.started_at as string,
  }
}

export async function updateAccountSessionProgress(
  input: UpdateAccountSessionProgressInput
) {
  if (!input.sessionId) {
    throw new Error("Missing session id")
  }

  const clampedPercent = Math.max(
    0,
    Math.min(100, Math.round(input.completionPercent))
  )

  const clampedPlaybackPositionSeconds = input.completed
    ? 0
    : Math.max(0, Math.round(input.playbackPositionSeconds ?? 0))

  const updateData: Record<string, unknown> = {
    completion_percent: clampedPercent,
    playback_position_seconds: clampedPlaybackPositionSeconds,
    last_position_updated_at: new Date().toISOString(),
  }

  if (input.completed || clampedPercent >= 100) {
    updateData.completed_at = new Date().toISOString()
    updateData.completion_percent = 100
    updateData.playback_position_seconds = 0
  }

  const { error } = await supabase
    .from("sessions")
    .update(updateData)
    .eq("id", input.sessionId)
    .eq("user_id", input.userId)

  if (error) throw error
}
