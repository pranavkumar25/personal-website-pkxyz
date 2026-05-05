# pk-pw-site

Personal site for Pranav Kumar. Ground-up redesign.

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS, custom brand tokens
- Local fonts (Ovo, LT Superior). No CDN.

## Run

```bash
npm install
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview the build
```

## Structure

```
src/
  App.tsx            Root + lightweight hash router
  main.tsx
  index.css          Brand tokens, fonts, motion
  lib/data.ts        Projects, writings, services, timeline, beliefs
  components/        Mark, Cursor, Reveal, Nav, Footer, WorkRow, ...
  pages/             Home, Work, About, Writing, Contact (lazy split)
public/
  fonts/             Local OTF/TTF files
  favicon.svg
```

## Brand notes
- Two tones, one signal: Midnight (#000023), Bone (#FDFDF8), Signal (#367AFF)
- Supporting: Ink (#1A1A3A), Slate (#3A3A55), Sand (#E8DFC8)
- Display: Ovo (regular + italic). Body and UI: LT Superior (400, 500)
- 12-column grid, 8 pt vertical rhythm, 80 px outer margin at desktop
- Motion: 160 / 240 / 600 ms. Curve: cubic-bezier(.2, .8, .2, 1)

## Performance
- Pages lazy-loaded via React.lazy
- Fonts preloaded with font-display swap
- Initial JS payload around 57 KB gzipped (incl. React)
- CSS around 7 KB gzipped
