export function toDisplayLabel(value: string | null | undefined, fallback = "Not set yet") {
  if (!value) return fallback
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function toSubscriptionLabel(
  value: "free" | "premium" | null | undefined,
  fallback = "Free"
) {
  if (!value) return fallback
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function toDisplayName(
  profileFirstName: string | null | undefined,
  authFirstName: string | null | undefined,
  fallback = "Not set yet"
) {
  return profileFirstName || authFirstName || fallback
}
