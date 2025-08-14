"use client";

import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    // client-side validation
    if (!name || name.length < 3) {
      setError("Your name should be at least 3 characters long.");
      setState("error");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setState("error");
      return;
    }
    if (!message || message.length < 15) {
      setError("Please write a longer message.");
      setState("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Failed to submit. Try again later.");
      }

      setState("success");
      form.reset();

      // reset state after 6 seconds
      setTimeout(() => setState("idle"), 6000);
    } catch (err: unknown) {
      setState("error");
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <label
        htmlFor="name"
        className="block text-xs uppercase tracking-widest text-gray-500"
      >
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Full Name"
        className="mt-1 mb-4 w-full border-b border-gray-300 focus:border-gray-900 outline-none py-2"
      />

      <label
        htmlFor="email"
        className="block text-xs uppercase tracking-widest text-gray-500"
      >
        Email Address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email Address"
        className="mt-1 mb-4 w-full border-b border-gray-300 focus:border-gray-900 outline-none py-2"
      />

      <label
        htmlFor="message"
        className="block text-xs uppercase tracking-widest text-gray-500"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={6}
        placeholder="Your Message"
        className="mt-1 mb-6 w-full border-b border-gray-300 focus:border-gray-900 outline-none py-2 resize-none"
      />

      {/* Message Status */}
      {state === "error" && (
        <p className="mb-3 text-xs uppercase tracking-widest text-red-600">
          {error}
        </p>
      )}
      {state === "success" && (
        <p className="mb-3 text-xs uppercase tracking-widest text-green-700">
          Thank you! We will get back to you as soon as possible.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-6 h-9 hover:opacity-90 disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
