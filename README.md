# EduKinesis — Landing Page

Landing de [EduKinesis](https://edukinesis.uy), espacio educativo y recreativo
para niños de 4 a 11 años en Paso de los Toros, Uruguay.

## Stack

HTML + CSS + JS vanilla. Sin frameworks, sin build step. Deploy automático en
Vercel: push a `main` → producción; cada PR genera un preview deploy.

## Características

- Sistema de diseño propio sobre la paleta de marca (tokens CSS, contraste
  WCAG AA verificado) — ver `DESIGN.md`.
- SEO local: JSON-LD `ChildCare`/`LocalBusiness`, Open Graph, sitemap,
  robots, canonical. Lighthouse ≥ 90 en las 4 categorías.
- Imágenes WebP optimizadas con lazy loading, mobile-first.
- Sin backend: CTA por WhatsApp e Instagram.

## Desarrollo

Construida con Claude Code en etapas por PR:

1. Design system (tokens, accesibilidad, assets optimizados)
2. Landing v1 (10 secciones + SEO completo)
3. Design review con agentes de UI/UX
4. Equipo y cierre

Convenciones y contexto del proyecto en `CLAUDE.md`.

Para correr local no hace falta nada: abrir `index.html`, o `npx serve` para
probarlo desde el celular en la red local.

## Estructura

```
index.html / styles.css / script.js   la página
img/                                  assets optimizados (WebP, favicons, OG image)
CLAUDE.md                             convenciones y fuente de verdad del proyecto
DESIGN.md                             sistema de diseño y decisiones de accesibilidad
resumenEduKinesis.md                  contenido fuente provisto por el dueño
sitemap.xml · robots.txt              SEO
```
