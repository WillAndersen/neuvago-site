"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { useAccountProfile } from "@/hooks/useAccountProfile"

export function useRequireAccountAccess() {
  const router = useRouter()
  const account = useAccountProfile()

  useEffect(() => {
    if (account.isLoading) return

    if (!account.isSignedIn || !account.user) {
      router.replace("/login")
      return
    }

    if (account.needsOnboarding) {
      router.replace("/onboarding")
    }
  }, [
    account.isLoading,
    account.isSignedIn,
    account.user,
    account.needsOnboarding,
    router,
  ])

  return account
}
