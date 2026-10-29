"use client";
import { useState } from "react";

/** Mock signup: no network call. Wire to an email provider later. */
export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="mt-10 max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label htmlFor="nl-email" className="eyebrow mb-3 block text-cream/60">
        The occasional newsletter
      </label>
      {done ? (
        <p role="status" className="border-b border-cream/40 py-3 text-sm">Thank you. (Prototype: nothing was sent.)</p>
      ) : (
        <div className="flex border-b border-cream/50 focus-within:border-stone">
          <input
            id="nl-email"
            type="email"
            required
            placeholder="Your email address"
            className="min-w-0 flex-1 bg-transparent py-3 text-sm text-cream outline-none placeholder:text-cream/50"
          />
          <button type="submit" className="px-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] hover:text-stone">
            Subscribe →
          </button>
        </div>
      )}
    </form>
  );
}
