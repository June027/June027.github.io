(() => {
  'use strict';
  const html = document.documentElement, hero = document.querySelector('.hero');
  const tone = document.querySelector('#tone'), accent = document.querySelector('#accent');
  const motion = document.querySelector('#motion-toggle'), status = document.querySelector('#appearance-status');
  const key = 'lingxian-public-appearance-v1';
  const defaults = { tone: 'moon', accent: '#6476ac', motion: true, language: 'zh' };
  const translations = {
    zh: {
      skip: '跳到正文', navAbout: '关于我', navDirections: '研究方向', navPublications: '论文',
      heroLine1: '观象，建模。', heroLine2: '在星河中求索。', heroIntro1: '连接计算与生命，', heroIntro2: '让每一次好奇，都走向可验证的答案。', scholarButton: '我的 Google 学术 ↗', publicationButton: '查看论文 ↓', heroNote1: '医学图像分析 × 生物医学工程', heroNote2: '数字病理 · 影像组学 · 医学人工智能', signatureNote: '星枢伴读 · 艺术意象', signatureName: '张衡',
      appearanceTitle: '今天的星空，由你调色。', appearanceHelp: '配色与语言仅保存在当前浏览器。', toneLabel: '明暗', toneMoon: '月白 · 明亮', toneMist: '星雾 · 柔紫', toneDeep: '深空 · 夜色', accentLabel: '主题色', accentAria: '自定义主题颜色', resetTheme: '恢复月白',
      aboutTitle1: '从自动化出发，', aboutTitle2: '走向智能医学。', aboutP1: '你好，我是金利军（Lijun Jin），GitHub 用户名是 June027。现于中国医科大学攻读生物医学工程硕士，研究方向为医学图像处理。', aboutP2: '我拥有自动化与工业软件开发背景，关注人工智能如何在医学影像与数字病理中形成可解释、可验证、能跨中心泛化的计算方法，也持续探索控制科学与模式识别的交叉可能。', currentSchool: '中国医科大学', currentStudy: '生物医学工程 · 硕士研究生', backgroundTitle: '自动化 × 软件工程', backgroundDetail: '模型、系统与真实场景', tag1: '医学图像分析', tag2: '数字病理', tag3: '影像组学', tag4: '图神经网络', tag5: '模式识别',
      directionsTitle: '研究方向', directionsLead: '从影像表征走向临床问题。', d1Title: '医学图像与影像组学', d1Text: '围绕多期相 MRI、瘤内与瘤周区域表征、影像异质性和临床变量融合，研究疾病分型与治疗反应预测。', d2Title: '数字病理与图学习', d2Text: '面向多中心 WSI，探索细胞、组织与空间关系的多尺度表示，以及自适应图结构学习和跨中心泛化。', d3Title: '医学人工智能', d3Text: '关注 CNN、Transformer、状态空间模型、图神经网络与视觉-语言基础模型在医学场景中的可靠应用。', d4Title: '控制与模式识别', d4Text: '结合自动化和软件系统经验，探索控制思维、模式识别与生物医学工程之间可复现、可落地的交叉问题。',
      publicationsTitle: '代表论文', publicationsLead: '仅展示已在出版方公开核实的成果。', role1: '共同第一作者', role2: '通讯作者', role3: '共同作者', pub1Title: '肺癌转移影像人工智能用于诊断与预后的系统评价与 Meta 分析', pub2Title: '基于 MRI 影像组学无创预测肺癌脊柱转移灶 T790M 耐药突变：探索性研究', pub3Title: '医学影像视觉-语言基础模型：诊断与分析应用的系统评价与 Meta 分析', paperLink: '论文 ↗', pub1Aria: '在 Nature 官网查看肺癌转移影像人工智能论文', pub2Aria: '在 Frontiers 官网查看 T790M 影像组学论文', pub3Aria: '在 ScienceDirect 查看医学视觉语言基础模型论文', scholarAll: '完整列表 · Google 学术 ↗', githubProjects: '代码与项目 · GitHub ↗',
      experienceTitle: '学习与工程背景', experienceLead: '医学问题需要模型，也需要系统视角。', masterStudy: '生物医学工程 · 硕士', industrialTitle: '工业诊断软件开发', industrialDetail: '系统设计、设备通信与软件工程', nau: '南京农业大学', bachelorStudy: '自动化 · 学士', closingEyebrow: 'LINGXIAN / 观象 · 建模 · 求索', closingQuote: '为问题留一点耐心，也为想象留一片星空。', closingNote: '本站原创寄语。张衡人物、仪器与星图为艺术化演绎，非历史肖像复原或实时天文数据。', footerMiddle: '公开学术主页 · GitHub Pages', footerTop: '回到星空 ↑',
      motionSystem: '系统静态模式', motionPause: '暂停动效', motionPlay: '播放动效', saved: '配色与语言已保存在当前浏览器。', saveFailed: '设置已应用；当前浏览器不允许保存，刷新后恢复默认。', title: 'Lijun Jin · 灵宪 | June027', description: 'Lijun Jin（金利军，June027）的个人学术主页。医学图像分析、数字病理、影像组学、医学人工智能与模式识别。'
    },
    en: {
      skip: 'Skip to content', navAbout: 'About', navDirections: 'Research', navPublications: 'Publications',
      heroLine1: 'Observe. Model.', heroLine2: 'Explore the stars.', heroIntro1: 'Connecting computation with life,', heroIntro2: 'turning curiosity into verifiable answers.', scholarButton: 'Google Scholar ↗', publicationButton: 'View publications ↓', heroNote1: 'Medical Image Analysis × Biomedical Engineering', heroNote2: 'Digital Pathology · Radiomics · Medical AI', signatureNote: 'Celestial study companion · Artistic concept', signatureName: 'Zhang Heng',
      appearanceTitle: "Color today's sky.", appearanceHelp: 'Theme and language stay in this browser.', toneLabel: 'Theme', toneMoon: 'Moonlight · Bright', toneMist: 'Star Mist · Soft', toneDeep: 'Deep Space · Dark', accentLabel: 'Accent', accentAria: 'Choose a custom theme color', resetTheme: 'Reset theme',
      aboutTitle1: 'From automation,', aboutTitle2: 'to intelligent medicine.', aboutP1: 'Hello, I am Lijun Jin (June027). I am pursuing an M.S. in Biomedical Engineering at China Medical University, focusing on medical image processing.', aboutP2: 'With a background in automation and industrial software engineering, I study interpretable, verifiable, and cross-center generalizable methods for medical imaging and digital pathology, while exploring intersections with control science and pattern recognition.', currentSchool: 'China Medical University', currentStudy: 'M.S. Student · Biomedical Engineering', backgroundTitle: 'Automation × Software Engineering', backgroundDetail: 'Models, systems, and real-world settings', tag1: 'Medical Image Analysis', tag2: 'Digital Pathology', tag3: 'Radiomics', tag4: 'Graph Neural Networks', tag5: 'Pattern Recognition',
      directionsTitle: 'Research Directions', directionsLead: 'From image representations to clinical questions.', d1Title: 'Medical Imaging & Radiomics', d1Text: 'I study disease characterization and treatment-response prediction using multi-phase MRI, intratumoral and peritumoral representations, imaging heterogeneity, and clinical-data fusion.', d2Title: 'Digital Pathology & Graph Learning', d2Text: 'For multi-center whole-slide images, I explore multiscale cellular, tissue, and spatial representations, adaptive graph learning, and cross-center generalization.', d3Title: 'Medical Artificial Intelligence', d3Text: 'My interests include reliable clinical applications of CNNs, Transformers, state-space models, graph neural networks, and vision-language foundation models.', d4Title: 'Control & Pattern Recognition', d4Text: 'Building on automation and software-system experience, I explore reproducible and practical intersections among control, pattern recognition, and biomedical engineering.',
      publicationsTitle: 'Selected Publications', publicationsLead: 'Only publisher-verified public works are listed.', role1: 'Co-first author', role2: 'Corresponding author', role3: 'Co-author', pub1Title: 'Systematic review and meta-analysis of AI in lung cancer metastasis imaging for diagnosis and prognosis', pub2Title: 'MRI-based radiomics for noninvasive prediction of T790M resistance mutation in lung cancer spinal metastases: an exploratory study', pub3Title: 'Visual-language foundation models in medical imaging: A systematic review and meta-analysis of diagnostic and analytical applications', paperLink: 'Paper ↗', pub1Aria: 'View the lung-cancer metastasis imaging AI paper on Nature', pub2Aria: 'View the T790M radiomics paper on Frontiers', pub3Aria: 'View the medical vision-language foundation model paper on ScienceDirect', scholarAll: 'Full list · Google Scholar ↗', githubProjects: 'Code & projects · GitHub ↗',
      experienceTitle: 'Education & Engineering', experienceLead: 'Medical problems need models and a systems perspective.', masterStudy: 'M.S. · Biomedical Engineering', industrialTitle: 'Industrial Diagnostic Software', industrialDetail: 'System design, device communication, and software engineering', nau: 'Nanjing Agricultural University', bachelorStudy: 'B.Eng. · Automation', closingEyebrow: 'LINGXIAN / OBSERVE · MODEL · EXPLORE', closingQuote: 'Give each problem patience, and each idea a sky to unfold in.', closingNote: 'Original site text. Zhang Heng, the instruments, and the celestial atlas are artistic interpretations—not a historical portrait or real-time astronomical data.', footerMiddle: 'Public Academic Profile · GitHub Pages', footerTop: 'Back to the sky ↑',
      motionSystem: 'System reduced motion', motionPause: 'Pause motion', motionPlay: 'Play motion', saved: 'Theme and language were saved in this browser.', saveFailed: 'Settings are applied, but this browser cannot save them. Defaults will return after refresh.', title: 'Lijun Jin · Lingxian | June027', description: 'The academic profile of Lijun Jin (June027): medical image analysis, digital pathology, radiomics, medical AI, and pattern recognition.'
    }
  };
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  let preferences = { ...defaults }, frame = null, pointer = null;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  function normalize(value) {
    return { tone: ['moon', 'mist', 'deep'].includes(value?.tone) ? value.tone : defaults.tone, accent: /^#[0-9a-f]{6}$/i.test(value?.accent || '') ? value.accent : defaults.accent, motion: typeof value?.motion === 'boolean' ? value.motion : defaults.motion, language: ['zh', 'en'].includes(value?.language) ? value.language : defaults.language };
  }
  try { preferences = normalize(JSON.parse(localStorage.getItem(key))); } catch { /* Browser storage may be unavailable. */ }
  function text(keyName) { return translations[preferences.language]?.[keyName] || translations.zh[keyName] || keyName; }
  function applyLanguage() {
    html.lang = preferences.language === 'en' ? 'en' : 'zh-CN';
    html.dataset.language = preferences.language;
    document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = text(node.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria]').forEach(node => { node.setAttribute('aria-label', text(node.dataset.i18nAria)); });
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === preferences.language)));
    document.title = text('title');
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', text('description'));
  }
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
    applyLanguage();
    html.style.setProperty('--accent', preferences.accent);
    const channels = preferences.accent.slice(1).match(/../g).map(x => parseInt(x, 16) / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4);
    const luminance = channels.reduce((sum, x, i) => sum + x * [.2126, .7152, .0722][i], 0);
    html.style.setProperty('--on-accent', luminance > .179 ? '#142039' : '#ffffff');
    tone.value = preferences.tone; accent.value = preferences.accent;
    motion.disabled = reduced.matches; motion.textContent = reduced.matches ? text('motionSystem') : preferences.motion ? text('motionPause') : text('motionPlay');
    motion.setAttribute('aria-pressed', String(!preferences.motion || reduced.matches));
    if (!preferences.motion || reduced.matches || document.visibilityState === 'hidden') resetPointer();
    if (save) {
      try { localStorage.setItem(key, JSON.stringify(preferences)); status.textContent = text('saved'); }
      catch { status.textContent = text('saveFailed'); }
    }
  }
  tone.addEventListener('change', () => { preferences.tone = tone.value; resetPointer(); apply(true); });
  accent.addEventListener('input', () => { preferences.accent = accent.value; apply(true); });
  motion.addEventListener('click', () => { preferences.motion = !preferences.motion; apply(true); });
  languageButtons.forEach(button => button.addEventListener('click', () => { preferences.language = button.dataset.language; apply(true); }));
  document.querySelector('#theme-reset').addEventListener('click', () => { preferences = { ...defaults, language: preferences.language }; resetPointer(); apply(true); });
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
