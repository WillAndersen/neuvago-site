"use client"

import { useEffect, useState } from "react"
import type { User } from "@supabase/supabase-js"

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

type AccountProfileStore = {
  isLoading: boolean
  user: AccountProfileUser | null
  profile: AccountProfileData | null
  needsOnboarding: boolean
  errorText: string | null
}

type AccountProfileListener = (state: AccountProfileStore) => void

const listeners = new Set<AccountProfileListener>()

let store: AccountProfileStore = {
  isLoading: true,
  user: null,
  profile: null,
  needsOnboarding: false,
  errorText: null,
}

let hasInitializedAuthSubscription = false
let inflightLoad: Promise<void> | null = null

function emit() {
  listeners.forEach((listener) => listener(store))
}

function setStore(next: Partial<AccountProfileStore>) {
  store = {
    ...store,
    ...next,
  }
  emit()
}

function toAccountUser(user: User): AccountProfileUser {
  return {
    id: user.id,
    email: user.email ?? null,
    firstName:
      typeof user.user_metadata?.first_name === "string"
        ? user.user_metadata.first_name
        : null,
  }
}

async function loadAccountProfile(userOverride?: User | null) {
  if (inflightLoad) return inflightLoad

  inflightLoad = (async () => {
    setStore({
      isLoading: true,
      errorText: null,
    })

    try {
      let authUserValue = userOverride

      if (authUserValue === undefined) {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser()

        if (error) throw error
        authUserValue = user
      }

      if (!authUserValue) {
        setStore({
          isLoading: false,
          user: null,
          profile: null,
          needsOnboarding: false,
          errorText: null,
        })
        return
      }

      const authUser = toAccountUser(authUserValue)

      setStore({
        user: authUser,
      })

      try {
        const { data: profileRow, error: profileError } = await supabase
          .from("profiles")
          .select("first_name, primary_goal, subscription_status")
          .eq("id", authUser.id)
          .maybeSingle()

        if (profileError) throw profileError

        setStore({
          isLoading: false,
          user: authUser,
          profile: {
            firstName: profileRow?.first_name ?? authUser.firstName ?? null,
            primaryGoal: profileRow?.primary_goal ?? null,
            subscriptionStatus: profileRow?.subscription_status ?? null,
          },
          needsOnboarding: !profileRow?.primary_goal,
          errorText: null,
        })
      } catch (profileErr) {
        setStore({
          isLoading: false,
          user: authUser,
          profile: {
            firstName: authUser.firstName ?? null,
            primaryGoal: null,
            subscriptionStatus: null,
          },
          needsOnboarding: false,
          errorText:
            profileErr instanceof Error
              ? profileErr.message
              : "Could not load your account profile.",
        })
      }
    } finally {
      inflightLoad = null
    }
  })()

  return inflightLoad
}

function initializeAccountProfileStore() {
  if (hasInitializedAuthSubscription) return

  hasInitializedAuthSubscription = true
  void loadAccountProfile()

  supabase.auth.onAuthStateChange((_event, session) => {
    if (!session?.user) {
      setStore({
        isLoading: false,
        user: null,
        profile: null,
        needsOnboarding: false,
        errorText: null,
      })
      return
    }

    void loadAccountProfile(session.user)
  })
}

export function useAccountProfile() {
  const [state, setState] = useState(() => store)

  useEffect(() => {
    initializeAccountProfileStore()

    const listener: AccountProfileListener = (nextState) => {
      setState(nextState)
    }

    listeners.add(listener)

    return () => {
      listeners.delete(listener)
    }
  }, [])

  return {
    ...state,
    isSignedIn: !!state.user,
    refreshProfile: async () => {
      await loadAccountProfile()
    },
  }
}
