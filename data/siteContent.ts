import { BookingFormData } from '@/lib/whatsapp';

export type HeaderNavItem = {
  label: string;
  href: string;
  kind: 'section' | 'page';
};

export type GameMode = {
  title: string;
  description: string;
  duration: string;
  score?: string;
  note?: string;
  highlight?: boolean;
};

export type PricingItem = {
  title: string;
  price: string;
  description?: string;
  items?: string[];
  featured?: boolean;
};

export type NoticeItem = { title: string; description: string };
export type TestimonialItem = { quote: string; author?: string };
export type GalleryImage = { src: string; alt: string; title?: string };

export const headerNavItems: HeaderNavItem[] = [
  { label: 'Arena Paintball', href: '/#arena-paintball', kind: 'section' },
  { label: 'Modalidades de jogo', href: '/#modalidades', kind: 'section' },
  { label: 'Regras de jogo', href: '/#regras', kind: 'section' },
  { label: 'Galeria de Fotos', href: '/galeria', kind: 'page' },
  { label: 'Preços', href: '/#precos', kind: 'section' },
  { label: 'Recados', href: '/recados', kind: 'page' },
  { label: 'Contato', href: '/#contato', kind: 'section' }
];

export const siteContent = {
  brand: 'Arena Paintball - Piratininga PaintBall',
  logo: '/images/logo/arena-logo.svg',
  whatsappNumber: '5514996222202',
  phoneDisplay: '(14) 99622-2202',
  contactName: 'Mateus',
  openingHours: 'Abre às 08:00',
  address: 'HVVF+MQ, Piratininga - SP, 17490-000',
  mapsUrl: 'https://maps.google.com/?q=HVVF+MQ,+Piratininga+-+SP,+17490-000',
  seo: {
    homeTitle: 'Arena Paintball em Piratininga SP | Agende pelo WhatsApp',
    homeDescription:
      'Viva uma experiência de paintball em Piratininga SP com estrutura, diversão e agendamento rápido pelo WhatsApp. Ideal para grupos, aniversários e confraternizações.',
    galleryTitle: 'Galeria de Fotos | Arena Paintball Piratininga',
    galleryDescription:
      'Confira fotos da Arena Paintball em Piratininga e veja como é a experiência para grupos, aniversários e confraternizações.',
    noticesTitle: 'Recados Importantes | Arena Paintball Piratininga',
    noticesDescription:
      'Leia os recados importantes para agendamento de jogos, regras gerais e orientações da Arena Paintball em Piratininga.'
  },
  heroContent: {
    title: 'Adrenalina, estratégia e diversão para sua turma em Piratininga',
    subtitle:
      'Uma experiência de paintball profissional com segurança, estrutura e atendimento maravilhoso para grupos, aniversários e confraternizações.',
    image: '/images/hero/hero-bg.svg',
    ctaPrimary: 'Agendar pelo WhatsApp',
    ctaSecondary: 'Ver preços',
    social: { rating: '5,0 estrelas', reviews: '201 avaliações' }
  },
  testimonials: [
    { quote: 'Campo bacana, equipe proativa e equipamentos em excelente estado.' },
    { quote: 'Espaço top, tivemos uma experiência muito boa, voltaremos com toda certeza.' },
    { quote: 'Lugar ótimo, instrutor top, vale muito a pena.' },
    { quote: 'Experiência incrível, atendimento maravilhoso e ótima estrutura.' },
    { quote: 'Comemoramos aniversário e foi uma tarde maravilhosa.' }
  ] satisfies TestimonialItem[],
  gameModes: [
    {
      title: 'Banzai',
      description:
        'Nesta modalidade o objetivo é eliminar todos os adversários. São 50 pontos distribuídos pelo número de jogadores. Se cada equipe possui 5 participantes, cada um vale 10 pontos. Assim o jogador eliminado corresponde a 10 pontos para o adversário.',
      duration: 'Tempo de duração: 1 hora'
    },
    {
      title: 'Abater capitão',
      description:
        'É feito um sorteio para definir os capitões (jogador previamente escolhido pelos colegas). O objetivo é eliminar o capitão do time adversário e proteger o de sua equipe. Não existem limites de defesa ou ataque.',
      score: 'São 50 pontos pelo capitão eliminado e 10 pontos por soldado.',
      duration: 'Tempo de duração: 1 hora'
    },
    {
      title: 'Cemitério',
      description:
        'Após ser atingido, o jogador deve ficar sentado. A proteção é colocada no cano do marcador, que fica na posição vertical e visível a todos. Ele deverá ficar nessa posição até que um parceiro lhe toque. Quando o jogador é ressuscitado, o árbitro o coloca em uma posição neutra. O objetivo é eliminar todos os adversários.',
      duration: 'Tempo de duração: 1 hora'
    },
    {
      title: 'Speedball',
      description:
        'Jogo disputado no campo 1 com bandeira central. Objetivo: capturar a bandeira e colocá-la na base adversária. Jogo simples, mas extremamente interessante e divertido.',
      score: 'Pontuação: 10 pontos por inimigo abatido',
      duration: 'Tempo de duração: 1 hora'
    },
    {
      title: 'Resgate',
      description: 'Objetivo: trazer a bandeira do adversário para a sua base.',
      note:
        'Nota: o jogador deve trazer a bandeira à vista. Caso seja atingido, deve deixar a bandeira nesse local e comunicar-se com um árbitro. Se a bandeira não estiver visível, o árbitro colocará a mesma em local visível.',
      duration: 'Tempo de duração: 1 hora'
    },
    {
      title: 'Mata-Mata',
      description: 'Eliminar o maior número de adversários, sendo que cada pessoa atingida vale 10 pontos.',
      duration: 'Tempo de duração: 1 hora'
    },
    {
      title: 'Especial',
      description:
        'Contamos também com uma mata próximo ao campo oficial, que pode ser usada para uma partida. Entre em contato e saiba mais.',
      duration: 'Partida sob consulta',
      highlight: true
    }
  ] satisfies GameMode[],
  rules: [
    'Siga sempre as orientações da equipe, instrutores e árbitros.',
    'Utilize corretamente os equipamentos de proteção.',
    'Respeite os limites e áreas indicadas.',
    'Mantenha conduta segura durante toda a partida.',
    'Em caso de dúvida, peça orientação à equipe.',
    'Menores de 16 anos precisam de autorização dos pais ou responsável.'
  ],
  rulesAlert:
    'Instruções adicionais e regras específicas podem ser informadas no local ou no momento do agendamento.',
  galleryImages: [
    { src: '/images/gallery/gallery-1.svg', alt: 'Equipe pronta para partida', title: 'Turmas e confraternizações' },
    { src: '/images/gallery/gallery-2.svg', alt: 'Campo da arena', title: 'Estrutura ao ar livre' },
    { src: '/images/gallery/gallery-3.svg', alt: 'Jogadores em ação', title: 'Adrenalina em equipe' },
    { src: '/images/gallery/gallery-4.svg', alt: 'Equipamentos da arena', title: 'Equipamentos inclusos' }
  ] satisfies GalleryImage[],
  pricing: [
    {
      title: 'Pacote início de jogo',
      price: 'R$45,00',
      description: 'com 100 bolinhas, 1h30min de jogo com todo equipamento incluso:',
      items: ['máscara', 'colete tático', 'marcador (arma de paintball)'],
      featured: true
    },
    { title: '50 bolinhas', price: 'R$15,00', description: 'Durante o jogo' },
    { title: '100 bolinhas', price: 'R$25,00', description: 'Durante o jogo' },
    {
      title: 'Aluguel do campo',
      price: '1h — R$120,00',
      description: 'Para a equipe que já possui os equipamentos'
    }
  ] satisfies PricingItem[],
  notices: [
    { title: 'Agendamento obrigatório', description: 'Todos os jogos devem ser agendados com antecedência.' },
    { title: 'Atendimento por telefone ou WhatsApp', description: 'Agendamentos pelo Fone/Whats: (014) 9.9622-2202 - Mateus.' },
    { title: 'Autorização para menores', description: 'Menores de 16 anos precisam de autorização dos pais ou responsável.' },
    { title: 'Partidas especiais sob consulta', description: 'Dúvidas sobre modalidades e partidas especiais devem ser consultadas com a equipe.' },
    { title: 'Área especial adicional', description: 'A área especial próxima ao campo oficial pode ser consultada diretamente com a arena.' }
  ] satisfies NoticeItem[],
  bookingDefaults: {
    eventType: 'Amigos',
    mode: 'Ainda não sei'
  } satisfies Pick<BookingFormData, 'eventType' | 'mode'>
};
