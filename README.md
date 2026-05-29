# Portfolio v2

Modern React portfolio built with Vite, TypeScript, Tailwind CSS, Motion, and Lucide icons.

## Scripts

- `npm run dev` - start the local Vite server on port 3000
- `npm run build` - create a production build in `dist`
- `npm run preview` - preview the production build
- `npm run lint` - run TypeScript validation
- `npm run clean` - remove the production build output

## Architecture

```text
src/
  app/                  App shell and global composition
  components/
    effects/            Global visual effects such as cursor, noise, particles
    layout/             Navigation, footer, scroll controls, social rail
    ui/                 Shared reusable UI primitives
  data/                 Portfolio content, projects, social links, skills
  features/
    contact/            Contact section and form interaction
    home/               Hero, about, and experience sections
    projects/           Projects grid and project modal
    skills/             Skills section
  lib/                  Shared browser utilities
  index.css             Tailwind theme and global styles
  main.tsx              React entry point
```

Path aliases are configured with `@` pointing to `src`, so imports stay stable when files move.
