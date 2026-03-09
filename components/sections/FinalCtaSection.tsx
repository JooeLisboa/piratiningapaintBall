'use client';

import { motion } from 'framer-motion';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function FinalCtaSection() {
  return (
    <section className="container-max pb-20 pt-8">
      <motion.div className="card-surface overflow-hidden p-8 text-center" animate={{ boxShadow: ['0 0 0 rgba(245,158,11,0)', '0 0 45px rgba(245,158,11,0.2)', '0 0 0 rgba(245,158,11,0)'] }} transition={{ duration: 3, repeat: Infinity }}>
        <h2 className="text-3xl font-bold">Pronto para viver uma experiência memorável?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-300">Reúna sua turma e faça seu agendamento via WhatsApp em poucos cliques.</p>
        <a href={buildWhatsAppUrl('Olá! Quero agendar minha partida na Arena Paintball - Piratininga PaintBall.')} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-accent-500 px-6 py-3 font-semibold text-black">Agendar pelo WhatsApp</a>
      </motion.div>
    </section>
  );
}
