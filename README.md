# 🐍 Snake Game — The Editorial Gallery

An interactive showcase of minimalist, warm-editorial design applied to classic arcade gameplay. Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

---

## ✨ Overview

**Snake Game — The Editorial Gallery Edition** translates retro arcade mechanics into a print-inspired layout. Stripping away aggressive digital noise—such as neon glows, heavy drop shadows, and glassmorphism—the design relies on bold display typography, generous negative space, flat pastel shapes, and crisp physical borders.

### Key Highlights

- **The Editorial Aesthetic**: Minimalist, publication-grade UI using **Outfit** for display headings and **JetBrains Mono** for score values.
- **Flat Contrast Palette**: Curated Muted Terracotta Rose (`#dc7f9b`) and Sage Green (`#8eb48a`) accents framed by crisp Charcoal Ink (`#292728`) borders on Natural Off-White paper (`#fcfcfc`).
- **Tactile Gameplay**: Highly responsive Snake controls supporting both **Arrow Keys / WASD** and interactive controls.
- **Real-Time Statistics**: Score keeping, high-score tracking, speed multipliers, and game state overlays (Start, Pause, Resume, Game Over).
- **Accessibility & Inclusion**: Full keyboard focus navigation, high contrast ratio exceeding WCAG AA standards, and compliance with `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) (with React Compiler)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Code Quality**: ESLint, Prettier, Husky & lint-staged

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── assets/              # Fonts, icons, and static assets
│   ├── lib/                 # Utility functions and shared helpers
│   ├── pages/
│   │   └── GameScreen/      # Main Snake game view
│   │       ├── components/  # GameBoard, ScoreBar, GameOverOverlay
│   │       ├── hooks/       # Custom game loop and state hooks
│   │       ├── index.tsx    # Main game container
│   │       └── types.ts     # Game state and board types
│   ├── App.tsx              # Root application component
│   ├── index.css            # Custom design tokens & Tailwind imports
│   └── main.tsx             # React entry point
├── DESIGN.md                # Design system specification
├── PRODUCT.md               # Product positioning & guidelines
└── package.json             # Scripts & dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PremRaj99/snake-game.git
   cd snake-frontend-game/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the Vite development server with HMR.
- `npm run build` — Runs TypeScript typechecks and builds the production app to `dist/`.
- `npm run preview` — Locally previews the built production application.
- `npm run typecheck` — Runs `tsc --noEmit` to verify type safety across the project.
- `npm run lint` — Runs ESLint to check for code quality and style violations.
- `npm run lint:fix` — Automatically fixes ESLint errors where possible.
- `npm run format` — Formats all codebase files using Prettier.

---

## 🎨 Design System & Rules

This project enforces **The Editorial Gallery** design rules as detailed in [`DESIGN.md`](file:///c:/Users/premr/OneDrive/Documents/Projects/snake-frontend-game/frontend/DESIGN.md) and [`PRODUCT.md`](file:///c:/Users/premr/OneDrive/Documents/Projects/snake-frontend-game/frontend/PRODUCT.md):

- **Pure Flat Elevation**: Zero box shadows, glows, or backdrop blurs. Depth is achieved via layering off-white background surfaces and 2px Charcoal Ink borders.
- **Strict Color Usage**: Primary Rose (`#dc7f9b`) and Accent Sage (`#8eb48a`) are strictly reserved for interactive game elements and action buttons.
- **Typography pairing**: Heading sizes powered by `Outfit`, numerical game stats rendered in `JetBrains Mono`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

