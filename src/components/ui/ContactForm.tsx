"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Vaše ime
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
          placeholder="Ime i prezime"
          {...register("name", { required: "Unesite Vaše ime" })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Email adresa
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
          placeholder="vas@email.com"
          {...register("email", {
            required: "Unesite email adresu",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Unesite ispravnu email adresu",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Poruka
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
          placeholder="Kako Vam možemo pomoći?"
          {...register("message", { required: "Unesite poruku" })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors disabled:opacity-50"
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        {status === "sending" ? "Slanje..." : "Pošaljite poruku"}
      </button>

      {status === "sent" && (
        <p className="text-primary font-medium">
          Hvala! Vaša poruka je uspešno poslata. Javićemo Vam se uskoro.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600">
          Došlo je do greške. Pokušajte ponovo ili nas kontaktirajte telefonom.
        </p>
      )}
    </form>
  );
}
