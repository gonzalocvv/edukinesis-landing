# EduKinesis — Sistema de Diseño

> Fuente de verdad visual de la landing **edukinesis.uy**.
> Tono: **alegre e infantil pero profesional**, dirigido a padres.
> Etapa 1 (`claude/design-system`): este documento + los tokens en `styles.css` + assets.
> El maquetado de secciones llega en la Etapa 2.

Apoyado en la skill **ui-ux-pro-max**, que para "educación/recreación infantil"
recomienda estilo **Claymorphism** (suave 3D, redondeado, chunky) y color por
sección — alineado con el logo de puzzle 3D y con la estrategia elegida por el dueño.

---

## 1. Principios

1. **Profesional primero.** Colores vivos pero contenidos. Mucho aire, jerarquía clara, nada recargado.
2. **Claymorphism-lite.** Esquinas redondeadas, sombras suaves dobles, piezas tipo "puzzle/juguete" — pero con moderación (es un emprendimiento serio para padres).
3. **Accesible por defecto.** Todo par texto/fondo cumple WCAG AA (≥4.5:1). Foco visible. `prefers-reduced-motion` respetado. Targets táctiles ≥44px.
4. **Mobile-first.** El grueso del tráfico llega de Instagram en celular.
5. **Performance.** Lighthouse 90+. WebP comprimido, fuentes con `display=swap`, CSS mínimo, sin frameworks.

---

## 2. Color

### 2.1 Paleta de marca (obligatoria, del PDF)
| Color | Hex | Rol principal |
|------|-----|---------------|
| Violeta | `#994EC3` | Acento + CTA secundaria + foco |
| Verde agua | `#61CCB9` | Acento; su -700 es la CTA principal |
| Verde agua claro | `#97CFCA` | Tinte tipográfico claro del logo |
| Mostaza | `#DFA53C` | Acento |
| Rosa | `#FE94F5` | Acento |
| Azul oscuro (navy) | `#1D5074` | **Títulos**, header/footer, texto sobre claro |

### 2.2 El problema de contraste (y la regla que sale de él)
Verificamos cada par contra WCAG 2.1. Resultado medido:

| Sobre blanco | Ratio | ¿Texto normal? |
|--------------|------:|----------------|
| navy `#1D5074` | **8.56** | ✅ AAA |
| ink `#142433` | **15.8** | ✅ AAA |
| violeta `#994EC3` | 4.96 | ✅ AA |
| verde `#61CCB9` | 1.94 | ❌ |
| mostaza `#DFA53C` | 2.19 | ❌ |
| rosa `#FE94F5` | 1.95 | ❌ |

| Texto blanco sobre… | Ratio | |
|---------------------|------:|--|
| navy | 8.56 | ✅ AAA |
| violeta | 4.96 | ✅ AA |
| verde / mostaza / rosa | 1.9–2.2 | ❌ |

**Regla de oro:** verde, mostaza y rosa en su tono puro **nunca llevan texto encima** (ni blanco ni navy). Se usan como **relleno decorativo, íconos grandes, formas, bordes y tintes de fondo**. Para texto/íconos finos sobre blanco se usan sus variantes **-700** (derivadas y verificadas ≥4.5:1). Sobre rellenos de marca claros, el texto va en **ink** o **navy**.

### 2.3 Rampas accesibles (en `styles.css`)
Cada acento tiene: `-50`/`-100` (fondos de sección), `-500` (relleno de marca), `-700` (texto/ícono accesible **sobre blanco y sobre sus propios tintes -50/-100**, todos ≥4.5:1). La columna muestra el ratio sobre blanco / sobre su tinte -100.

| Acento | 50 | 100 | 500 (marca) | 700 (texto AA) |
|--------|----|-----|-------------|----------------|
| verde | `#EFFAF8` | `#E3F6F2` | `#61CCB9` | `#39776C` (5.21 / 4.65) |
| mostaza | `#FCF6EC` | `#F9EFDC` | `#DFA53C` | `#896625` (5.26 / 4.61) |
| rosa | `#FFF4FE` | `#FFECFD` | `#FE94F5` | `#955790` (5.19 / 4.62) |
| violeta | `#F5EDF9` | `#EDDFF4` | `#994EC3` | `#7E3BA6` (5.37 sobre -100) |
| navy | `#E8EEF1` | `#D6E0E6` | `#1D5074` | `#163C58` (8.6 sobre -100) |

