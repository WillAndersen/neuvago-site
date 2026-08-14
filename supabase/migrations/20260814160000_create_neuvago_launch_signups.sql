create extension if not exists pgcrypto;

create table if not exists public.neuvago_launch_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  locale text not null default 'en',
  source text not null default 'shop',
  status text not null default 'subscribed',
  consented_at timestamptz not null,
  consent_version text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint neuvago_launch_signups_email_lowercase
    check (email = lower(email)),
  constraint neuvago_launch_signups_email_length
    check (char_length(email) between 3 and 254),
  constraint neuvago_launch_signups_locale
    check (locale in ('en', 'no')),
  constraint neuvago_launch_signups_status
    check (status in ('subscribed', 'unsubscribed')),
  constraint neuvago_launch_signups_source_length
    check (char_length(source) between 1 and 80),
  constraint neuvago_launch_signups_consent_version_length
    check (char_length(consent_version) between 1 and 100)
);

comment on table public.neuvago_launch_signups is
  'Email addresses with explicit consent for Neuvago launch and availability updates.';

comment on column public.neuvago_launch_signups.email is
  'Normalized lowercase email address.';

comment on column public.neuvago_launch_signups.consented_at is
  'Timestamp when the user submitted the current consent.';

comment on column public.neuvago_launch_signups.consent_version is
  'Version identifier for the consent wording shown at signup.';

alter table public.neuvago_launch_signups
  enable row level security;

revoke all on table public.neuvago_launch_signups
  from anon, authenticated;

grant select, insert, update, delete
  on table public.neuvago_launch_signups
  to service_role;

create index if not exists
  neuvago_launch_signups_status_created_at_idx
  on public.neuvago_launch_signups (
    status,
    created_at desc
  );
