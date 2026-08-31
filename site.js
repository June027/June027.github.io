(() => {
  'use strict';
  const html = document.documentElement, hero = document.querySelector('.hero');
  const tone = document.querySelector('#tone'), accent = document.querySelector('#accent');
  const motion = document.querySelector('#motion-toggle'), status = document.querySelector('#appearance-status');
  const key = 'lingxian-public-appearance-v1';
  const defaults = { tone: 'moon', accent: '#6476ac', motion: true };
  let preferences = { ...defaults }, frame = null, pointer = null;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  function normalize(value) {
    return { tone: ['moon', 'mist', 'deep'].includes(value?.tone) ? value.tone : defaults.tone, accent: /^#[0-9a-f]{6}$/i.test(value?.accent || '') ? value.accent : defaults.accent, motion: typeof value?.motion === 'boolean' ? value.motion : true };
  }
  try { preferences = normalize(JSON.parse(localStorage.getItem(key))); } catch { /* Browser storage may be unavailable. */ }
  function resetPointer() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null; pointer = null;
    hero.style.removeProperty('--px'); hero.style.removeProperty('--py');
  }
  function apply(save = false) {
    preferences = normalize(preferences);
    html.dataset.tone = preferences.tone;
    html.dataset.motion = preferences.motion && !reduced.matches ? 'on' : 'off';
    html.dataset.paused = String(document.visibilityState === 'hidden');
    html.style.setProperty('--accent', preferences.accent);
    const channels = preferences.accent.slice(1).match(/../g).map(x => parseInt(x, 16) / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4);
    const luminance = channels.reduce((sum, x, i) => sum + x * [.2126, .7152, .0722][i], 0);
    html.style.setProperty('--on-accent', luminance > .179 ? '#142039' : '#ffffff');
    tone.value = preferences.tone; accent.value = preferences.accent;
    motion.disabled = reduced.matches; motion.textContent = reduced.matches ? '系统静态模式' : preferences.motion ? '暂停动效' : '播放动效';
    motion.setAttribute('aria-pressed', String(!preferences.motion || reduced.matches));
    if (!preferences.motion || reduced.matches || document.visibilityState === 'hidden') resetPointer();
    if (save) {
      try { localStorage.setItem(key, JSON.stringify(preferences)); status.textContent = '配色已保存在当前浏览器。'; }
      catch { status.textContent = '配色已应用；当前浏览器不允许保存，刷新后恢复默认。'; }
    }
  }
  tone.addEventListener('change', () => { preferences.tone = tone.value; resetPointer(); apply(true); });
  accent.addEventListener('input', () => { preferences.accent = accent.value; apply(true); });
  motion.addEventListener('click', () => { preferences.motion = !preferences.motion; apply(true); });
  document.querySelector('#theme-reset').addEventListener('click', () => { preferences = { ...defaults }; resetPointer(); apply(true); });
  hero.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || html.dataset.motion !== 'on' || document.visibilityState === 'hidden' || !Number.isFinite(event.clientX) || !Number.isFinite(event.clientY)) return;
    pointer = { x: event.clientX, y: event.clientY };
    if (frame !== null) return;
    frame = requestAnimationFrame(() => {
      frame = null;
      if (!pointer || html.dataset.motion !== 'on' || document.visibilityState === 'hidden') return;
      const rect = hero.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const clamp = n => Math.max(-1, Math.min(1, n));
      hero.style.setProperty('--px', (clamp((pointer.x - rect.left) / rect.width * 2 - 1) * 12).toFixed(2) + 'px');
      hero.style.setProperty('--py', (clamp((pointer.y - rect.top) / rect.height * 2 - 1) * 8).toFixed(2) + 'px');
    });
  }, { passive: true });
  hero.addEventListener('pointerleave', resetPointer);
  window.addEventListener('blur', resetPointer);
  document.addEventListener('visibilitychange', () => apply());
  reduced.addEventListener('change', () => apply());
  document.querySelectorAll('.hero-art img').forEach(img => img.addEventListener('error', () => { hero.dataset.assetsFailed = 'true'; resetPointer(); }));
  apply();
})();
