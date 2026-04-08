"use client"

import { useEffect, useState } from "react"

import { supabase } from "@/lib/supabase/client"

export type AuthUserSummary = {
  id: string
  email: string | null
  firstName: string | null
}

export function useAuthUser() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<AuthUserSummary | null>(null)

  useEffect(() => {
    let isMounted = true

    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!isMounted) return

      if (!user) {
        setUser(null)
        setIsLoading(false)
        return
      }

      setUser({
        id: user.id,
        email: user.email ?? null,
        firstName:
          typeof user.user_metadata?.first_name === "string"
            ? user.user_metadata.first_name
            : null,
      })
      setIsLoading(false)
    }

    void checkUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return

      const nextUser = session?.user

      if (!nextUser) {
        setUser(null)
        setIsLoading(false)
        return
      }

      setUser({
        id: nextUser.id,
        email: nextUser.email ?? null,
        firstName:
          typeof nextUser.user_metadata?.first_name === "string"
            ? nextUser.user_metadata.first_name
            : null,
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
  }
}
