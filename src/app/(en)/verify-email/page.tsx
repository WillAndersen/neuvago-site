import { VerifyEmailPageClient } from "@/components/auth/verify-email-page-client"

type VerifyEmailPageProps = {
  searchParams?: Promise<{
    email?: string
  }>
}

export default async function VerifyEmailPage({
  searchParams,
}: VerifyEmailPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const email = resolvedSearchParams?.email ?? ""

  return <VerifyEmailPageClient initialEmail={email} />
}
