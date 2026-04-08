"use client"

import { useEffect, useState } from "react"

import { supabase } from "@/lib/supabase/client"

export type AccountProfileUser = {
  id: string
  email: string | null
  firstName: string | null
}

export type AccountProfileData = {
  firstName: string | null
  primaryGoal: string | null
  subscriptionStatus: "free" | "premium" | null
}

export function useAccountProfile() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<AccountProfileUser | null>(null)
  const [profile, setProfile] = useState<AccountProfileData | null>(null)

  useEffect(() => {
    let isMounted = true

    async function load() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!isMounted) return

        if (!user) {
          setUser(null)
          setProfile(null)
          setIsLoading(false)
          return
        }

        const authUser = {
          id: user.id,
          email: user.email ?? null,
          firstName:
            typeof user.user_metadata?.first_name === "string"
              ? user.user_metadata.first_name
              : null,
        }

        setUser(authUser)

        const { data: profileRow } = await supabase
          .from("profiles")
          .select("first_name, primary_goal, subscription_status")
          .eq("id", user.id)
          .maybeSingle()

        if (!isMounted) return

        setProfile({
          firstName: profileRow?.first_name ?? authUser.firstName ?? null,
          primaryGoal: profileRow?.primary_goal ?? null,
          subscriptionStatus: profileRow?.subscription_status ?? null,
        })
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    void load()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!isMounted) return

      if (!session?.user) {
        setUser(null)
        setProfile(null)
        setIsLoading(false)
        return
      }

      const nextUser = session.user
      const authUser = {
        id: nextUser.id,
        email: nextUser.email ?? null,
        firstName:
          typeof nextUser.user_metadata?.first_name === "string"
            ? nextUser.user_metadata.first_name
            : null,
      }

      setUser(authUser)

      const { data: profileRow } = await supabase
        .from("profiles")
        .select("first_name, primary_goal, subscription_status")
        .eq("id", nextUser.id)
        .maybeSingle()

      if (!isMounted) return

      setProfile({
        firstName: profileRow?.first_name ?? authUser.firstName ?? null,
        primaryGoal: profileRow?.primary_goal ?? null,
        subscriptionStatus: profileRow?.subscription_status ?? null,
      })
      setIsLoading(false)
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  return {
    isLoading,
    isSignedIn: !!user,
    user,
    profile,
  }
}
