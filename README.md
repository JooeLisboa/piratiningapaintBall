# Arena Paintball - Piratininga PaintBall

Site institucional/comercial com foco em conversão via WhatsApp, visual dark premium e identidade alinhada à logo oficial.

## Visão geral do projeto
- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, lucide-react.
- **Arquitetura híbrida:**
  - `/` Home (seções de conversão)
  - `/galeria` página satélite da galeria
  - `/recados` página satélite de recados

## Como rodar localmente
```bash
npm install
npm run dev
```

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
    logo/
    hero/
    gallery/
    placeholders/
```

## Onde editar cada parte do site
### Editar Hero (textos)
- `data/siteContent.ts` → `siteContent.heroContent.title` / `subtitle`

### Trocar imagem principal do Hero
- Arquivo: `public/images/hero/hero-bg.svg`
- Path usado em: `data/siteContent.ts` → `siteContent.heroContent.image`
- Render: `components/sections/HeroSection.tsx`

### Trocar logo oficial
- Arquivo: `public/images/logo/arena-logo.svg`
- Uso no Header/Hero/Footer/CTA final em:
  - `components/layout/Header.tsx`
  - `components/sections/HeroSection.tsx`
  - `components/layout/Footer.tsx`
  - `components/sections/FinalCtaSection.tsx`

### Editar galeria e imagens
- Dados: `data/siteContent.ts` → `siteContent.galleryImages[]`
- Imagens: `public/images/gallery/`
- UI da galeria/lightbox: `components/sections/GallerySection.tsx`

### Editar modalidades
- `data/siteContent.ts` → `siteContent.gameModes[]`

### Editar regras
- `data/siteContent.ts` → `siteContent.rules[]` e `siteContent.rulesAlert`

### Editar preços
- `data/siteContent.ts` → `siteContent.pricing[]`

### Editar recados
- `data/siteContent.ts` → `siteContent.notices[]`
- Página: `components/pages/NoticesPageContent.tsx`

### Editar contato / WhatsApp
- Dados: `data/siteContent.ts` (`phoneDisplay`, `whatsappNumber`, `contactName`)
- URL/mensagem: `lib/whatsapp.ts`
- Formulário: `components/forms/BookingForm.tsx`

### Editar endereço e mapa
- `data/siteContent.ts` → `address`, `mapsUrl`

### Editar navegação do header
- Itens: `data/siteContent.ts` → `headerNavItems[]`
- Render desktop/mobile:
  - `components/layout/Header.tsx`
  - `components/layout/MobileMenu.tsx`

### Editar footer
- `components/layout/Footer.tsx`

### Editar SEO
- Home/global: `app/layout.tsx` + `data/siteContent.ts` (`seo.homeTitle`, `seo.homeDescription`)
- Galeria: `app/galeria/page.tsx` + `seo.galleryTitle`, `seo.galleryDescription`
- Recados: `app/recados/page.tsx` + `seo.noticesTitle`, `seo.noticesDescription`

## Branding e sistema visual (nova identidade)
### Onde alterar a paleta
- Tokens de cor: `tailwind.config.ts` em `theme.extend.colors.brand`
  - `brand.bg`
  - `brand.surface`
  - `brand.primary`
  - `brand.primaryHover`
  - `brand.text`
  - `brand.muted`

### Onde alterar botões e visual global
- Estilos utilitários globais: `app/globals.css`
  - `.btn-primary`
  - `.btn-secondary`
  - `.card-surface`

### Onde ajustar header premium
- `components/layout/Header.tsx`
- `components/layout/MobileMenu.tsx`

### Onde ajustar CTAs principais
- Hero: `components/sections/HeroSection.tsx`
- Preços: `components/sections/PricingSection.tsx`
- Contato: `components/sections/ContactSection.tsx`
- CTA final: `components/sections/FinalCtaSection.tsx`

## Observações para manutenção
1. Priorize `data/siteContent.ts` para textos e conteúdo comercial.
2. Mantenha imagens em `public/images/...` com paths limpos.
3. Evite adicionar novas dependências sem necessidade.
4. Preservar consistência de branding usando tokens `brand.*`.
