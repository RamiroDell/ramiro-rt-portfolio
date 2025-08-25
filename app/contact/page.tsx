"use client";
import { useState } from "react";

export const metadata = { title: "Contacto" };

type Payload = { name: string; email: string; message: string; website?: string };

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setOk(null); setError(null);
    const form = e.currentTarget;
    const payload: Payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setOk(res.ok);
      if (!res.ok) setError(data.error || "Error al enviar");
      form.reset();
    } catch (err: any) {
      setOk(false);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="panel p-6 md:p-8 max-w-2xl">
      <h2 className="text-white font-semibold text-xl mb-4">Contacto</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400">Nombre</label>
            <input name="name" required placeholder="Tu nombre" className="w-full mt-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-hacker-green" />
          </div>
          <div>
            <label className="block text-sm text-gray-400">Email</label>
            <input type="email" name="email" required placeholder="tucorreo@example.com" className="w-full mt-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-hacker-green" />
          </div>
        </div>

        <div className="hidden">
          <label>Website</label>
          <input name="website" placeholder="no completar" />
        </div>

        <div>
          <label className="block text-sm text-gray-400">Mensaje</label>
          <textarea name="message" required rows={6} placeholder="Cuéntame sobre tu proyecto..." className="w-full mt-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-hacker-green" />
        </div>

        <button disabled={loading} className="btn">
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>

      {ok === true && <p className="text-green-400 mt-4">Mensaje enviado correctamente. ¡Gracias!</p>}
      {ok === false && <p className="text-red-400 mt-4">Error: {error ?? "No se pudo enviar"}</p>}
    </section>
  );
}
