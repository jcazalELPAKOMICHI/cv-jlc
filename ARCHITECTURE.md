# Arquitectura

Este proyecto aplica Clean Architecture a un sitio Next.js. El objetivo no
es sobre-ingeniería para un one-pager — es demostrar, en un proyecto real
y pequeño, el mismo principio que se aplica en los proyectos mobile
grandes: **las reglas de negocio y el contenido no dependen del framework
que los muestra.**

## Las cuatro capas

### 1. `src/domain/`

El centro. Entidades (`Profile`, `Experience`, `Project`, `SkillGroup`,
etc.) e interfaces de repositorio (`PortfolioRepository`). Cero imports de
React, Next.js o cualquier librería externa — son tipos e interfaces de
TypeScript puro. Esta capa no sabe que existe una UI.

### 2. `src/application/`

Casos de uso que orquestan el dominio. Hoy hay uno solo:
`GetPortfolioContent`, que recibe un `PortfolioRepository` por
constructor (inyección de dependencias manual) y expone
`execute(locale)`. Tampoco sabe nada de React ni de Next.js — podría
correr en un test de Node puro sin mockear nada del framework.

### 3. `src/infrastructure/`

Los adaptadores. `StaticPortfolioRepository` implementa
`PortfolioRepository` leyendo de `content/es.ts` y `content/en.ts` —
objetos TypeScript tipados como `PortfolioContent`. Si mañana el
contenido pasa a vivir en un CMS headless o una API, se escribe un nuevo
repositorio acá (`CmsPortfolioRepository`, por ejemplo) y nada de las
capas anteriores cambia.

`infrastructure/composition/container.ts` es el **composition root**: el
único lugar del proyecto donde se instancian clases concretas y se las
conecta entre sí. Todo lo demás depende de interfaces, no de
implementaciones.

### 4. `src/presentation/`

Todo lo que es React vive acá: providers (`LocaleProvider`, el contexto
que guarda el idioma activo), hooks (`useActiveSection`, para resaltar el
link de navegación según scroll), componentes de UI reutilizables
(`Button`, `Badge`, `SectionHeading`, `Reveal`) y las secciones de la
página (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`).

### `src/app/`

Las rutas de Next.js. `page.tsx` es un **Server Component** — el único
punto donde se llama al composition root (`getPortfolioContent`) — y le
pasa el contenido ya resuelto a `LocaleProvider`, que lo expone al resto
del árbol vía contexto de React.

## Por qué ambos locales se cargan de una

`page.tsx` resuelve **español e inglés en el servidor** (`Promise.all`) y
se los pasa ambos a `LocaleProvider`. El botón de idioma en el navbar
entonces solo cambia un `useState` en el cliente — no hay refetch, no hay
parpadeo de contenido, no hay flash de "cargando". El costo es mandar
ambos textos en el HTML inicial, que para un sitio de este tamaño es
insignificante.

## Regla de dependencia

```
presentation  →  application  →  domain
                                    ↑
                            infrastructure
```

Las flechas apuntan siempre hacia adentro. `domain` no importa nada de
afuera; `infrastructure` es la única capa que puede importar librerías
externas "de detalle" (en este caso, ninguna — es solo TypeScript
estático, pero si mañana fuera un cliente HTTP a un CMS, viviría acá).
