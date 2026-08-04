(function (global) {
  'use strict';

  const PROFILES = {
    'spinner-cascade': { name: 'Cascade Drop', sync: 'l-sweep-sync' },
    'spinner-wave': { name: 'Ripple Wave', sync: 'l-sweep-sync' },
    'spinner-helix': { name: 'Twin Helix', sync: 'l-sweep-sync' },
    'spinner-rain': { name: 'Matrix Rain', sync: 'l-sweep-sync' },
    'spinner-breathe': { name: 'Breathing Focus', sync: 'l-pulse-sync' },
    'spinner-diagonal': { name: 'Diagonal Wipe', sync: 'l-sweep-sync' },
    'spinner-pulse': { name: 'Core Pulse', sync: 'l-pulse-sync' },
    'spinner-snake': { name: 'Slithering Snake', sync: 'l-sweep-sync' },
    'spinner-glitch': { name: 'Static Glitch', sync: 'l-glitch-sync' },
    'spinner-columns': { name: 'Rising Columns', sync: 'l-sweep-sync' },
    'spinner-scan': { name: 'Radar Scan', sync: 'l-scan-sync' },
    'spinner-sweep': { name: 'Fill Sweep', sync: 'l-sweep-sync' },
    'spinner-orbit': { name: 'Satellite Orbit', sync: 'l-pulse-sync' },
    'spinner-sparkle': { name: 'Stardust Sparkle', sync: 'l-glitch-sync' },
    'spinner-basic': { name: 'Classic Spinner', sync: 'l-pulse-sync' },
  };

  const SYNC_ENGINES = {
    'l-sweep-sync': '@keyframes l-sweep-sync {\n  0% { background-position: 200% center; filter: brightness(var(--loader-bright-low)); }\n  50% { filter: brightness(var(--loader-bright-high)) drop-shadow(0 0 var(--loader-glow-sm) var(--loader-glow-color)); }\n  100% { background-position: -200% center; filter: brightness(var(--loader-bright-low)); }\n}',
    'l-pulse-sync': '@keyframes l-pulse-sync {\n  0%, 100% { filter: brightness(var(--loader-bright-low)); background-position: 50% center; }\n  50% { filter: brightness(var(--loader-bright-high)) drop-shadow(0 0 var(--loader-glow-sm) var(--loader-glow-color)); background-position: 50% center; }\n}',
    'l-glitch-sync': '@keyframes l-glitch-sync {\n  0%, 100% { filter: brightness(var(--loader-bright-low)); background-position: 50% center; }\n  20%, 80% { filter: brightness(var(--loader-bright-high)) drop-shadow(0 0 var(--loader-glow-sm) var(--loader-glow-color)); background-position: 50% center; }\n  40%, 60% { filter: brightness(var(--loader-bright-low)); background-position: 50% center; }\n}',
    'l-scan-sync': '@keyframes l-scan-sync {\n  0% { background-position: 200% center; filter: brightness(var(--loader-bright-low)); }\n  100% { background-position: -200% center; filter: brightness(var(--loader-bright-high)) drop-shadow(0 0 var(--loader-glow-sm) var(--loader-glow-color)); }\n}',
  };

  const SPINNER_CSS = {
    'spinner-cascade': '.spinner-cascade {\n  width: 4ch;\n}\n.spinner-cascade::after {\n  content: "⠁⠀⠀⠀";\n  animation: sp-csc 0.98s step-end infinite, l-sweep-sync 0.98s linear infinite;\n}\n@keyframes sp-csc {\n  0%, 100% { content: "⠁⠀⠀⠀"; }\n  7.1% { content: "⠋⠀⠀⠀"; }\n  14.2% { content: "⠞⠁⠀⠀"; }\n  21.4% { content: "⡴⠋⠀⠀"; }\n  28.5% { content: "⣠⠞⠁⠀"; }\n  35.7% { content: "⢀⡴⠋⠀"; }\n  42.8% { content: "⠀⣠⠞⠁"; }\n  50% { content: "⠀⢀⡴⠋"; }\n  57.1% { content: "⠀⠀⣠⠞"; }\n  64.2% { content: "⠀⠀⢀⡴"; }\n  71.4% { content: "⠀⠀⠀⣠"; }\n  78.5% { content: "⠀⠀⠀⢀"; }\n  85.7%, 92.8% { content: "⠀⠀⠀⠀"; }\n}',
    'spinner-wave': '.spinner-wave {\n  width: 4ch;\n}\n.spinner-wave::after {\n  content: "⠑⢄⠔⠑";\n  animation: sp-wav 0.96s step-end infinite, l-sweep-sync 0.96s linear infinite;\n}\n@keyframes sp-wav {\n  0%, 100% { content: "⠑⢄⠔⠑"; }\n  14.2% { content: "⠊⠆⢄⠊"; }\n  28.5% { content: "⠢⠑⢄⠢"; }\n  42.8% { content: "⢄⠢⠑⢄"; }\n  57.1% { content: "⠔⢄⠢⠔"; }\n  71.4% { content: "⠒⠔⢄⠒"; }\n  85.7% { content: "⠆⠒⠔⠆"; }\n}',
    'spinner-helix': '.spinner-helix {\n  width: 4ch;\n}\n.spinner-helix::after {\n  content: "⢁⠦⠔⡈";\n  animation: sp-hlx 1.02s step-end infinite, l-sweep-sync 1.02s linear infinite;\n}\n@keyframes sp-hlx {\n  0%, 100% { content: "⢁⠦⠔⡈"; }\n  16.6% { content: "⠦⠔⡈⠔"; }\n  33.3% { content: "⠔⡈⠔⠦"; }\n  50% { content: "⡈⠔⠦⢁"; }\n  66.6% { content: "⠔⠦⢁⠦"; }\n  83.3% { content: "⠦⢁⠦⠔"; }\n}',
    'spinner-rain': '.spinner-rain {\n  width: 4ch;\n}\n.spinner-rain::after {\n  content: "⠁⠄⠂⡀";\n  animation: sp-ran 0.88s step-end infinite, l-sweep-sync 0.88s linear infinite;\n}\n@keyframes sp-ran {\n  0%, 100% { content: "⠁⠄⠂⡀"; }\n  14.2% { content: "⠊⡀⠌⠀"; }\n  28.5% { content: "⠔⠈⡐⠁"; }\n  42.8% { content: "⡀⠑⠡⠊"; }\n  57.1% { content: "⠡⠢⢂⠔"; }\n  71.4% { content: "⢂⢄⠄⡠"; }\n  85.7% { content: "⠄⡀⡀⢀"; }\n}',
    'spinner-breathe': '.spinner-breathe {\n  width: 1ch;\n}\n.spinner-breathe::after {\n  content: "⠁";\n  animation: sp-brt 2.8s step-end infinite, l-pulse-sync 2.8s ease-in-out infinite;\n}\n@keyframes sp-brt {\n  0%, 100% { content: "⠁"; }\n  15% { content: "⠑"; }\n  21% { content: "⠕"; }\n  26% { content: "⢕"; }\n  30% { content: "⢝"; }\n  34% { content: "⢟"; }\n  38% { content: "⢿"; }\n  45%, 55% { content: "⣿"; }\n  62% { content: "⢿"; }\n  66% { content: "⢟"; }\n  70% { content: "⢝"; }\n  74% { content: "⢕"; }\n  79% { content: "⠕"; }\n  85% { content: "⠑"; }\n  92% { content: "⠁"; }\n}',
    'spinner-diagonal': '.spinner-diagonal {\n  width: 2ch;\n}\n.spinner-diagonal::after {\n  content: "⠀⠀";\n  animation: sp-dgl 1.26s step-end infinite, l-sweep-sync 1.26s linear infinite;\n}\n@keyframes sp-dgl {\n  0%, 100% { content: "⠀⠀"; }\n  7.1% { content: "⠁⠀"; }\n  14.2% { content: "⠋⠀"; }\n  21.4% { content: "⠟⠁"; }\n  28.5% { content: "⡿⠋"; }\n  35.7% { content: "⣿⠟"; }\n  42.8% { content: "⣿⡿"; }\n  50% { content: "⣿⣿"; }\n  57.1% { content: "⣾⣿"; }\n  64.2% { content: "⣴⣿"; }\n  71.4% { content: "⣠⣾"; }\n  78.5% { content: "⢀⣴"; }\n  85.7% { content: "⠀⣠"; }\n  92.8% { content: "⠀⢀"; }\n}',
    'spinner-pulse': '.spinner-pulse {\n  width: 3ch;\n}\n.spinner-pulse::after {\n  content: "⠀⠶⠀";\n  animation: sp-pls 1.4s step-end infinite, l-pulse-sync 1.4s cubic-bezier(0.1, 0.9, 0.2, 1) infinite;\n}\n@keyframes sp-pls {\n  0%, 100% { content: "⠀⠶⠀"; }\n  10% { content: "⠰⣿⠆"; }\n  20% { content: "⢾⣿⡷"; }\n  30% { content: "⢾⣉⡷"; }\n  40% { content: "⣏⣉⣹"; }\n  50% { content: "⡁⠀⢈"; }\n  60%, 90% { content: "⠀⠀⠀"; }\n}',
    'spinner-snake': '.spinner-snake {\n  width: 3ch;\n}\n.spinner-snake::after {\n  content: "⣁⠀⠀";\n  animation: sp-snk 1.44s step-end infinite, l-sweep-sync 1.44s linear infinite;\n}\n@keyframes sp-snk {\n  0% { content: "⣁⠀⠀"; }\n  6.25% { content: "⡉⠀⠀"; }\n  12.5% { content: "⠉⠀⠁"; }\n  18.75% { content: "⠈⠀⠉"; }\n  25% { content: "⠀⠀⠙"; }\n  31.25% { content: "⠀⠀⠚"; }\n  37.5% { content: "⠐⠀⠒"; }\n  43.75% { content: "⠒⠀⠂"; }\n  50% { content: "⠖⠀⠀"; }\n  56.25% { content: "⠦⠀⠀"; }\n  62.5% { content: "⠤⠀⠄"; }\n  68.75% { content: "⠠⠀⠤"; }\n  75% { content: "⠀⠀⢤"; }\n  81.25% { content: "⠀⠀⣠"; }\n  87.5% { content: "⢀⠀⣀"; }\n  93.75% { content: "⣀⠀⡀"; }\n  100% { content: "⣁⠀⠀"; }\n}',
    'spinner-glitch': '.spinner-glitch {\n  width: 3ch;\n}\n.spinner-glitch::after {\n  content: "⢕⢕⢕";\n  animation: sp-glc 1.8s step-end infinite, l-glitch-sync 1.8s step-end infinite;\n}\n@keyframes sp-glc {\n  0%, 8%, 22%, 68%, 82%, 100% { content: "⢕⢕⢕"; }\n  10%, 70% { content: "⡪⡪⡪"; }\n  20%, 80% { content: "⢊⠔⡡"; }\n}',
    'spinner-columns': '.spinner-columns {\n  width: 3ch;\n}\n.spinner-columns::after {\n  content: "⠀⠀⠀";\n  animation: sp-col 1.8s step-end infinite, l-sweep-sync 1.8s linear infinite;\n}\n@keyframes sp-col {\n  0%, 100% { content: "⠀⠀⠀"; }\n  4% { content: "⡀⠀⠀"; }\n  8% { content: "⡄⠀⠀"; }\n  12% { content: "⡆⠀⠀"; }\n  16% { content: "⡇⠀⠀"; }\n  20% { content: "⣇⠀⠀"; }\n  24% { content: "⣧⠀⠀"; }\n  28% { content: "⣷⠀⠀"; }\n  32% { content: "⣿⠀⠀"; }\n  36% { content: "⣿⡀⠀"; }\n  40% { content: "⣿⡄⠀"; }\n  44% { content: "⣿⡆⠀"; }\n  48% { content: "⣿⡇⠀"; }\n  52% { content: "⣿⣇⠀"; }\n  56% { content: "⣿⣧⠀"; }\n  60% { content: "⣿⣷⠀"; }\n  64% { content: "⣿⣿⠀"; }\n  68% { content: "⣿⣿⡀"; }\n  72% { content: "⣿⣿⡄"; }\n  76% { content: "⣿⣿⡆"; }\n  80% { content: "⣿⣿⡇"; }\n  84% { content: "⣿⣿⣇"; }\n  88% { content: "⣿⣿⣧"; }\n  92% { content: "⣿⣿⣷"; }\n  96% { content: "⣿⣿⣿"; }\n}',
    'spinner-scan': '.spinner-scan {\n  width: 4ch;\n}\n.spinner-scan::after {\n  content: "⣿⠀⠀⠀";\n  animation: sp-scn 0.6s step-end infinite alternate, l-scan-sync 0.6s ease-in-out infinite alternate;\n}\n@keyframes sp-scn {\n  0% { content: "⣿⠀⠀⠀"; }\n  16.6% { content: "⢸⡇⠀⠀"; }\n  33.3% { content: "⠀⣿⠀⠀"; }\n  50% { content: "⠀⢸⡇⠀"; }\n  66.6% { content: "⠀⠀⣿⠀"; }\n  83.3% { content: "⠀⠀⢸⡇"; }\n  100% { content: "⠀⠀⠀⣿"; }\n}',
    'spinner-sweep': '.spinner-sweep {\n  width: 3ch;\n}\n.spinner-sweep::after {\n  content: "⠀⠀⠀";\n  animation: sp-swp 1.68s step-end infinite, l-sweep-sync 1.68s linear infinite;\n}\n@keyframes sp-swp {\n  0% { content: "⠀⠀⠀"; }\n  12.5% { content: "⣀⠀⣀"; }\n  25% { content: "⣤⠀⣤"; }\n  37.5% { content: "⣶⠀⣶"; }\n  50% { content: "⣿⠀⣿"; }\n  62.5% { content: "⣶⠀⣶"; }\n  75% { content: "⣤⠀⣤"; }\n  87.5% { content: "⣀⠀⣀"; }\n  100% { content: "⠀⠀⠀"; }\n}',
    'spinner-orbit': '.spinner-orbit {\n  width: 1ch;\n}\n.spinner-orbit::after {\n  content: "⠉";\n  animation: sp-orb 0.8s step-end infinite, l-pulse-sync 0.8s linear infinite;\n}\n@keyframes sp-orb {\n  0% { content: "⠉"; }\n  12.5% { content: "⠘"; }\n  25% { content: "⠰"; }\n  37.5% { content: "⢠"; }\n  50% { content: "⣀"; }\n  62.5% { content: "⡄"; }\n  75% { content: "⠆"; }\n  87.5% { content: "⠃"; }\n  100% { content: "⠉"; }\n}',
    'spinner-sparkle': '.spinner-sparkle {\n  width: 4ch;\n}\n.spinner-sparkle::after {\n  content: "⠀⠁⠀⠂";\n  animation: sp-spr 0.5s step-end infinite, l-glitch-sync 0.5s step-end infinite;\n}\n@keyframes sp-spr {\n  0%, 90%, 100% { content: "⠀⠁⠀⠂"; }\n  10% { content: "⠠⠀⢀⠀"; }\n  20% { content: "⠀⠐⠉⠁"; }\n  30% { content: "⠁⠂⠀⠐"; }\n  40% { content: "⠑⠊⠔⠢"; }\n  50% { content: "⠀⢀⠠⠀"; }\n  60% { content: "⠂⠀⠁⠀"; }\n  70% { content: "⠐⠀⠐⠀"; }\n  80% { content: "⢀⠠⠑⠊"; }\n}',
    'spinner-basic': '.spinner-basic {\n  width: 1ch;\n}\n.spinner-basic::after {\n  content: "⠋";\n  animation: sp-bsc 0.95s step-end infinite, l-pulse-sync 0.95s linear infinite;\n}\n@keyframes sp-bsc {\n  0% { content: "⠋"; }\n  10% { content: "⠙"; }\n  20% { content: "⠹"; }\n  30% { content: "⠸"; }\n  40% { content: "⠼"; }\n  50% { content: "⠴"; }\n  60% { content: "⠦"; }\n  70% { content: "⠧"; }\n  80% { content: "⠇"; }\n  90% { content: "⠏"; }\n  100% { content: "⠋"; }\n}',
  };

  const BASE_CSS =
    ':root {\n' +
    '  color-scheme: light dark;\n' +
    '  --loader-shimmer-base: light-dark(oklch(56% 0.005 250), oklch(55% 0.008 250));\n' +
    '  --loader-shimmer-peak: light-dark(oklch(15% 0.01 250), oklch(100% 0 0));\n' +
    '  --loader-glow-color: light-dark(oklch(15% 0.01 250 / 0.3), oklch(100% 0 0));\n' +
    '  --loader-glow-sm: 0.2rem;\n' +
    '  --loader-glow-lg: 0.5rem;\n' +
    '  --loader-bright-low: 0.9;\n' +
    '  --loader-bright-high: 1.0;\n' +
    '}\n' +
    '\n' +
    '@media (prefers-color-scheme: dark) {\n' +
    '  :root {\n' +
    '    --loader-glow-sm: 0.25rem;\n' +
    '    --loader-glow-lg: 0.75rem;\n' +
    '    --loader-bright-low: 0.7;\n' +
    '    --loader-bright-high: 1.4;\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    '[data-theme="light"] {\n' +
    '  color-scheme: light;\n' +
    '  --loader-glow-sm: 0.2rem;\n' +
    '  --loader-glow-lg: 0.5rem;\n' +
    '  --loader-bright-low: 0.9;\n' +
    '  --loader-bright-high: 1.0;\n' +
    '}\n' +
    '\n' +
    '[data-theme="dark"] {\n' +
    '  color-scheme: dark;\n' +
    '  --loader-glow-sm: 0.25rem;\n' +
    '  --loader-glow-lg: 0.75rem;\n' +
    '  --loader-bright-low: 0.7;\n' +
    '  --loader-bright-high: 1.4;\n' +
    '}\n' +
    '\n' +
    '.braille-loader {\n' +
    '  display: inline-flex;\n' +
    '  justify-content: center;\n' +
    '  align-items: center;\n' +
    '  font-variant-numeric: tabular-nums;\n' +
    '  line-height: normal;\n' +
    '  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n' +
    '}\n' +
    '\n' +
    '.braille-loader::after {\n' +
    '  display: inline-block;\n' +
    '  white-space: pre;\n' +
    '  background: linear-gradient(\n' +
    '    90deg,\n' +
    '    var(--loader-shimmer-base) 0%,\n' +
    '    color-mix(in srgb, var(--loader-shimmer-base) 80%, var(--loader-shimmer-peak)) 30%,\n' +
    '    var(--loader-shimmer-peak) 50%,\n' +
    '    color-mix(in srgb, var(--loader-shimmer-base) 80%, var(--loader-shimmer-peak)) 70%,\n' +
    '    var(--loader-shimmer-base) 100%\n' +
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
    '  .braille-loader::after {\n' +
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
      const p = PROFILES[id];
      if (p?.sync) syncSet.add(p.sync);
    });

    const parts = [BASE_CSS, ''];
    syncSet.forEach((sync) => {
      if (SYNC_ENGINES[sync]) {
        parts.push(SYNC_ENGINES[sync], '');
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
    PROFILES,
    SYNC_ENGINES,
    SPINNER_CSS,
    BASE_CSS,
    generateLibraryCSS,
    injectStyles,
  };
})(window);
