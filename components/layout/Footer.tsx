import Link from 'next/link';
import { headerNavItems, siteContent } from '@/data/siteContent';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-tactical-900/70 py-12">
      <div className="container-max grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">{siteContent.brand}</h3>
          <p className="mt-2 text-sm text-zinc-300">Estrutura, segurança e diversão para experiências memoráveis.</p>
        </div>
        <div>
          <h4 className="font-semibold">Navegação rápida</h4>
          <ul className="mt-2 grid gap-1 text-sm text-zinc-300">
            {headerNavItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm text-zinc-200">
          <p>
            {siteContent.phoneDisplay} • {siteContent.contactName}
          </p>
          <p>{siteContent.address}</p>
          <div className="flex gap-2">
            <a href={siteContent.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2">
              Google Maps
            </a>
            <a
              href={buildWhatsAppUrl('Olá! Quero agendar uma partida.')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent-500 px-4 py-2 font-semibold text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <p className="container-max mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Arena Paintball - Piratininga PaintBall. Todos os direitos reservados.</p>
    </footer>
  );
}
