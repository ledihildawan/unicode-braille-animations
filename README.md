# Braille Spinners ⠿ | Pure CSS Loading Animations

A zero-dependency collection of ultra-lightweight, pure CSS loading indicators built entirely with Unicode Braille characters. 

**Zero SVGs. Zero Dependencies. Infinitely Scalable.**

---

## ✨ Features

- **Pure CSS Engine:** High-performance animations without a single line of JavaScript.
- **Modern Color Space:** Powered by `OKLCH` for consistent luminance and vibrant "HDR-like" colors.
- **Physical Bloom Effect:** Multi-layered shadows and non-linear gradients for a premium hardware feel.
- **Ultra Lightweight:** Uses native browser text rendering—smaller than the tiniest SVG.
- **SEO & A11y Optimized:** Fully accessible with semantic `role="status"` and screen-reader support.

## 🚀 Quick Start

### 1. Global Configuration
Add these design tokens to your `:root` or global stylesheet to control the atmospheric glow and shimmer.

```css
:root {
  --loader-shimmer-base: #3f3f46;
  --loader-shimmer-peak: #ffffff;
  --loader-glow-lg: 0.625rem;
  --loader-glow-sm: 0.125rem;
  --loader-glow-color: #ffffff;
}

.braille-loader {
  /* Ensuring perfect grid alignment for unicode characters */
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.braille-loader::after {
  display: inline-block;
  white-space: pre;
  background: linear-gradient(90deg, 
    var(--loader-shimmer-base) 0%, 
    color-mix(in oklch, var(--loader-shimmer-base) 80%, var(--loader-shimmer-peak)) 30%, 
    var(--loader-shimmer-peak) 50%, 
    color-mix(in oklch, var(--loader-shimmer-base) 80%, var(--loader-shimmer-peak)) 70%, 
    var(--loader-shimmer-base) 100%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  will-change: background-position, filter;
  pointer-events: none;
}
```

### 2. Implementation Example: "Core Pulse"
To use the "Core Pulse" animation, copy the following keyframes and class:

```css
/* Physical Bloom Animation Engine */
@keyframes l-pls-sync { 
  0%, 50%, 100% { opacity: 0.3; filter: brightness(0.5); background-position: 200% center; } 
  18% { 
    opacity: 1; 
    filter: brightness(1.8) 
            drop-shadow(0 0 var(--loader-glow-sm) var(--loader-glow-color)) 
            drop-shadow(0 0 calc(var(--loader-glow-lg) * 2) color-mix(in oklch, var(--loader-glow-color) 60%, transparent)); 
    background-position: 50% center; 
  } 
  34% { background-position: -100% center; } 
}

/* Unicode Transition Engine */
@keyframes sp-pls { 
  0%, 100% { content: "⠀⠶⠀"; } 
  10% { content: "⠰⣿⠆"; } 
  18% { content: "⢾⣿⡷"; } 
  26% { content: "⢾⣉⡷"; } 
  34% { content: "⣏⣉⣹"; } 
  42% { content: "⡁⠀⢈"; } 
  50% { content: "⠀⠶⠀"; } 
}

.spinner-pulse::after { 
  content: "⠀⠶⠀"; 
  animation: sp-pls 1.4s step-end infinite, 
             l-pls-sync 1.4s cubic-bezier(0.1, 0.9, 0.2, 1) infinite; 
}
```

### 3. Usage
Simply call the class in your HTML:

```html
<span class="braille-loader spinner-pulse" role="status" aria-label="Loading"></span>
```

## 🎨 Available Animations
Visit our live demo for full snippets of:
- **Cascade Drop** - Fluid falling particles.
- **Twin Helix** - Dynamic 3D-like DNA structure.
- **Matrix Rain** - Cyberpunk digital rain effect.
- **Breathing Focus** - Smooth expansion & contraction.
- **Slithering Snake** - Classic nostalgic snake path.
- **Rising Columns** - Equalizer-style vertical growth.
- **Classic Spinner** - The reliable CLI-style loader.

## 👨‍💻 Author
Crafted with passion by **[Ledi Hildawan](https://www.instagram.com/ledihildawan)**.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).