'use client';

import { FormEvent, useState } from 'react';
import { siteContent } from '@/data/siteContent';
import { formatPhone } from '@/lib/utils';
import { BookingFormData, buildWhatsAppBookingMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

const initialState: BookingFormData = {
  name: '',
  phone: '',
  date: '',
  time: '',
  people: '',
  mode: siteContent.bookingDefaults.mode,
  eventType: siteContent.bookingDefaults.eventType,
  notes: ''
};

export function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time || !form.people) {
      setError('Preencha os campos obrigatórios para continuar o agendamento.');
      return;
    }
    setError('');
    const message = buildWhatsAppBookingMessage(form);
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4 p-6">
      <h3 className="text-xl font-semibold">Formulário de agendamento</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { name: 'name', label: 'Nome*', type: 'text', placeholder: 'Seu nome' },
          { name: 'phone', label: 'Telefone*', type: 'tel', placeholder: '(14) 99999-9999' },
          { name: 'date', label: 'Dia desejado*', type: 'date' },
          { name: 'time', label: 'Hora desejada*', type: 'time' },
          { name: 'people', label: 'Quantidade de pessoas*', type: 'number', placeholder: 'Ex.: 10' }
        ].map((field) => (
          <label key={field.name} className="text-sm">
            <span className="mb-1 block text-zinc-300">{field.label}</span>
            <input
              required
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name as keyof BookingFormData]}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [field.name]: field.name === 'phone' ? formatPhone(e.target.value) : e.target.value
                }))
              }
              className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 outline-none ring-accent-500 focus:ring"
            />
          </label>
        ))}
        <label className="text-sm">
          <span className="mb-1 block text-zinc-300">Modalidade de interesse</span>
          <select value={form.mode} onChange={(e) => setForm((prev) => ({ ...prev, mode: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 outline-none ring-accent-500 focus:ring">
            {['Banzai','Abater capitão','Cemitério','Speedball','Resgate','Mata-Mata','Especial','Ainda não sei'].map((mode) => <option key={mode}>{mode}</option>)}
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-zinc-300">Tipo de evento</span>
          <select value={form.eventType} onChange={(e) => setForm((prev) => ({ ...prev, eventType: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 outline-none ring-accent-500 focus:ring">
            {['Amigos','Aniversário','Confraternização','Outro'].map((eventType) => <option key={eventType}>{eventType}</option>)}
          </select>
        </label>
      </div>
      <label className="text-sm">
        <span className="mb-1 block text-zinc-300">Mensagem adicional / observações</span>
        <textarea rows={4} placeholder="Detalhes do grupo, preferências e dúvidas..." value={form.notes} onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 outline-none ring-accent-500 focus:ring" />
      </label>
      {error ? <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">{error}</p> : null}
      <button type="submit" className="w-full rounded-full bg-accent-500 px-5 py-3 font-semibold text-black transition hover:bg-accent-600">Agendar pelo WhatsApp</button>
    </form>
  );
}
