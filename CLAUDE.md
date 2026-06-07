# EduKinesis — Landing Page

## Qué es este proyecto
Landing page estática para **EduKinesis**, espacio educativo/recreativo para niños en Paso de los Toros, Uruguay. Dominio: **edukinesis.uy**. Deploy en **Vercel**.

Objetivos:
1. SEO local: aparecer en búsquedas como "actividades para niños Paso de los Toros", "recreación infantil Paso de los Toros", "apoyo escolar Paso de los Toros".
2. Dar imagen profesional al proyecto (el contacto real pasa por Instagram y WhatsApp).

## Stack y restricciones
- **HTML + CSS + JS vanilla. Sin frameworks, sin build step.** Un solo `index.html` con `styles.css` y `script.js` separados.
- Sin lógica de backend, sin formularios con servidor. El CTA principal es **WhatsApp** y secundario Instagram.
- No usar localStorage/sessionStorage.
- Mobile-first: la mayoría del tráfico vendrá de Instagram en celular.

## Diseño

### Paleta de marca (OBLIGATORIA — extraída del PDF de marca en la raíz)
Estos son los colores oficiales de EduKinesis (logo de piezas de puzzle). NO inventar otros tonos; derivar variantes (hover, fondos claros) a partir de estos:
- Violeta: `#994EC3`
- Verde agua: `#61CCB9` (versión clara tipografía: `#97CFCA`)
- Mostaza: `#DFA53C`
- Rosa: `#FE94F5`
- Azul oscuro: `#1D5074` (contorno del logotipo — sirve como color de texto/headings sobre fondo claro)
El logo (puzzle 3D + logotipo) está en el PDF `Documento A4 princesas Hoja de papel multicolor.pdf` — extraerlo a PNG/WebP con fondo transparente o blanco para usar en hero, favicon y OG image.

- Usar la skill **ui-ux-pro-max** para definir sistema de diseño (tipografía, espaciado) sobre esta paleta, y los agentes de diseño de **gstack** para iterar.
- Tono: alegre e infantil pero **profesional** — colores vivos pero cuidados, nada amateur. Es un emprendimiento educativo serio dirigido a padres.
- Las fotos reales están en `fotos/` (renombrarlas con nombres descriptivos en español, ej. `juegos-al-aire-libre.webp`, convertir a WebP, comprimir, `loading="lazy"`).
- Animaciones sutiles (scroll reveal está bien), nada que pese.

## Contenido
Todo el contenido sale de `resumenEduKinesis.md` (es el texto que pasó el dueño — respetarlo, se puede pulir redacción pero no inventar servicios ni datos).

Secciones sugeridas:
1. **Hero**: nombre, tagline ("Guiando a cada niño para que descubra su versión más feliz"), ubicación, CTA WhatsApp.
2. **Qué es EduKinesis** (desarrollo motriz, social, recreativo, emocional, pedagógico).
3. **Grupos**: Mini (4-5 años) y Escolar (6-11 años), lunes a viernes.
4. **Propuesta educativa** (habilidades motrices, expresión corporal, juegos, predeportes…).
5. **Acompañamiento pedagógico** (refuerzo escolar, tareas, hábitos de estudio).
6. **Talleres** (arte, ludopedagógico, deportes alternativos, ciencias, salud, construcción).
7. **Actividades especiales** (Día de la Familia, Olimpiadas, pijamadas, colonias…).
8. **Equipo**: Profesor de Ed. Física, Maestra de Primaria, Recreadora educativa.
9. **Galería de fotos**.
10. **Contacto / footer** con mapa o dirección.

## Datos de contacto (verificados por el dueño)
- 📍 Aparicio Saravia 773 – Club América, Paso de los Toros, Tacuarembó, Uruguay
- 📱 WhatsApp: 092 212 161 → link `https://wa.me/59892212161` con mensaje precargado
- 📧 edukinesis9@gmail.com
- 📸 Instagram: https://www.instagram.com/edukinesiss/ (ojo: con doble "s")
- ▶️ YouTube: @edukinesis

## SEO (prioridad alta — es la razón de ser de la página)
- `lang="es"`, HTML semántico (header/main/section/footer, un solo h1).
- `<title>` y meta description con keywords locales, ej: "EduKinesis | Actividades recreativas y educativas para niños en Paso de los Toros".
- Open Graph + Twitter cards con foto real.
- **JSON-LD** tipo `LocalBusiness`/`ChildCare` con nombre, dirección, teléfono, geo, horarios.
- `sitemap.xml`, `robots.txt`, favicon, `canonical` a https://edukinesis.uy.
- Alt text descriptivo en español en todas las imágenes.
- Mencionar "Paso de los Toros" naturalmente en headings y texto.

## Performance
- Lighthouse 90+ en todo. Imágenes WebP comprimidas, fuentes con `font-display: swap`, CSS/JS mínimos.

## Verificación antes de dar por terminado
- Probar responsive (375px, 768px, 1440px).
- Validar JSON-LD (Rich Results Test) y que todos los links (wa.me, Instagram, mail) funcionen.
- Correr Lighthouse.
