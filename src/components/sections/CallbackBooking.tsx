"use client";

import { CalendarDays, ExternalLink } from "lucide-react";

const bookingUrl = "https://cal.com/ub-sales/schedule-a-callback";

export function CallbackBooking() {
  return (
    <section
      id="schedule-a-callback"
      aria-labelledby="callback-heading"
      className="mb-12 scroll-mt-32 rounded-[2rem] border border-white/10 bg-[#05070a]/60 p-5 shadow-2xl backdrop-blur-2xl md:p-8"
    >
      <div className="mb-6 flex items-start gap-4">
        <CalendarDays className="mt-1 h-7 w-7 shrink-0 text-brand-primary" aria-hidden="true" />
        <div>
          <h2 id="callback-heading" className="mb-2 font-display text-3xl font-medium text-white md:text-4xl">
            Schedule a Callback
          </h2>
          <p className="font-body leading-relaxed text-white/70">
            Choose a time for a 30-minute phone consultation. An Ultimate-Buildings
            representative will call you at the number you provide.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 sm:ml-11">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-brand-primary px-6 py-4 font-body font-semibold text-brand-dark transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
        >
          Book a Callback
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <p className="font-body text-sm text-white/60">Choose your time on Cal.com. No account required.</p>
      </div>

    </section>
  );
}
