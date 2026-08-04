(function (global) {
  'use strict';

  const SPINNER_CONFIGS = {
    'spinner-cascade': { name: 'Cascade Drop', sync: 'spinner-glow-sweep' },
    'spinner-wave': { name: 'Ripple Wave', sync: 'spinner-glow-sweep' },
    'spinner-helix': { name: 'Twin Helix', sync: 'spinner-glow-sweep' },
    'spinner-rain': { name: 'Matrix Rain', sync: 'spinner-glow-sweep' },
    'spinner-breathe': { name: 'Breathing Focus', sync: 'spinner-glow-pulse' },
    'spinner-diagonal': { name: 'Diagonal Wipe', sync: 'spinner-glow-sweep' },
    'spinner-pulse': { name: 'Core Pulse', sync: 'spinner-glow-pulse' },
    'spinner-snake': { name: 'Slithering Snake', sync: 'spinner-glow-sweep' },
    'spinner-glitch': { name: 'Static Glitch', sync: 'spinner-glow-glitch' },
    'spinner-columns': { name: 'Rising Columns', sync: 'spinner-glow-sweep' },
    'spinner-scan': { name: 'Radar Scan', sync: 'spinner-glow-scan' },
    'spinner-sweep': { name: 'Fill Sweep', sync: 'spinner-glow-sweep' },
    'spinner-orbit': { name: 'Satellite Orbit', sync: 'spinner-glow-pulse' },
    'spinner-sparkle': { name: 'Stardust Sparkle', sync: 'spinner-glow-glitch' },
    'spinner-basic': { name: 'Classic Spinner', sync: 'spinner-glow-pulse' },
  };

  const GLOW_ANIMATIONS = {
    'spinner-glow-sweep': '@keyframes spinner-glow-sweep {\n  0% { background-position: 200% center; filter: brightness(var(--spinner-bright-low)); }\n  50% { filter: brightness(var(--spinner-bright-high)) drop-shadow(0 0 var(--spinner-glow-sm) var(--spinner-glow-color)); }\n  100% { background-position: -200% center; filter: brightness(var(--spinner-bright-low)); }\n}',
    'spinner-glow-pulse': '@keyframes spinner-glow-pulse {\n  0%, 100% { filter: brightness(var(--spinner-bright-low)); background-position: 50% center; }\n  50% { filter: brightness(var(--spinner-bright-high)) drop-shadow(0 0 var(--spinner-glow-sm) var(--spinner-glow-color)); background-position: 50% center; }\n}',
    'spinner-glow-glitch': '@keyframes spinner-glow-glitch {\n  0%, 100% { filter: brightness(var(--spinner-bright-low)); background-position: 50% center; }\n  20%, 80% { filter: brightness(var(--spinner-bright-high)) drop-shadow(0 0 var(--spinner-glow-sm) var(--spinner-glow-color)); background-position: 50% center; }\n  40%, 60% { filter: brightness(var(--spinner-bright-low)); background-position: 50% center; }\n}',
    'spinner-glow-scan': '@keyframes spinner-glow-scan {\n  0% { background-position: 200% center; filter: brightness(var(--spinner-bright-low)); }\n  100% { background-position: -200% center; filter: brightness(var(--spinner-bright-high)) drop-shadow(0 0 var(--spinner-glow-sm) var(--spinner-glow-color)); }\n}',
  };

  const SPINNER_CSS = {
    'spinner-cascade': '.spinner-cascade {\n  width: 4ch;\n}\n.spinner-cascade::after {\n  content: "⠁⠀⠀⠀";\n  animation: spinner-cascade 0.98s step-end infinite, spinner-glow-sweep 0.98s linear infinite;\n}\n@keyframes spinner-cascade {\n  0%, 100% { content: "⠁⠀⠀⠀"; }\n  7.1% { content: "⠋⠀⠀⠀"; }\n  14.2% { content: "⠞⠁⠀⠀"; }\n  21.4% { content: "⡴⠋⠀⠀"; }\n  28.5% { content: "⣠⠞⠁⠀"; }\n  35.7% { content: "⢀⡴⠋⠀"; }\n  42.8% { content: "⠀⣠⠞⠁"; }\n  50% { content: "⠀⢀⡴⠋"; }\n  57.1% { content: "⠀⠀⣠⠞"; }\n  64.2% { content: "⠀⠀⢀⡴"; }\n  71.4% { content: "⠀⠀⠀⣠"; }\n  78.5% { content: "⠀⠀⠀⢀"; }\n  85.7%, 92.8% { content: "⠀⠀⠀⠀"; }\n}',
    'spinner-wave': '.spinner-wave {\n  width: 4ch;\n}\n.spinner-wave::after {\n  content: "⠑⢄⠔⠑";\n  animation: spinner-wave 0.96s step-end infinite, spinner-glow-sweep 0.96s linear infinite;\n}\n@keyframes spinner-wave {\n  0%, 100% { content: "⠑⢄⠔⠑"; }\n  14.2% { content: "⠊⠆⢄⠊"; }\n  28.5% { content: "⠢⠑⢄⠢"; }\n  42.8% { content: "⢄⠢⠑⢄"; }\n  57.1% { content: "⠔⢄⠢⠔"; }\n  71.4% { content: "⠒⠔⢄⠒"; }\n  85.7% { content: "⠆⠒⠔⠆"; }\n}',
    'spinner-helix': '.spinner-helix {\n  width: 4ch;\n}\n.spinner-helix::after {\n  content: "⢁⠦⠔⡈";\n  animation: spinner-helix 1.02s step-end infinite, spinner-glow-sweep 1.02s linear infinite;\n}\n@keyframes spinner-helix {\n  0%, 100% { content: "⢁⠦⠔⡈"; }\n  16.6% { content: "⠦⠔⡈⠔"; }\n  33.3% { content: "⠔⡈⠔⠦"; }\n  50% { content: "⡈⠔⠦⢁"; }\n  66.6% { content: "⠔⠦⢁⠦"; }\n  83.3% { content: "⠦⢁⠦⠔"; }\n}',
    'spinner-rain': '.spinner-rain {\n  width: 4ch;\n}\n.spinner-rain::after {\n  content: "⠁⠄⠂⡀";\n  animation: spinner-rain 0.88s step-end infinite, spinner-glow-sweep 0.88s linear infinite;\n}\n@keyframes spinner-rain {\n  0%, 100% { content: "⠁⠄⠂⡀"; }\n  14.2% { content: "⠊⡀⠌⠀"; }\n  28.5% { content: "⠔⠈⡐⠁"; }\n  42.8% { content: "⡀⠑⠡⠊"; }\n  57.1% { content: "⠡⠢⢂⠔"; }\n  71.4% { content: "⢂⢄⠄⡠"; }\n  85.7% { content: "⠄⡀⡀⢀"; }\n}',
    'spinner-breathe': '.spinner-breathe {\n  width: 1ch;\n}\n.spinner-breathe::after {\n  content: "⠁";\n  animation: spinner-breathe 2.8s step-end infinite, spinner-glow-pulse 2.8s ease-in-out infinite;\n}\n@keyframes spinner-breathe {\n  0%, 100% { content: "⠁"; }\n  15% { content: "⠑"; }\n  21% { content: "⠕"; }\n  26% { content: "⢕"; }\n  30% { content: "⢝"; }\n  34% { content: "⢟"; }\n  38% { content: "⢿"; }\n  45%, 55% { content: "⣿"; }\n  62% { content: "⢿"; }\n  66% { content: "⢟"; }\n  70% { content: "⢝"; }\n  74% { content: "⢕"; }\n  79% { content: "⠕"; }\n  85% { content: "⠑"; }\n  92% { content: "⠁"; }\n}',
    'spinner-diagonal': '.spinner-diagonal {\n  width: 2ch;\n}\n.spinner-diagonal::after {\n  content: "⠀⠀";\n  animation: spinner-diagonal 1.26s step-end infinite, spinner-glow-sweep 1.26s linear infinite;\n}\n@keyframes spinner-diagonal {\n  0%, 100% { content: "⠀⠀"; }\n  7.1% { content: "⠁⠀"; }\n  14.2% { content: "⠋⠀"; }\n  21.4% { content: "⠟⠁"; }\n  28.5% { content: "⡿⠋"; }\n  35.7% { content: "⣿⠟"; }\n  42.8% { content: "⣿⡿"; }\n  50% { content: "⣿⣿"; }\n  57.1% { content: "⣾⣿"; }\n  64.2% { content: "⣴⣿"; }\n  71.4% { content: "⣠⣾"; }\n  78.5% { content: "⢀⣴"; }\n  85.7% { content: "⠀⣠"; }\n  92.8% { content: "⠀⢀"; }\n}',
    'spinner-pulse': '.spinner-pulse {\n  width: 3ch;\n}\n.spinner-pulse::after {\n  content: "⠀⠶⠀";\n  animation: spinner-pulse 1.4s step-end infinite, spinner-glow-pulse 1.4s cubic-bezier(0.1, 0.9, 0.2, 1) infinite;\n}\n@keyframes spinner-pulse {\n  0%, 100% { content: "⠀⠶⠀"; }\n  10% { content: "⠰⣿⠆"; }\n  20% { content: "⢾⣿⡷"; }\n  30% { content: "⢾⣉⡷"; }\n  40% { content: "⣏⣉⣹"; }\n  50% { content: "⡁⠀⢈"; }\n  60%, 90% { content: "⠀⠀⠀"; }\n}',
    'spinner-snake': '.spinner-snake {\n  width: 3ch;\n}\n.spinner-snake::after {\n  content: "⣁⠀⠀";\n  animation: spinner-snake 1.44s step-end infinite, spinner-glow-sweep 1.44s linear infinite;\n}\n@keyframes spinner-snake {\n  0% { content: "⣁⠀⠀"; }\n  6.25% { content: "⡉⠀⠀"; }\n  12.5% { content: "⠉⠀⠁"; }\n  18.75% { content: "⠈⠀⠉"; }\n  25% { content: "⠀⠀⠙"; }\n  31.25% { content: "⠀⠀⠚"; }\n  37.5% { content: "⠐⠀⠒"; }\n  43.75% { content: "⠒⠀⠂"; }\n  50% { content: "⠖⠀⠀"; }\n  56.25% { content: "⠦⠀⠀"; }\n  62.5% { content: "⠤⠀⠄"; }\n  68.75% { content: "⠠⠀⠤"; }\n  75% { content: "⠀⠀⢤"; }\n  81.25% { content: "⠀⠀⣠"; }\n  87.5% { content: "⢀⠀⣀"; }\n  93.75% { content: "⣀⠀⡀"; }\n  100% { content: "⣁⠀⠀"; }\n}',
    'spinner-glitch': '.spinner-glitch {\n  width: 3ch;\n}\n.spinner-glitch::after {\n  content: "⢕⢕⢕";\n  animation: spinner-glitch 1.8s step-end infinite, spinner-glow-glitch 1.8s step-end infinite;\n}\n@keyframes spinner-glitch {\n  0%, 8%, 22%, 68%, 82%, 100% { content: "⢕⢕⢕"; }\n  10%, 70% { content: "⡪⡪⡪"; }\n  20%, 80% { content: "⢊⠔⡡"; }\n}',
    'spinner-columns': '.spinner-columns {\n  width: 3ch;\n}\n.spinner-columns::after {\n  content: "⠀⠀⠀";\n  animation: spinner-columns 1.8s step-end infinite, spinner-glow-sweep 1.8s linear infinite;\n}\n@keyframes spinner-columns {\n  0%, 100% { content: "⠀⠀⠀"; }\n  4% { content: "⡀⠀⠀"; }\n  8% { content: "⡄⠀⠀"; }\n  12% { content: "⡆⠀⠀"; }\n  16% { content: "⡇⠀⠀"; }\n  20% { content: "⣇⠀⠀"; }\n  24% { content: "⣧⠀⠀"; }\n  28% { content: "⣷⠀⠀"; }\n  32% { content: "⣿⠀⠀"; }\n  36% { content: "⣿⡀⠀"; }\n  40% { content: "⣿⡄⠀"; }\n  44% { content: "⣿⡆⠀"; }\n  48% { content: "⣿⡇⠀"; }\n  52% { content: "⣿⣇⠀"; }\n  56% { content: "⣿⣧⠀"; }\n  60% { content: "⣿⣷⠀"; }\n  64% { content: "⣿⣿⠀"; }\n  68% { content: "⣿⣿⡀"; }\n  72% { content: "⣿⣿⡄"; }\n  76% { content: "⣿⣿⡆"; }\n  80% { content: "⣿⣿⡇"; }\n  84% { content: "⣿⣿⣇"; }\n  88% { content: "⣿⣿⣧"; }\n  92% { content: "⣿⣿⣷"; }\n  96% { content: "⣿⣿⣿"; }\n}',
    'spinner-scan': '.spinner-scan {\n  width: 4ch;\n}\n.spinner-scan::after {\n  content: "⣿⠀⠀⠀";\n  animation: spinner-scan 0.6s step-end infinite alternate, spinner-glow-scan 0.6s ease-in-out infinite alternate;\n}\n@keyframes spinner-scan {\n  0% { content: "⣿⠀⠀⠀"; }\n  16.6% { content: "⢸⡇⠀⠀"; }\n  33.3% { content: "⠀⣿⠀⠀"; }\n  50% { content: "⠀⢸⡇⠀"; }\n  66.6% { content: "⠀⠀⣿⠀"; }\n  83.3% { content: "⠀⠀⢸⡇"; }\n  100% { content: "⠀⠀⠀⣿"; }\n}',
    'spinner-sweep': '.spinner-sweep {\n  width: 3ch;\n}\n.spinner-sweep::after {\n  content: "⠀⠀⠀";\n  animation: spinner-sweep 1.68s step-end infinite, spinner-glow-sweep 1.68s linear infinite;\n}\n@keyframes spinner-sweep {\n  0% { content: "⠀⠀⠀"; }\n  12.5% { content: "⣀⠀⣀"; }\n  25% { content: "⣤⠀⣤"; }\n  37.5% { content: "⣶⠀⣶"; }\n  50% { content: "⣿⠀⣿"; }\n  62.5% { content: "⣶⠀⣶"; }\n  75% { content: "⣤⠀⣤"; }\n  87.5% { content: "⣀⠀⣀"; }\n  100% { content: "⠀⠀⠀"; }\n}',
    'spinner-orbit': '.spinner-orbit {\n  width: 1ch;\n}\n.spinner-orbit::after {\n  content: "⠉";\n  animation: spinner-orbit 0.8s step-end infinite, spinner-glow-pulse 0.8s linear infinite;\n}\n@keyframes spinner-orbit {\n  0% { content: "⠉"; }\n  12.5% { content: "⠘"; }\n  25% { content: "⠰"; }\n  37.5% { content: "⢠"; }\n  50% { content: "⣀"; }\n  62.5% { content: "⡄"; }\n  75% { content: "⠆"; }\n  87.5% { content: "⠃"; }\n  100% { content: "⠉"; }\n}',
    'spinner-sparkle': '.spinner-sparkle {\n  width: 4ch;\n}\n.spinner-sparkle::after {\n  content: "⠀⠁⠀⠂";\n  animation: spinner-sparkle 0.5s step-end infinite, spinner-glow-glitch 0.5s step-end infinite;\n}\n@keyframes spinner-sparkle {\n  0%, 90%, 100% { content: "⠀⠁⠀⠂"; }\n  10% { content: "⠠⠀⢀⠀"; }\n  20% { content: "⠀⠐⠉⠁"; }\n  30% { content: "⠁⠂⠀⠐"; }\n  40% { content: "⠑⠊⠔⠢"; }\n  50% { content: "⠀⢀⠠⠀"; }\n  60% { content: "⠂⠀⠁⠀"; }\n  70% { content: "⠐⠀⠐⠀"; }\n  80% { content: "⢀⠠⠑⠊"; }\n}',
    'spinner-basic': '.spinner-basic {\n  width: 1ch;\n}\n.spinner-basic::after {\n  content: "⠋";\n  animation: spinner-basic 0.95s step-end infinite, spinner-glow-pulse 0.95s linear infinite;\n}\n@keyframes spinner-basic {\n  0% { content: "⠋"; }\n  10% { content: "⠙"; }\n  20% { content: "⠹"; }\n  30% { content: "⠸"; }\n  40% { content: "⠼"; }\n  50% { content: "⠴"; }\n  60% { content: "⠦"; }\n  70% { content: "⠧"; }\n  80% { content: "⠇"; }\n  90% { content: "⠏"; }\n  100% { content: "⠋"; }\n}',
  };

  const BASE_CSS =
    ':root {\n' +
    '  color-scheme: light dark;\n' +
    '  --spinner-shimmer-base: light-dark(oklch(56% 0.005 250), oklch(55% 0.008 250));\n' +
    '  --spinner-shimmer-peak: light-dark(oklch(15% 0.01 250), oklch(100% 0 0));\n' +
    '  --spinner-glow-color: light-dark(oklch(15% 0.01 250 / 0.3), oklch(100% 0 0));\n' +
    '  --spinner-glow-sm: 0.2rem;\n' +
    '  --spinner-glow-lg: 0.5rem;\n' +
    '  --spinner-bright-low: 0.9;\n' +
    '  --spinner-bright-high: 1.0;\n' +
    '}\n' +
    '\n' +
    '@media (prefers-color-scheme: dark) {\n' +
    '  :root {\n' +
    '    --spinner-glow-sm: 0.25rem;\n' +
    '    --spinner-glow-lg: 0.75rem;\n' +
    '    --spinner-bright-low: 0.7;\n' +
    '    --spinner-bright-high: 1.4;\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    '[data-theme="light"] {\n' +
    '  color-scheme: light;\n' +
    '  --spinner-glow-sm: 0.2rem;\n' +
    '  --spinner-glow-lg: 0.5rem;\n' +
    '  --spinner-bright-low: 0.9;\n' +
    '  --spinner-bright-high: 1.0;\n' +
    '}\n' +
    '\n' +
    '[data-theme="dark"] {\n' +
    '  color-scheme: dark;\n' +
    '  --spinner-glow-sm: 0.25rem;\n' +
    '  --spinner-glow-lg: 0.75rem;\n' +
    '  --spinner-bright-low: 0.7;\n' +
    '  --spinner-bright-high: 1.4;\n' +
    '}\n' +
    '\n' +
    '.braille-spinner {\n' +
    '  display: inline-flex;\n' +
    '  justify-content: center;\n' +
    '  align-items: center;\n' +
    '  font-variant-numeric: tabular-nums;\n' +
    '  line-height: normal;\n' +
    '  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n' +
    '}\n' +
    '\n' +
    '.braille-spinner::after {\n' +
    '  display: inline-block;\n' +
    '  white-space: pre;\n' +
    '  background: linear-gradient(\n' +
    '    90deg,\n' +
    '    var(--spinner-shimmer-base) 0%,\n' +
    '    color-mix(in srgb, var(--spinner-shimmer-base) 80%, var(--spinner-shimmer-peak)) 30%,\n' +
    '    var(--spinner-shimmer-peak) 50%,\n' +
    '    color-mix(in srgb, var(--spinner-shimmer-base) 80%, var(--spinner-shimmer-peak)) 70%,\n' +
    '    var(--spinner-shimmer-base) 100%\n' +
    '  );\n' +
    '  background-size: 200% 100%;\n' +
    '  color: transparent;\n' +
    '  -webkit-background-clip: text;\n' +
    '  background-clip: text;\n' +
    '  will-change: background-position, filter, opacity;\n' +
    '  pointer-events: none;\n' +
    '}\n' +
    '\n' +
    '@media (prefers-reduced-motion: reduce) {\n' +
    '  .braille-spinner::after {\n' +
    '    background: none;\n' +
    '    color: currentColor;\n' +
    '    animation: none !important;\n' +
    '    opacity: 0.8;\n' +
    '  }\n' +
    '}';

  function generateLibraryCSS(includeSpinners) {
    const ids = includeSpinners?.length ? includeSpinners : Object.keys(SPINNER_CSS);
    const syncSet = new Set();
    ids.forEach((id) => {
      const config = SPINNER_CONFIGS[id];
      if (config?.sync) syncSet.add(config.sync);
    });

    const parts = [BASE_CSS, ''];
    syncSet.forEach((sync) => {
      if (GLOW_ANIMATIONS[sync]) {
        parts.push(GLOW_ANIMATIONS[sync], '');
      }
    });
    ids.forEach((id) => {
      if (SPINNER_CSS[id]) {
        parts.push(SPINNER_CSS[id], '');
      }
    });
    return parts.join('\n');
  }

  function injectStyles(css, id) {
    const styleEl = document.createElement('style');
    styleEl.dataset.libSource = 'braille-library';
    if (id) styleEl.id = id;
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
    return styleEl;
  }

  global.BrailleLibrary = {
    SPINNER_CONFIGS,
    GLOW_ANIMATIONS,
    SPINNER_CSS,
    BASE_CSS,
    generateLibraryCSS,
    injectStyles,
  };
})(window);
