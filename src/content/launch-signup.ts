import { commerceContent, launchConsentVersion } from "@/content/commerce";

export type LaunchLocale = "en" | "no";

// This is language-specific copy for the existing launch list, not a new list.
export const launchSignupCopy = {
  en: {
    consentVersion: launchConsentVersion,
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    consentLabel: commerceContent.launch.consentLabel,
    submitLabel: "Join the launch list",
    submittingLabel: "Joining…",
    successTitle: "You're on the list.",
    confirmation: commerceContent.launch.confirmation,
    privacyBefore: "We use your email for Neuvago launch and availability updates. Read our",
    privacyLabel: "Privacy Policy",
    privacyHref: "/legal/privacy-policy",
    errors: {
      INVALID_EMAIL: "Enter a valid email address.",
      CONSENT_REQUIRED: "Consent is required to join the launch list.",
      REQUEST_REJECTED: "We couldn't accept this request. Please reload the page and try again.",
      SAVE_FAILED: "We couldn't save your details right now. Please try again shortly.",
    },
  },
  no: {
    consentVersion: "launch-availability-no-v1-2026-09-22",
    emailLabel: "E-postadresse",
    emailPlaceholder: "deg@eksempel.no",
    consentLabel: "Jeg samtykker til å motta oppdateringer om Neuvagos lansering og tilgjengelighet på e-post. Jeg kan melde meg av når som helst.",
    submitLabel: "Meld meg på lanseringslisten",
    submittingLabel: "Melder deg på…",
    successTitle: "Du er på listen.",
    confirmation: "Vi gir deg beskjed når Neuvago blir tilgjengelig for kjøp.",
    privacyBefore: "Vi bruker e-postadressen din til oppdateringer om Neuvagos lansering og tilgjengelighet. Les vår",
    privacyLabel: "personvernerklæring",
    privacyHref: "/no/juridisk/personvern",
    errors: {
      INVALID_EMAIL: "Skriv inn en gyldig e-postadresse.",
      CONSENT_REQUIRED: "Du må samtykke til å motta lanseringsoppdateringer for å melde deg på.",
      REQUEST_REJECTED: "Vi kunne ikke behandle forespørselen. Last siden på nytt og prøv igjen.",
      SAVE_FAILED: "Vi kunne ikke lagre påmeldingen nå. Prøv igjen om litt.",
    },
  },
} as const;

export type LaunchErrorCode = keyof typeof launchSignupCopy.en.errors;

export function launchErrorMessage(locale: LaunchLocale, code: unknown): string {
  const errors = launchSignupCopy[locale].errors;
  if (typeof code === "string" && Object.prototype.hasOwnProperty.call(errors, code)) {
    return errors[code as LaunchErrorCode];
  }
  return errors.SAVE_FAILED;
}
