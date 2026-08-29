import Link from "next/link";

import type { SupportV2Content } from "@/content/support-v2";

type SupportV2ContactProps = {
  content: SupportV2Content["contact"];
};

const inputClassName =
  "mt-2 min-h-12 w-full rounded-none border border-white/18 bg-white/[0.055] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#c9a676] focus:ring-2 focus:ring-[#c9a676]/25";

const labelClassName = "block text-sm font-medium text-white/78";

export function SupportV2Contact({ content }: SupportV2ContactProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section
      id="contact-support"
      className="scroll-mt-24 bg-[#24211e] text-white"
    >
      <div className="mx-auto grid max-w-[92rem] gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-[38rem]">
          <h2 className="max-w-[11ch] text-balance text-[clamp(3rem,6.4vw,6.6rem)] font-medium leading-[0.94] tracking-[-0.065em]">
            {content.title}
          </h2>
          <a
            href={`mailto:${content.email}`}
            className="mt-9 inline-flex border-b border-white/30 pb-1 text-base font-medium text-white transition hover:border-white sm:text-lg"
          >
            {content.email}
          </a>
        </div>

        <form
          aria-label="Contact Support"
          data-structural-placeholder="true"
          className="border-t border-white/18 pt-8"
        >
          <fieldset className="grid gap-6 sm:grid-cols-2">
            <legend className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-white/52 sm:col-span-2">
              Required fields
            </legend>

            <label className={labelClassName} htmlFor="support-name">
              {content.fields.name}
              <input
                id="support-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={inputClassName}
              />
            </label>

            <label className={labelClassName} htmlFor="support-email">
              {content.fields.email}
              <input
                id="support-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputClassName}
              />
            </label>

            <label className={labelClassName} htmlFor="support-topic">
              {content.fields.supportTopic}
              <select
                id="support-topic"
                name="supportTopic"
                required
                defaultValue=""
                className={inputClassName}
              >
                <option value="" disabled>
                  {content.fields.supportTopic}
                </option>
                {content.supportTopics.map((topic) => (
                  <option key={topic} value={topic} className="text-[#1f1f1c]">
                    {topic}
                  </option>
                ))}
              </select>
            </label>

            <label className={`${labelClassName} sm:col-span-2`} htmlFor="support-message">
              {content.fields.message}
              <textarea
                id="support-message"
                name="message"
                rows={7}
                required
                className={inputClassName}
              />
            </label>
          </fieldset>

          <fieldset className="mt-9 grid gap-6 border-t border-white/14 pt-8 sm:grid-cols-2">
            <legend className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-white/52 sm:col-span-2">
              Optional fields
            </legend>

            <label className={labelClassName} htmlFor="support-order-number">
              {content.fields.orderNumber}
              <input
                id="support-order-number"
                name="orderNumber"
                type="text"
                autoComplete="off"
                className={inputClassName}
              />
            </label>

            <label className={labelClassName} htmlFor="support-device-serial-number">
              {content.fields.deviceSerialNumber}
              <input
                id="support-device-serial-number"
                name="deviceSerialNumber"
                type="text"
                autoComplete="off"
                className={inputClassName}
              />
            </label>

            <label className={`${labelClassName} sm:col-span-2`} htmlFor="support-attachment">
              {content.fields.attachment}
              <input
                id="support-attachment"
                name="attachment"
                type="file"
                className={`${inputClassName} file:mr-4 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white`}
              />
            </label>
          </fieldset>

          <div className="mt-8 flex items-start gap-3 border-t border-white/14 pt-8">
            <input
              id="support-privacy"
              name="privacyAcknowledgement"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#c9a676]"
            />
            <label htmlFor="support-privacy" className="text-sm leading-6 text-white/72">
              Privacy acknowledgement —{" "}
              <Link
                href={content.privacy.href}
                className="font-medium text-white underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
              >
                {content.privacy.label}
              </Link>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
