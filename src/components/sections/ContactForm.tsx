"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormState {
  name: string;
  institution: string;
  state: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  institution: "",
  state: "",
  email: "",
  message: "",
};

const bundeslaender = [
  "Baden-Württemberg",
  "Bayern",
  "Berlin",
  "Brandenburg",
  "Bremen",
  "Hamburg",
  "Hessen",
  "Mecklenburg-Vorpommern",
  "Niedersachsen",
  "Nordrhein-Westfalen",
  "Rheinland-Pfalz",
  "Saarland",
  "Sachsen",
  "Sachsen-Anhalt",
  "Schleswig-Holstein",
  "Thüringen",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const canSubmit = useMemo(
    () =>
      Boolean(
        form.name &&
          form.institution &&
          form.state &&
          form.email &&
          form.message,
      ),
    [form],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      setStatusMessage("Bitte füllen Sie alle Felder aus.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "Anfrage konnte nicht gesendet werden.");
      }

      setStatus("success");
      setStatusMessage("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
      setForm(initialState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Anfrage konnte nicht gesendet werden.";
      setStatus("error");
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            className="mt-2"
            required
          />
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor="institution">Schule / Institution</Label>
          <Input
            id="institution"
            name="institution"
            value={form.institution}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, institution: event.target.value }))
            }
            className="mt-2"
            required
          />
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor="state">Bundesland</Label>
          <Select
            value={form.state}
            onValueChange={(value) => {
              if (!value) {
                return;
              }
              setForm((prev) => ({ ...prev, state: value }));
            }}
          >
            <SelectTrigger id="state" className="mt-2 w-full" aria-label="Bundesland">
              <SelectValue placeholder="Bitte auswählen" />
            </SelectTrigger>
            <SelectContent>
              {bundeslaender.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor="email">E-Mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            className="mt-2"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message">Nachricht</Label>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
            className="mt-2 min-h-36"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={isSubmitting || !canSubmit}
          className="bg-[#62A044] hover:bg-[#4e8335] text-white"
        >
          {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        </Button>

        {status !== "idle" && (
          <p
            className={
              status === "success"
                ? "text-sm text-[#62A044]"
                : "text-sm text-red-600"
            }
          >
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}
