# Arena Paintball - Piratininga PaintBall

Site institucional/comercial com foco em conversão via WhatsApp.

## Visão geral do projeto

- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, lucide-react.
- **Arquitetura híbrida:**
  - `/` Home (seções de conversão)
  - `/galeria` página satélite da galeria
  - `/recados` página satélite de recados
- **Objetivo principal:** facilitar agendamento pelo WhatsApp com layout premium e experiência mobile forte.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura de pastas

```txt
app/
  layout.tsx
  page.tsx
  galeria/page.tsx
  recados/page.tsx
components/
  layout/
  pages/
  sections/
  shared/
  forms/
data/
  siteContent.ts
lib/
  whatsapp.ts
  utils.ts
public/
  images/
    hero/
    gallery/
    placeholders/
```

## Onde editar cada parte do site

### Editar Hero (textos)
- Arquivo: `data/siteContent.ts`
- Chave: `siteContent.heroContent.title` e `siteContent.heroContent.subtitle`

### Trocar imagem principal do Hero
- Arquivo da imagem: `public/images/hero/hero-bg.svg`
- Referência no conteúdo: `data/siteContent.ts` em `siteContent.heroContent.image`
- Render do Hero: `components/sections/HeroSection.tsx` (componente `<Image src={siteContent.heroContent.image} ... />`)

### Editar Modalidades
- Arquivo: `data/siteContent.ts`
- Chave: `siteContent.gameModes[]`

### Editar Regras
- Arquivo: `data/siteContent.ts`
- Chaves: `siteContent.rules[]` e `siteContent.rulesAlert`

### Editar Preços
- Arquivo: `data/siteContent.ts`
- Chave: `siteContent.pricing[]`

### Editar Recados
- Arquivo: `data/siteContent.ts`
- Chave: `siteContent.notices[]`
- Página que exibe recados: `/recados` (`components/pages/NoticesPageContent.tsx`)

### Editar Galeria
- Arquivo de dados: `data/siteContent.ts` (`siteContent.galleryImages[]`)
- Imagens físicas: `public/images/gallery/`
- Página da galeria: `/galeria` (`components/pages/GalleryPageContent.tsx`)

### Trocar telefone, WhatsApp e contato
- Arquivo: `data/siteContent.ts`
- Campos: `phoneDisplay`, `whatsappNumber`, `contactName`
- URL/mensagem WhatsApp: `lib/whatsapp.ts`

### Editar endereço e link do mapa
- Arquivo: `data/siteContent.ts`
- Campos: `address`, `mapsUrl`

### Editar links do Header
- Arquivo: `data/siteContent.ts`
- Estrutura: `headerNavItems[]`
- Renderização: `components/layout/Header.tsx` e `components/layout/MobileMenu.tsx`

### Editar conteúdo do Footer
- Arquivo: `components/layout/Footer.tsx`
- Dados consumidos de: `data/siteContent.ts`

### Editar SEO (Home e páginas satélites)
- Home/global: `app/layout.tsx` + `data/siteContent.ts` (`siteContent.seo.homeTitle/homeDescription`)
- Galeria: `app/galeria/page.tsx` + `siteContent.seo.galleryTitle/galleryDescription`
- Recados: `app/recados/page.tsx` + `siteContent.seo.noticesTitle/noticesDescription`

## Navegação (âncoras + páginas)

- Links de seção da home usam `/#id`:
  - `/#arena-paintball`
  - `/#modalidades`
  - `/#regras`
  - `/#precos`
  - `/#contato`
- Páginas satélites:
  - `/galeria`
  - `/recados`

## Observações importantes para manutenção

1. **Não espalhe conteúdo textual em vários componentes.** Priorize `data/siteContent.ts`.
2. **Ao trocar imagens**, mantenha os arquivos em `public/images/...` e atualize os paths no conteúdo.
3. **Para alterar o comportamento de envio do formulário**, revise `lib/whatsapp.ts` antes de mexer em `BookingForm.tsx`.
4. **Mantenha a consistência visual** reutilizando `SectionTitle`, `AnimatedSection` e estilos já definidos.