### 2.4 Roles semánticos
Usar **siempre** los tokens, nunca el hex crudo en componentes.

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-bg` | `#FFFFFF` | Fondo base |
| `--color-bg-soft` | `#FBF7FF` | Fondo alterno (off-white) |
| `--color-ink` | `#142433` | Texto de cuerpo (15.8:1) |
| `--color-ink-soft` | `#4A5A68` | Texto secundario (~7:1) |
| `--color-heading` | `#1D5074` | Títulos |
| `--color-link` | `#39776C` | Enlaces (verde-700) — 5.21 blanco / 4.93 bg-soft |
| `--cta-bg` / `--cta-fg` | `#39776C` / `#FFFFFF` | **CTA WhatsApp** (verde de marca accesible, 5.21:1) |
| `--cta2-bg` / `--cta2-fg` | `#994EC3` / `#FFFFFF` | CTA Instagram (violeta, 4.96:1) |
| `--color-focus` | `#994EC3` | Anillo de foco (doble: halo blanco + violeta → visible sobre claro y sobre navy) |

> El verde puro de WhatsApp (`#25D366`) da 1.98:1 con texto blanco → inaccesible. Usamos `#39776C` (verde agua de marca oscurecido): mantiene la afordancia "verde = WhatsApp", cumple AA (texto blanco 5.21:1) y es coherente con la marca.

### 2.5 Acento rotativo por sección
Cada `<section>` lleva `data-accent="…"` y hereda su acento (chips, íconos, bordes, sombra de color). Navy ancla header y footer.

| # | Sección | `data-accent` |
|---|---------|---------------|
| — | Header / Nav | navy |
| 1 | Hero | violeta (multicolor de apoyo) |
| 2 | Qué es EduKinesis | verde |
| 3 | Grupos (Mini / Escolar) | mostaza |
| 4 | Propuesta educativa | violeta |
| 5 | Acompañamiento pedagógico | navy |
| 6 | Talleres | rosa |
| 7 | Actividades especiales | mostaza |
| 8 | Equipo | verde |
| 9 | Galería | violeta |
| 10 | Contacto / Footer | navy |

Patrón: verde → mostaza → violeta → rosa, rotando; navy en los extremos. Fondos siempre blancos o tinte `-50` del acento, con texto **navy o ink** encima → AA garantizado. Los acentos puros verde/mostaza/rosa (`-500`) nunca llevan texto: para texto/íconos sobre claro se usan sus `-700`.

---

## 3. Tipografía

