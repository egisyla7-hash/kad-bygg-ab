"use client";

import { useState, type FormEvent } from "react";
import { company, services } from "@/lib/site";
import { IconCheck } from "./icons";

type Status = "idle" | "error" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) next.name = "Ange ditt namn.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Ange en giltig e-postadress.";
    if (message.length < 10)
      next.message = "Beskriv ditt projekt med några ord.";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      return;
    }

    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message"));

    const subject = `Offertförfrågan – ${service || "Bygg & renovering"} (${name})`;
    const body = [
      `Namn: ${name}`,
      `E-post: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      service ? `Tjänst: ${service}` : null,
      "",
      "Meddelande:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `${company.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
    form.reset();
  }

  const fieldClass =
    "w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Namn *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            placeholder="Förnamn Efternamn"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="07X-XXX XX XX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          E-post *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          placeholder="namn@exempel.se"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
          Tjänst
        </label>
        <select id="service" name="service" className={fieldClass} defaultValue="">
          <option value="">Välj tjänst (valfritt)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Annat">Annat</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Beskriv ditt projekt *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={fieldClass}
          placeholder="Berätta kort om vad du vill ha hjälp med, var projektet finns och önskad tidsplan."
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Skicka förfrågan
      </button>

      {status === "sent" && (
        <p className="flex items-center gap-2 rounded-xl bg-forest-50 px-4 py-3 text-sm text-forest-800">
          <IconCheck className="h-5 w-5 text-forest-600" />
          Tack! Ditt e-postprogram öppnas nu med din förfrågan – tryck skicka så
          återkommer vi så snart vi kan.
        </p>
      )}
      {status === "error" && Object.keys(errors).length > 0 && (
        <p className="text-sm text-red-600">
          Kontrollera de markerade fälten och försök igen.
        </p>
      )}

      <p className="text-xs text-ink-muted">
        Du kan också ringa oss direkt på{" "}
        <a href={company.phoneHref} className="font-medium text-amber-600">
          {company.phone}
        </a>
        .
      </p>
    </form>
  );
}
