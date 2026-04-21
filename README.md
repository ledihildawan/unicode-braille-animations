# Unicode Braille Animations ⠿

A seamless, lightweight, and pure CSS collection of loading indicators built entirely with Unicode Braille characters. 

Zero SVGs. Zero external dependencies. Infinitely scalable and copy-paste ready.

## ✨ Features

- **Pure CSS:** No JavaScript required for the animations.
- **Lightweight:** Uses native browser text rendering.
- **Accessible:** Uses `aria-hidden` and `role="status"` for screen readers.
- **Customizable:** Easily change colors, sizing, and glow effects via CSS variables.
- **Theme Ready:** Built-in support for Light and Dark modes.

## 🚀 Quick Start

### 1. Add Base Configuration
Add these base CSS variables to your global stylesheet. This controls the colors and glow effects.

```css
:root {
  --braille-shimmer-base: #3f3f46;
  --braille-shimmer-peak: #ffffff;
  --braille-glow: 10px #ffffff;
  --braille-glow-sm: 6px #ffffff;
}

.braille-loader {
  /* Keeps characters perfectly aligned */
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.braille-loader::after {
  display: inline-block; 
  white-space: pre;
  background: linear-gradient(90deg, var(--braille-shimmer-base) 0%, var(--braille-shimmer-base) 30%, var(--braille-shimmer-peak) 50%, var(--braille-shimmer-base) 70%, var(--braille-shimmer-base) 100%);
  background-size: 200% auto; 
  color: transparent;
  -webkit-background-clip: text; 
  background-clip: text;
  will-change: background-position, filter, opacity; 
  pointer-events: none;
}
```

### 2. Choose an Animation
Pick an animation (e.g., Pulse) and add its specific keyframes to your CSS.

```css
/* Animation Engine for Pulse */
@keyframes l-pls-sync { 
  0%, 50%, 100% { opacity: .3; filter: drop-shadow(0 0 0 transparent) brightness(.8); background-position: 200% center; } 
  18% { opacity: 1; filter: drop-shadow(0 0 var(--braille-glow)) brightness(1.5) contrast(1.2); background-position: 50% center; } 
  34% { background-position: -100% center; } 
}

/* Component Class */
.spinner-pulse::after { 
  content: "⠀⠶⠀"; 
  animation: sp-pls 1.4s step-end infinite, l-pls-sync 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite; 
}

@keyframes sp-pls { 
  0%, 100% { content: "⠀⠶⠀"; } 
  10% { content: "⠰⣿⠆"; } 
  18% { content: "⢾⣿⡷"; } 
  26% { content: "⢾⣉⡷"; } 
  34% { content: "⣏⣉⣹"; } 
  42% { content: "⡁⠀⢈"; } 
  50% { content: "⠀⠶⠀"; } 
}
```

### 3. Use in HTML
Call the class anywhere in your HTML markup.

```html
<span class="braille-loader spinner-pulse" role="status" aria-label="Loading"></span>
```

## 🎨 Available Snippets
Visit the live demo to copy-paste directly:
- Cascade Drop
- Ripple Wave
- Twin Helix
- Matrix Rain
- Breathing Focus
- Diagonal Wipe
- Core Pulse
- Slithering Snake
- Static Glitch
- Rising Columns
- Radar Scan
- Fill Sweep
- Satellite Orbit
- Stardust Sparkle
- Classic Spinner

## 👨‍💻 Author

Crafted by **[Ledi Hildawan](https://www.instagram.com/ledihildawan)** for the Developer Community.

## 📄 License

This project is released under the [MIT License](LICENSE).