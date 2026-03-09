export type BookingFormData = {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  mode: string;
  eventType: string;
  notes: string;
};

export function buildWhatsAppBookingMessage(data: BookingFormData): string {
  return `Olá! Gostaria de agendar uma partida na Arena Paintball - Piratininga PaintBall.\n\nNome: ${data.name}\nTelefone: ${data.phone}\nDia desejado: ${data.date}\nHora desejada: ${data.time}\nQuantidade de pessoas: ${data.people}\nModalidade de interesse: ${data.mode}\nTipo de evento: ${data.eventType}\nObservações: ${data.notes || 'Sem observações adicionais'}\n\nAguardo mais informações. Obrigado!`;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/5514996222202?text=${encodeURIComponent(message)}`;
}
