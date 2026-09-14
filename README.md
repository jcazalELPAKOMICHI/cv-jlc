# José Luis Cazal — Portfolio

Sitio personal one-page construido con **Next.js 16 (App Router)**, **TypeScript**,
**Tailwind CSS v4** y **Framer Motion**, organizado con **Clean Architecture**.
Modo oscuro por diseño, acento azul eléctrico, contenido en español e inglés con
cambio instantáneo de idioma.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router, Server Components)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4 (tokens vía `@theme`, sin `tailwind.config.js`)
- [Framer Motion](https://www.framer.com/motion/) para las animaciones
- [lucide-react](https://lucide.dev/) para los íconos

## Empezar

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run start   # sirve el build
npm run lint    # ESLint
```

## Arquitectura

El código de aplicación vive en `src/` organizado en capas de Clean
Architecture — ver [`ARCHITECTURE.md`](./ARCHITECTURE.md) para el detalle.
En resumen:

```
src/
  domain/           # entidades + interfaces de repositorio (sin dependencias externas)
  application/      # casos de uso (orquestan el dominio)
  infrastructure/   # implementación de los repositorios + contenido ES/EN + composition root
  presentation/      # todo lo que es React: providers, hooks, componentes, secciones
  app/               # rutas de Next.js (finas, solo componen presentation/)
```

La regla de dependencia se respeta en una sola dirección:
`presentation → application → domain`, con `infrastructure` implementando
los puertos que `domain` define. Cambiar de dónde viene el contenido (por
ejemplo, a un CMS) implica escribir un nuevo repositorio en
`infrastructure/` — nada en `domain/`, `application/` o `presentation/`
tendría que cambiar.

## Editar el contenido

Todo el texto (perfil, experiencia, proyectos, skills, educación) vive en:

- `src/infrastructure/content/es.ts`
- `src/infrastructure/content/en.ts`

Ambos archivos exportan un objeto tipado (`PortfolioContent`, definido en
`src/domain/entities/portfolio-content.ts`), así que TypeScript avisa si
falta un campo al editar.

## CV descargable

Los botones "Descargar CV" apuntan a `public/cv/Jose-Cazal-CV-ES.pdf` y
`public/cv/Jose-Cazal-CV-EN.pdf`. Reemplazá esos archivos cuando actualices
tu CV, manteniendo el mismo nombre (o actualizá `resumeHref` en el
contenido si cambiás el nombre del archivo).

## Foto de perfil

`public/images/avatar.jpg`. Reemplazala por otra imagen cuadrada de buena
resolución (800×800px o más) si querés cambiarla — no hace falta tocar
código, el componente ya la recorta con `object-cover`.

## Subir a GitHub

Este .zip no incluye un repo git. Para subirlo:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL-de-tu-repo>
git push -u origin main
```

## Deploy

Pensado para [Vercel](https://vercel.com/) (un click, cero configuración),
pero al ser un export 100% estático (`prerendered as static content`)
también funciona en Netlify, GitHub Pages (con `output: "export"`) o
cualquier hosting estático.

### Variables de entorno en Vercel

El sitio manda eventos a Firebase Analytics (GA4). Las claves viven en
`.env.local` en tu máquina (no se commitea, mirá `.env.example` para la
lista completa) — pero Vercel no lee ese archivo, así que en producción
hay que cargarlas a mano una sola vez:

1. En el dashboard de Vercel, entrá al proyecto → **Settings** →
   **Environment Variables**.
2. Cargá las 7 variables que están en `.env.local`
   (`NEXT_PUBLIC_FIREBASE_*`) con los mismos valores.
3. Redeployá (o esperá al próximo push) para que el build las tome.

Son valores públicos por diseño (así funciona el SDK web de Firebase),
no hace falta marcarlos como "sensitive".

## Analytics

Firebase Analytics (GA4) está instalado y manda un `page_view`
automático al cargar el sitio, más un puñado de eventos personalizados en
los CTAs más importantes:

- `download_cv` (botón "Descargar CV", en navbar/menú móvil/contacto)
- `view_projects_click` y `contact_cta_click` (botones del hero)
- `contact_email_click` y `social_link_click` (sección de contacto)
- `highlight_post_click` (link "Ver publicación" en Destacados)

La lógica vive en `src/infrastructure/analytics/firebase-client.ts`
(capa de infraestructura — el resto del código solo llama a
`trackEvent(nombre, params)`). Para agregar un evento nuevo en algún
otro botón o link, importá `trackEvent` y llamalo en su `onClick`.

Los eventos se ven en Firebase Console → Analytics → Realtime (o en
GA4 → Informes en tiempo real), tardan unos minutos en aparecer en los
informes estándar. Si tenés un bloqueador de anuncios activo en el
navegador, es normal que no se registren — muchos bloquean
`google-analytics.com` por defecto; no afecta a los visitantes reales
del sitio.

## Notas de diseño

- **Sin Google Fonts**: el sitio usa el stack de fuentes nativo del
  sistema operativo (`ui-sans-serif`, `system-ui`, …) a propósito — cero
  requests externos, cero layout shift por webfont, build 100%
  reproducible sin acceso a red. Si preferís una tipografía propia, sumá
  `next/font/local` con tus archivos de fuente en `public/fonts/`.
- **Sin teléfono ni fecha de nacimiento**: por privacidad, el sitio público
  solo expone email, LinkedIn y GitHub como contacto.
