import Image from 'next/image';
import Link from 'next/link';
import { headerNavItems, siteContent } from '@/data/siteContent';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function Footer() {
  return (
    <footer className="border-t border-brand-primary/20 bg-black py-14">
      <div className="container-max grid gap-8 md:grid-cols-3">
        <div>
          <div className="relative h-12 w-52">
            <Image src={siteContent.logo} alt="Logo Arena Paintball" fill className="object-contain object-left" />
          </div>
          <p className="mt-3 text-sm text-brand-muted">Estrutura, segurança e adrenalina para experiências memoráveis.</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand-text">Navegação</h4>
          <ul className="mt-2 grid gap-1 text-sm text-brand-muted">
            {headerNavItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-brand-text">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm text-brand-muted">
          <p className="text-brand-text">{siteContent.phoneDisplay} • {siteContent.contactName}</p>
          <p>{siteContent.address}</p>
          <div className="flex gap-2">
            <a href={siteContent.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 text-sm">Google Maps</a>
            <a href={buildWhatsAppUrl('Olá! Quero agendar uma partida.')} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 text-sm">WhatsApp</a>
          </div>
        </div>
      </div>
      <p className="container-max mt-8 text-xs text-brand-muted/70">© {new Date().getFullYear()} Arena Paintball - Piratininga PaintBall. Todos os direitos reservados.</p>
    </footer>
  );
}
