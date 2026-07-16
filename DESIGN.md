---
name: Snake Game Design System
description: A warm-editorial, minimalist, flat-color aesthetic for arcade gameplay.
colors:
  primary: '#dc7f9b'
  accent: '#8eb48a'
  neutral-bg: '#fcfcfc'
  neutral-surface: '#f2f0ee'
  ink: '#292728'
  muted: '#8a8688'
typography:
  display:
    fontFamily: 'Outfit, system-ui, sans-serif'
    fontSize: 'clamp(2.5rem, 6vw, 4rem)'
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: '-0.02em'
  body:
    fontFamily: 'Outfit, system-ui, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 'normal'
  label:
    fontFamily: 'JetBrains Mono, monospace'
    fontSize: '14px'
    fontWeight: 600
    letterSpacing: '0.05em'
rounded:
  sm: '4px'
  md: '8px'
spacing:
  sm: '8px'
  md: '16px'
  lg: '24px'
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.neutral-bg}'
    rounded: '{rounded.md}'
    padding: '12px 24px'
  button-primary-hover:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.neutral-bg}'
---

# Design System: Snake Game

## 1. Overview

**Creative North Star: "The Editorial Gallery"**

The Editorial Gallery translates retro-arcade energy into a sophisticated, print-like layout. Generous negative space, bold asymmetric headers, and clean structured grids form the foundation. It strips away the digital noise of glowing neon lines, heavy drop shadows, and glassmorphism. Instead, it relies on high-quality editorial typography, solid flat pastel shapes, and tactile physical borders to convey focus and hierarchy.

The aesthetic is quiet, confident, and highly structured, making the game feel like a page out of a premium design magazine rather than an overstimulating arcade machine.

**Key Characteristics:**

- High typographic legibility with Outfit and JetBrains Mono.
- Generous, clean whitespace that allows the layout to breathe.
- Saturated flat color fills for game elements (rose, sage) on a warm off-white canvas.
- Thick, physical-feeling borders instead of soft drop shadows.

## 2. Colors

A quiet, natural palette with rich pastel highlights that provide clear legibility and contrast.

### Primary

- **Muted Terracotta Rose** (#dc7f9b / oklch(0.68 0.15 345)): Used for the primary snake body and main action buttons. Provides warm brand identity.

### Accent

- **Sage Green** (#8eb48a / oklch(0.72 0.08 140)): Used for the snake's head and food, signifying growth, life, and primary targets.

### Neutral

- **Natural Off-White Paper** (#fcfcfc / oklch(0.99 0.00 0)): The main screen background. Calm, bright, and organic.
- **Warm Muted Paper** (#f2f0ee / oklch(0.95 0.005 345)): Used for container backgrounds, inactive cells, and side widgets.
- **Charcoal Ink** (#292728 / oklch(0.25 0.01 345)): Body text, active outlines, and high-emphasis button borders.
- **Muted Slate** (#8a8688 / oklch(0.55 0.01 345)): Secondary labels, gridlines, and keyboard shortcuts.

### Named Rules

**The Flat Contrast Rule.** Accent elements (Muted Rose and Sage Green) must be filled as solid shapes, framed by a crisp Charcoal Ink border (1px or 2px) to ensure separation against the warm off-white background. No gradients are allowed on fills.

**The Accents-Only Rule.** Saturated colors (Primary Rose, Accent Sage) are reserved strictly for interactive game objects (the snake, food, play button) and key indicators. Administrative containers and controls must remain neutral.

## 3. Typography

**Display Font:** Outfit (sans-serif)
**Body Font:** Outfit (sans-serif)
**Label/Mono Font:** JetBrains Mono (monospace)

**Character:** A high-contrast pairing of a geometric, friendly sans-serif for display headings and body text, with a clean, structural monospace font for numbers, keyboard keys, and scores.

### Hierarchy

- **Display** (800, clamp(2.5rem, 6vw, 4rem), 1.1): Used for the main page header ("SNAKE") and the "Game Over" title.
- **Headline** (700, 24px, 1.2): Used for card titles and screen status indicators.
- **Title** (600, 20px, 1.3): Used for high-emphasis stat values (e.g. final scores).
- **Body** (400, 16px, 1.5): Used for paragraph content and game explanations. Line lengths kept between 65-75ch.
- **Label** (600, 14px, 1.2, uppercase): Used for button labels, score headers, and keyboard hints.

## 4. Elevation

Depth in this system is entirely flat. The system explicitly rejects CSS box shadows, inset shadows, and background blurs. Depth and layering are conveyed exclusively through thick solid borders, background color hierarchy (layering Surface on top of Background), and bold fill contrasts.

### Named Rules

**The Flat Layering Rule.** Rather than lifting cards using shadows, separate layers by stacking a Warm Muted Paper surface on a Natural Off-White canvas, bordered with a solid 2px Charcoal Ink line.

## 5. Components

### Buttons

- **Shape:** Rounded-medium (8px radius)
- **Primary:** Solid Muted Terracotta Rose fill, 2px Charcoal Ink border, Charcoal Ink text. Internal padding is 12px vertical, 24px horizontal.
- **Hover / Focus:** Fills solid Charcoal Ink with Natural Off-White text on hover. Shifts 2px up.

### Game Board

- **Border:** Thick 3px Charcoal Ink outline.
- **Grid cells:** Separated by very thin, subtle Muted Slate gridlines (1px).
- **Snake segments:** Rounded-small (4px radius) flat rose tiles with a 1px Charcoal border.
- **Snake head:** Flat Sage Green tile with physical round eyes.
- **Food:** A clean, flat round circle in Sage Green.

### Score Bar

- **Style:** Flat Warm Muted Paper container with a 2px Charcoal border.
- **Values:** Score and Speed shown in bold JetBrains Mono typography for maximum legibility.

## 6. Do's and Don'ts

### Do:

- **Do** use a solid 2px Charcoal border to enclose cards, score panels, and overlays.
- **Do** display numerals (score, speed, ticks) in JetBrains Mono.
- **Do** align the layout elements to a strict print-style grid.
- **Do** use uppercase and wide tracking (0.05em) for small labels.

### Don't:

- **Don't** use CSS box-shadows, glow filters, or neon blur animations.
- **Don't** use gradients, metallic fills, or shiny 3D reflections on the snake or food.
- **Don't** use sketchy, doodled SVG shapes for controls.
- **Don't** use side-stripe border accents on indicators.
- **Don't** use default warm-cream/biscuit backgrounds that mimic generic AI templates. Use off-white (#fcfcfc).
