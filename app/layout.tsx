import type { Metadata } from 'next';
import './globals.css';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: siteContent.seo.homeTitle,
  description: siteContent.seo.homeDescription,
  keywords: [
    'paintball em Piratininga',
    'arena de paintball',
    'paintball para grupos',
    'aniversário com paintball',
    'lazer em Piratininga',
    'agendamento via WhatsApp'
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