**Títulos: Fredoka** (redondeada, chunky — combina con el puzzle 3D).
**Cuerpo: Nunito** (humanista, cálida, muy legible).
Carga vía Google Fonts en `<head>` (Etapa 2) con `display=swap` y `preconnect`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
```

### Escala (tokens `--fs-*`, fluida con `clamp()`)
| Token | Tamaño | Uso |
|-------|--------|-----|
| `--fs-100` | 12px | captions, etiquetas |
| `--fs-200` | 14px | small, metadatos |
| `--fs-300` | 16px | **cuerpo base** (mínimo móvil, evita zoom iOS) |
| `--fs-400` | 18px | lead / cuerpo grande |
| `--fs-500` | 20→24px | h4 |
| `--fs-600` | 24→32px | h3 |
| `--fs-700` | 30→44px | h2 |
| `--fs-800` | 36→60px | h1 (único por página) |

Pesos: títulos Fredoka 600 (700 para el h1/énfasis); cuerpo Nunito 400, labels 600, énfasis 700.
Interlineado: títulos `1.12–1.25`, cuerpo `1.6`. Largo de línea `--measure: 65ch`.

---

## 4. Espaciado, radios, sombras, movimiento

**Espaciado** — base 8px (medio-paso 4px): `--space-1…9` = 4·8·12·16·24·32·48·64·96.
Sección: `--section-y: clamp(48px, …, 96px)`. Gutter: `clamp(16px, …, 32px)`. Contenedor: `--container: 1200px`.

**Radios** (claymorphism): `--radius-sm 8` · `md 14` · `lg 20` · `xl 28` · `pill 999`.
Botones → `pill`; cards → `lg`/`xl`; chips → `pill`; inputs → `md`.

**Sombras** (suaves, dobles, tinte navy): `--shadow-sm/md/lg`. Piezas decorativas pueden usar `--shadow-accent` (color del acento de sección al 30%). Sin líneas duras.

**Movimiento**: `--dur-fast 150ms` / `--dur 220ms` / `--dur-slow 320ms`; `--ease-out` para entradas. Animar solo `transform`/`opacity`. Scroll-reveal sutil. Respetar `prefers-reduced-motion`.

---

## 5. Componentes (specs para la Etapa 2)

- **Botón CTA primario** (`.btn--cta`): fondo `--cta-bg`, texto `--cta-fg`, radio `pill`, padding `12px 24px`, ícono WhatsApp (Lucide) 20px + label ≥16px/600. Hover: `--cta-bg-hover` + leve `translateY(-1px)` + `--shadow-md`. Min-height 48px. Press: `scale(.98)`.
- **Botón secundario** (`.btn--ghost`): borde 2px `--color-border-strong`, texto navy, fondo transparente; hover fondo `--accent-50`.
- **Card** (`.card`): fondo `--color-surface`, radio `lg`/`xl`, `--shadow-md`, padding `--space-5`, borde 1px `--color-border`. Hover: `--shadow-lg` + `translateY(-2px)`.
- **Chip / badge de sección** (`.chip`): fondo `--accent-100`, texto `--accent-700` (verificado AA sobre su propio tinte) o `--color-ink` para máximo contraste, radio `pill`, `--fs-200`/600, padding `4px 12px`. Sobre relleno `-500` el texto/ícono va en ink/navy (nunca accent-700).
- **Ícono de feature**: cuadro redondeado `radius-md` con fondo `--accent-100` + glifo `--accent-700`, 40–48px. **Íconos SVG (Lucide), trazo 2px, 24px** — nunca emojis como íconos estructurales.
- **Header**: sticky, fondo `rgba(255,255,255,.9)` + `backdrop-filter: blur`, logo izquierda (`logo-horizontal.webp`), nav derecha, CTA WhatsApp. En móvil: logo + botón hamburguesa + CTA.
- **Sección**: `<section class="section" data-accent="…">` → `.container` adentro. Fondo blanco o `--accent-50` alternando.

---

## 6. Assets de marca (`img/`)

Logo extraído del PDF, fondo transparente:
- `logo-horizontal.webp` — lockup completo (wordmark + tagline + puzzle). Header/footer.
- `logo-wordmark.webp` — solo "EDUKINESIS".
- `logo-puzzle.webp` — ícono puzzle 3D. Hero decorativo, favicons.
- `favicon.ico`, `favicon-32/192/512.png`, `apple-touch-icon.png`.
- `og-image.jpg` — 1200×630 para Open Graph / Twitter (foto + degradado navy + wordmark). JPG por compatibilidad con scrapers (Facebook/WhatsApp/Twitter); `og-image.webp` también disponible.

### Fotos optimizadas (11 limpias, WebP, renombradas en español)
Originales en `fotos/` (gitignoreado). Salida en `img/`, `≤1100px` lado mayor (hero 1280 + variante 640), calidad ~80, metadatos eliminados.

| Archivo | Contenido / alt sugerido |
|---------|--------------------------|
| `hero-ninos-pelotas-gimnasia.webp` (+ `-640`) | 3 niños en pelotas de gimnasia al atardecer — **HERO** |
| `ninos-globos-recreacion.webp` | Dos niños sonrientes con globos azules |
| `grupo-ninos-globos.webp` | Grupo de niños celebrando con globos al aire libre |
| `taller-arte-manos-papel.webp` | Niños mostrando manos de papel del taller de arte |
| `campeonato-castillos-arena.webp` | Niños construyendo castillos de arena |
| `pelotas-gimnasia-aire-libre.webp` | Niños con pelotas de gimnasia en la cancha |
| `taller-construccion-bloques.webp` | Niños con bloques de madera (taller de construcción) |
| `juegos-grupales-cancha.webp` | Juegos grupales y cooperativos en la cancha |
| `construccion-bloques-detalle.webp` | Niño construyendo con bloques de madera |
| `taller-ciencias-experimentos.webp` | Niños en el taller de experimentos y ciencias |
| `actividad-mesa-taller.webp` | Educadora preparando una mesa de actividades |

> Todas las fotos son verticales/cuadradas (1320px de ancho en origen) → el hero usa layout **split** (texto + imagen) en desktop y apilado en móvil. Alt text descriptivo en español + "Paso de los Toros" donde sea natural (SEO).

---

## 7. Checklist de la Etapa 1
- [x] Paleta documentada con roles y rampas accesibles (WCAG AA verificado).
- [x] Tipografía (Fredoka + Nunito) con escala fluida.
- [x] Espaciado, radios, sombras, movimiento, breakpoints, z-index.
- [x] Tokens base en `styles.css` (`:root`) + reset + accesibilidad.
- [x] Specs de componentes para la Etapa 2.
- [x] Logo extraído (WebP transparente) + favicons.
- [x] 11 fotos limpias optimizadas, renombradas en español, en `img/`.
- [x] OG image 1200×630.
