(() => {
  const journeyStorageKey = 'aa-journey-state';
  const lensOrder = ['individual', 'team-leader', 'organization-leader', 'student', 'teacher', 'education-administrator'];
  const stageOrder = ['aware', 'exploring', 'experimenting', 'integrating', 'leading', 'augmenting'];
  const lensLabels = {
    individual: 'Individual',
    'team-leader': 'Team Leader',
    'organization-leader': 'Organization Leader',
    student: 'Student',
    teacher: 'Teacher',
    'education-administrator': 'Education Leader',
  };
  const stageLabels = {
    aware: 'Aware',
    exploring: 'Exploring',
    experimenting: 'Experimenting',
    integrating: 'Integrating',
    leading: 'Leading',
    augmenting: 'Augmenting',
  };

  function readJourneyState() {
    try {
      const raw = window.localStorage.getItem(journeyStorageKey);
      if (!raw) return {};
      return JSON.parse(raw) || {};
    } catch (error) {
      return {};
    }
  }

  function writeJourneyState(nextState) {
    const state = {
      ...readJourneyState(),
      ...nextState,
    };

    try {
      window.localStorage.setItem(journeyStorageKey, JSON.stringify(state));
    } catch (error) {
      // Ignore storage failures and continue with cookie-only persistence.
    }

    document.cookie = `aa_journey_state=${encodeURIComponent(JSON.stringify(state))}; path=/; max-age=31536000; samesite=lax`;
    return state;
  }

  function getSavedStage() {
    const state = readJourneyState();
    const cookieMatch = document.cookie.match(/(?:^|;\s*)aa_journey_state=([^;]+)/);
    if ((!state || (!state.stage && !state.maturity)) && cookieMatch) {
      try {
        const parsed = JSON.parse(decodeURIComponent(cookieMatch[1]));
        if (parsed && (parsed.stage || parsed.maturity)) return parsed.stage || parsed.maturity;
      } catch (error) {
        return state.stage || state.maturity || '';
      }
    }
    return state.stage || state.maturity || '';
  }

  function isKnownStage(stage) {
    return stageOrder.includes(stage);
  }

  function persistCurrentStage() {
    const lensKey = document.body.getAttribute('data-lens');
    const stageKey = document.body.getAttribute('data-stage');
    if (!stageKey || !isKnownStage(stageKey)) return;

    const previous = readJourneyState();
    if (previous.stage && stageOrder.indexOf(stageKey) > stageOrder.indexOf(previous.stage)) {
      emitMeasurement('aa_return_later_stage', { lens: lensKey, previousStage: previous.stage, stage: stageKey });
    }

    writeJourneyState({
      stage: stageKey,
      lens: lensKey || undefined,
      updatedAt: new Date().toISOString(),
    });
  }

  function redirectLensHubToSavedStage() {
    const lensKey = document.body.getAttribute('data-lens');
    const stageKey = document.body.getAttribute('data-stage');
    // Do not redirect on AAOS roadmap or Maturity pages or if already on a stage page
    if (!lensKey || stageKey || window.location.pathname.includes('/aaos/') || window.location.pathname.includes('/maturity/')) return;

    const savedStage = getSavedStage();
    if (!isKnownStage(savedStage)) return;

    window.location.replace(`/lens/${lensKey}/${savedStage}/`);
  }

  function updateSavedIndicators() {
    const savedStage = getSavedStage();
    const savedLens = readJourneyState().lens;

    if (savedLens) {
      const navLinks = document.querySelectorAll('.nav a');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.includes(`lens/${savedLens}`) || href.includes('find-your-path'))) {
           link.classList.add('is-saved');
           link.setAttribute('title', 'You have a saved path here');
        }
      });
    }

    if (savedStage) {
      const stageTabs = document.querySelectorAll('.stage-tab');
      stageTabs.forEach(tab => {
        const href = tab.getAttribute('href');
        const dataTab = tab.getAttribute('data-stage-tab');
        if ((href && href.includes(`/${savedStage}/`)) || (dataTab === savedStage)) {
          tab.classList.add('is-saved');
        }
      });
    }
  }

  function initJourneyContinuity() {
    if (document.querySelector('[data-journey-continuity]')) return;
    const state = readJourneyState();
    if (!state.lens || !isKnownStage(state.stage)) return;

    const lens = lensLabels[state.lens] || state.lens;
    const stage = stageLabels[state.stage] || state.stage;
    const stageIndex = stageOrder.indexOf(state.stage);
    const nextStage = stageOrder[stageIndex + 1];
    const nextStageLink = nextStage
      ? `<a href="/lens/${state.lens}/${nextStage}/">Continue to ${stageLabels[nextStage]}</a>`
      : `<a href="/aaos/">Review the AAOS framework</a>`;
    const roleProgression = {
      individual: [['Team Leader', '/lens/team-leader/'], ['Organization Leader', '/lens/organization-leader/']],
      'team-leader': [['Organization Leader', '/lens/organization-leader/']],
      student: [['Teacher', '/lens/teacher/'], ['Education Leader', '/lens/education-administrator/']],
      teacher: [['Education Leader', '/lens/education-administrator/']],
    };
    const related = (roleProgression[state.lens] || []).map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
    const applyLabels = {
      individual: 'Use individual workbooks',
      'team-leader': 'Use team workflow kits',
      'organization-leader': 'Use organization playbooks',
      student: 'Use student practice guides',
      teacher: 'Use teaching toolkits',
      'education-administrator': 'Use education leadership tools',
    };
    const augmentLabels = {
      individual: 'Get help with your workflow',
      'team-leader': 'Get team enablement',
      'organization-leader': 'Get organizational support',
      student: 'Get learning support',
      teacher: 'Get faculty development support',
      'education-administrator': 'Get institutional support',
    };
    const bar = document.createElement('aside');
    bar.className = 'journey-continuity shell';
    bar.setAttribute('data-journey-continuity', '');
    bar.setAttribute('aria-label', 'Saved journey');
    bar.innerHTML = `
      <div class="journey-continuity-summary">
        <p class="card-kicker">Your saved path</p>
        <strong>${escapeHtml(lens)} · ${escapeHtml(stage)}</strong>
        <span>Saved in this browser</span>
      </div>
      <nav class="journey-continuity-links" aria-label="Continue your journey">
        ${nextStageLink}
        <a href="/resources/">Deeper learning</a>
        <a href="/learn-apply-augment/#apply">${applyLabels[state.lens] || 'Apply tools'}</a>
        <a href="/learn-apply-augment/#augment">${augmentLabels[state.lens] || 'Augment support'}</a>
        <a href="/education/">Education resources</a>
        <a href="/newsletter/">Community and newsletter</a>
        ${related ? `<span class="journey-related-label">Related paths:</span>${related}` : ''}
      </nav>`;
    const breadcrumbs = document.querySelector('.breadcrumbs');
    const header = document.querySelector('.site-header');
    (breadcrumbs || header)?.after(bar);
  }

  function initResourceRecommendations() {
    const root = document.querySelector('[data-resource-recommendation]');
    const cardsRoot = root && root.querySelector('[data-resource-recommendation-cards]');
    if (!root || !cardsRoot) return;
    const state = readJourneyState();
    if (!state.lens || !state.stage) return;

    const cards = Array.from(document.querySelectorAll('.resource-card[data-resource-type]'));
    const selected = cards.filter((card) => {
      const lens = card.dataset.lens;
      const maturity = card.dataset.maturity;
      return (lens === 'all' || lens === state.lens) && (maturity === 'all' || maturity === state.stage);
    }).slice(0, 3);
    if (!selected.length) return;

    const lens = lensLabels[state.lens] || state.lens;
    const stage = stageLabels[state.stage] || state.stage;
    root.querySelector('[data-resource-recommendation-heading]').textContent = `Because you are a ${lens} at the ${stage} stage, start with these resources.`;
    root.querySelector('[data-resource-recommendation-copy]').textContent = 'These recommendations use your saved path. You can still browse the full catalog below.';
    selected.forEach((card) => cardsRoot.appendChild(card.cloneNode(true)));
    root.hidden = false;
  }

  function setupNavDropdowns() {
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
      const button = dropdown.querySelector('button');
      if (!button) return;
      const close = () => { dropdown.classList.remove('is-open'); button.setAttribute('aria-expanded', 'false'); };
      button.addEventListener('click', () => {
        const open = !dropdown.classList.contains('is-open');
        document.querySelectorAll('.nav-dropdown.is-open').forEach(other => { if (other !== dropdown) { other.classList.remove('is-open'); other.querySelector('button')?.setAttribute('aria-expanded', 'false'); } });
        dropdown.classList.toggle('is-open', open); button.setAttribute('aria-expanded', String(open));
      });
      dropdown.addEventListener('focusout', event => { if (!dropdown.contains(event.relatedTarget)) close(); });
      dropdown.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); button.focus(); } });
    });
  }

  function showIucWelcome() {
    const welcome = document.querySelector('[data-iuc-welcome]');
    if (welcome && new URLSearchParams(window.location.search).get('src')?.toLowerCase() === 'iuc') welcome.hidden = false;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function isExternalHref(href) {
    return /^https?:\/\//i.test(href);
  }

  function renderLinks(links) {
    if (!Array.isArray(links) || !links.length) return '';

    return `
      <div class="stage-links">
        ${links.map((link) => `
          <a class="stage-link" href="${escapeHtml(link.href)}"${link.external || isExternalHref(link.href) ? ' target="_blank" rel="noopener noreferrer"' : ''}>
            <span>${escapeHtml(link.label)}</span>
            ${link.description ? `<small>${escapeHtml(link.description)}</small>` : ''}
          </a>
        `).join('')}
      </div>
    `;
  }

  function renderImage(image) {
    if (!image || !image.src) return '';

    return `
      <figure class="stage-media">
        <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || '')}" loading="lazy">
        ${image.caption ? `<figcaption>${escapeHtml(image.caption)}</figcaption>` : ''}
      </figure>
    `;
  }

  function renderBlocks(blocks) {
    if (!Array.isArray(blocks) || !blocks.length) return '';

    return `
      <div class="stage-blocks">
        ${blocks.map((block) => {
          if (!block || !block.type) return '';
          if (block.type === 'html') return `<div class="stage-block stage-block-html">${block.html || ''}</div>`;
          if (block.type === 'paragraph') return `<p class="stage-block stage-block-paragraph">${escapeHtml(block.text)}</p>`;
          if (block.type === 'quote') {
            return `
              <blockquote class="stage-block stage-block-quote">
                <p>${escapeHtml(block.text)}</p>
                ${block.source ? `<cite>${escapeHtml(block.source)}</cite>` : ''}
              </blockquote>
            `;
          }
          if (block.type === 'list') {
            const items = Array.isArray(block.items) ? block.items : [];
            return `
              <div class="stage-block stage-block-list">
                ${block.title ? `<p class="card-kicker">${escapeHtml(block.title)}</p>` : ''}
                <ul>
                  ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
              </div>
            `;
          }
          if (block.type === 'image') return renderImage(block);
          if (block.type === 'links') {
            return `
              <div class="stage-block stage-block-links">
                ${block.title ? `<p class="card-kicker">${escapeHtml(block.title)}</p>` : ''}
                ${renderLinks(block.items)}
              </div>
            `;
          }
          if (block.type === 'cta') {
            return `
              <div class="stage-block stage-block-cta">
                ${block.label ? `<p class="card-kicker">${escapeHtml(block.label)}</p>` : ''}
                <a class="button" href="${escapeHtml(block.href)}"${block.external || isExternalHref(block.href) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(block.text || block.href)}</a>
              </div>
            `;
          }
          return '';
        }).join('')}
      </div>
    `;
  }

  function initStageTabs() {
    const roots = document.querySelectorAll('[data-stage-tabs]');
    roots.forEach((root, rootIndex) => {
      const buttons = Array.from(root.querySelectorAll('[data-stage-tab]'));
      const panels = Array.from(root.querySelectorAll('[data-stage-panel]'));
      if (!buttons.length || !panels.length) return;

      // Assign unique IDs and ARIA linkage
      buttons.forEach((button) => {
        const key = button.getAttribute('data-stage-tab');
        const panel = panels.find((p) => p.getAttribute('data-stage-panel') === key);
        if (panel) {
          const buttonId = button.id || `tab-${rootIndex}-${key}`;
          const panelId = panel.id || `panel-${rootIndex}-${key}`;
          button.id = buttonId;
          button.setAttribute('aria-controls', panelId);
          panel.id = panelId;
          panel.setAttribute('aria-labelledby', buttonId);
        }
      });

      const activate = (key) => {
        buttons.forEach((button) => {
          const active = button.getAttribute('data-stage-tab') === key;
          button.setAttribute('aria-selected', active ? 'true' : 'false');
          button.tabIndex = active ? 0 : -1;
        });
        panels.forEach((panel) => {
          panel.hidden = panel.getAttribute('data-stage-panel') !== key;
        });
      };

      buttons.forEach((button) => {
        button.addEventListener('click', () => activate(button.getAttribute('data-stage-tab')));
        button.addEventListener('keydown', (event) => {
          const currentIndex = buttons.indexOf(button);
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
          event.preventDefault();
          const direction = event.key === 'ArrowRight' ? 1 : -1;
          const nextIndex = (currentIndex + direction + buttons.length) % buttons.length;
          buttons[nextIndex].focus();
          activate(buttons[nextIndex].getAttribute('data-stage-tab'));
        });
      });

      const defaultKey = root.getAttribute('data-default-stage') || buttons[0].getAttribute('data-stage-tab');
      activate(defaultKey);
    });
  }

  function renderLensStages() {
    const root = document.querySelector('[data-lens-stage-root]');
    if (!root) return;

    const lensKey = document.body.getAttribute('data-lens');
    const lensData = window.AA_LENS_DATA && window.AA_LENS_DATA[lensKey];
    if (!lensData) return;

    const stages = lensData.stages || {};
    const stageOrder = ['aware', 'exploring', 'experimenting', 'integrating', 'leading', 'augmenting'];
    const title = lensData.title || 'Lens';
    const defaultKey = 'aware';

    root.innerHTML = `
      <div class="section-title">
        <p class="eyebrow">${title}</p>
        <h2>Explore the AAOS stages</h2>
        <p>Select a stage to see what it looks like, what tools are available, what to focus on next, what to watch out for, and how to improve your AI posture.</p>
      </div>
        <div class="stage-tabs" data-stage-tabs data-default-stage="${defaultKey}">
        <div class="stage-tablist" role="tablist" aria-label="${title} AAOS stages">
          ${stageOrder.map((stage) => `
            <button type="button" class="stage-tab" data-stage-tab="${stage}" role="tab" aria-selected="false">${stages[stage].label}</button>
          `).join('')}
        </div>
        <div class="stage-panels">
          ${stageOrder.map((stage) => {
            const item = stages[stage];
            return `
              <section class="stage-panel" data-stage-panel="${stage}" role="tabpanel" tabindex="0"${stage === defaultKey ? '' : ' hidden'}>
                <div class="stage-panel-header">
                  <p class="card-kicker">${item.label}</p>
                  <h3>${item.headline}</h3>
                  <p>${item.summary}</p>
                </div>
                <div class="stage-detail-grid">
                  <article class="card"><p class="card-kicker">What it looks like</p><p>${item.looksLike}</p></article>
                  <article class="card"><p class="card-kicker">Tools available</p><p>${item.tools}</p></article>
                  <article class="card"><p class="card-kicker">Focus next</p><p>${item.focus}</p></article>
                  <article class="card"><p class="card-kicker">Watch out for</p><p>${item.watchOut}</p></article>
                  <article class="card"><p class="card-kicker">AI posture</p><p>${item.posture}</p></article>
                </div>
                ${renderImage(item.image)}
                ${renderLinks(item.links)}
                ${renderBlocks(item.blocks)}
              </section>
            `;
          }).join('')}
        </div>
      </div>
    `;

    initStageTabs();
  }

  function initStagePersistenceControls() {
    const controls = document.querySelectorAll('[data-save-stage]');
    controls.forEach((control) => {
      control.addEventListener('click', () => {
        const stage = control.getAttribute('data-save-stage');
        if (!isKnownStage(stage)) return;
        writeJourneyState({
          stage,
          updatedAt: new Date().toISOString(),
        });
        const nextHref = control.getAttribute('data-next-href');
        if (nextHref) {
          window.location.assign(nextHref);
        }
      });
    });
  }

  function bestMatchFromScores(scores, order) {
    return order.reduce((best, key) => {
      if (!best) return key;
      const bestScore = scores[best] || 0;
      const nextScore = scores[key] || 0;
      if (nextScore > bestScore) return key;
      return best;
    }, '');
  }

  function getStageRecommendation(stage) {
    const recommendations = {
      aware: 'Start with the basics, then use the AAOS path to see what changes first.',
      exploring: 'Use the lens page to compare examples, then look for one repeatable pattern to keep.',
      experimenting: 'Focus on one workflow and strengthen validation before you widen use.',
      integrating: 'Make the workflow dependable, then tighten review and handoff rules.',
      leading: 'Teach the pattern to others and use the AAOS path to standardize the next step.',
      augmenting: 'Keep the operating model clear, then preserve human judgment as the system scales.',
    };
    return recommendations[stage] || 'Use the lens page first, then continue into AAOS with your augmentation maturity in mind.';
  }

  function getLensRecommendation(lens) {
    const recommendations = {
      individual: 'Choose one recurring task and use a workbook to make the workflow repeatable.',
      'team-leader': 'Choose one shared workflow and use a team toolkit to make review and handoffs visible.',
      'organization-leader': 'Choose one strategic workflow and use a playbook to align governance, ownership, and adoption.',
      student: 'Choose one learning task and use a practice guide while keeping ownership of your thinking.',
      teacher: 'Choose one learning or assessment workflow and use a toolkit to strengthen clarity and feedback.',
      'education-administrator': 'Choose one institutional priority and use a leadership tool to clarify ownership, risk, and next action.',
    };
    return recommendations[lens] || 'Choose one real workflow and make the next practice visible.';
  }

  function initAssessmentPrompt() {
    const prompt = document.querySelector('[data-assessment-prompt]');
    if (!prompt) return;

    const savedStage = getSavedStage();
    if (!savedStage) {
      prompt.hidden = false;
    }
  }

  function inferEngagement(href, label) {
    const value = `${href || ''} ${label || ''}`.toLowerCase();
    if (value.includes('drdarrenspeaks') || value.includes('workshop') || value.includes('service') || value.includes('conversation') || value.includes('briefing')) return 'augment';
    if (value.includes('shop.paidar') || value.includes('toolkit') || value.includes('workbook') || value.includes('apply')) return 'apply';
    if (value.includes('resource') || value.includes('article') || value.includes('assessment') || value.includes('learn') || value.includes('book') || value.includes('newsletter')) return 'learn';
    return '';
  }

  function emitMeasurement(name, detail = {}) {
    const payload = { name, ...detail, path: window.location.pathname, timestamp: new Date().toISOString() };
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: name, ...payload });
    window.dispatchEvent(new CustomEvent(name, { detail: payload }));
  }

  function initMeasurement() {
    const params = new URLSearchParams(window.location.search);
    const campaign = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
      if (params.has(key)) campaign[key] = params.get(key);
    });
    if (Object.keys(campaign).length) {
      try { window.sessionStorage.setItem('aa-campaign', JSON.stringify(campaign)); } catch (error) { /* storage is optional */ }
      emitMeasurement('aa_campaign_visit', campaign);
    }

    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const label = link.textContent.trim();
      const engagement = inferEngagement(href, label);
      if (!engagement && !/^https?:\/\//i.test(href)) return;
      emitMeasurement('aa_link_click', { engagement, href, label });
      if (window.location.pathname === '/' && /find-your-path/.test(href)) emitMeasurement('aa_home_find_path', { href, label });
      if (/\/lens\//.test(href)) emitMeasurement('aa_lens_selected', { href, label });
      if (link.closest('[data-assessment-result]') || /do this next|open your coaching page/i.test(label)) {
        emitMeasurement('aa_recommended_action_click', { href, label });
      }
      if (/learn-apply-augment\/#[^/]*apply/i.test(href) && /resources|learn/i.test(window.location.pathname)) {
        emitMeasurement('aa_learn_to_apply', { href, label });
      }
      if (/augment/.test(href) && /\/apply\//.test(window.location.pathname)) {
        emitMeasurement('aa_apply_to_augment', { href, label });
      }
      if (/shop\.paidar\.ai/i.test(href)) emitMeasurement('aa_shop_click', { engagement, href, label });
      if (/drdarrenspeaks|paidar\.ai\/(services|workshops|educators)/i.test(href)) emitMeasurement('aa_augment_click', { href, label });
    });

    const assessment = document.querySelector('[data-assessment-form]');
    if (assessment) {
      let started = false;
      assessment.addEventListener('change', () => {
        if (started) return;
        started = true;
        emitMeasurement('aa_assessment_start');
      });
      assessment.addEventListener('submit', () => emitMeasurement('aa_assessment_complete'));
    }

    document.querySelectorAll('form[action*="maillist-manage.com"]').forEach((form) => {
      form.addEventListener('submit', () => emitMeasurement('aa_newsletter_signup', { form: form.getAttribute('action') }));
    });
  }

  function initAssessment() {
    const form = document.querySelector('[data-assessment-form]');
    const result = document.querySelector('[data-assessment-result]');
    if (!form || !result) return;

    const steps = Array.from(form.querySelectorAll('[data-quiz-step]'));
    const nextBtn = form.querySelector('[data-next-step]');
    const prevBtn = form.querySelector('[data-prev-step]');
    const errorMsg = form.querySelector('[data-quiz-error]');

    const showStep = (index) => {
      steps.forEach((step, i) => {
        step.hidden = i !== index;
      });
      if (errorMsg) errorMsg.hidden = true;
      form.setAttribute('data-current-step', (index + 1).toString());
      if (index === 0) {
        window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
      }
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const currentStep = steps.find(s => !s.hidden);
        const required = Array.from(currentStep.querySelectorAll('input[required]'));
        const allFilled = required.every(input => {
          const name = input.getAttribute('name');
          return !!form.querySelector(`input[name="${name}"]:checked`);
        });

        if (!allFilled) {
          if (errorMsg) {
            errorMsg.hidden = false;
            errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          return;
        }
        showStep(1);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => showStep(0));
    }

    const savedState = readJourneyState();
    const savedLens = savedState.lens;
    const savedStage = savedState.stage;

    if (savedLens) {
      const lensInput = form.querySelector(`input[name="lens_q1"][value="${savedLens}"]`);
      if (lensInput) lensInput.checked = true;
    }
    if (savedStage) {
      const stageInput = form.querySelector(`input[name="stage_q1"][value="${savedStage}"]`);
      if (stageInput) stageInput.checked = true;
    }

    const syncSelectionStyles = () => {
      form.querySelectorAll('.quiz-choice').forEach((choice) => {
        const input = choice.querySelector('input');
        choice.classList.toggle('selected', Boolean(input && input.checked));
      });
    };

    syncSelectionStyles();
    form.addEventListener('change', syncSelectionStyles);

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const lensScores = {};
      const stageScores = {};

      form.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
        const score = input.getAttribute('data-score');
        const name = input.getAttribute('name') || '';
        if (!score) return;
        if (name.startsWith('lens_')) {
          lensScores[score] = (lensScores[score] || 0) + 1;
        } else if (name.startsWith('stage_')) {
          stageScores[score] = (stageScores[score] || 0) + 1;
        }
      });

      const lens = bestMatchFromScores(lensScores, lensOrder) || 'individual';
      const maturity = bestMatchFromScores(stageScores, stageOrder) || 'aware';

      writeJourneyState({
        lens,
        stage: maturity,
        maturity,
        updatedAt: new Date().toISOString(),
      });

      const lensHref = `/lens/${lens}/`;
      const stageHref = `/lens/${lens}/${maturity}/`;
      const aaosHref = '/aaos/';
      const recommendation = getStageRecommendation(maturity);

      result.hidden = false;
      result.innerHTML = `
        <div class="section-title">
          <p class="eyebrow">Your guidance</p>
          <h2 id="assessment-result-heading" tabindex="-1">Start here: ${escapeHtml(lensLabels[lens] || lens)} · ${escapeHtml(stageLabels[maturity] || maturity)}</h2>
          <p>You do not need to master everything at once. Start by understanding where you are today, then take one practical next step.</p>
        </div>
        <div class="card-grid three-up">
          <article class="card">
            <p class="card-kicker">Where You Are</p>
            <h3>${escapeHtml(stageLabels[maturity] || maturity)}</h3>
            <p>Your current augmentation maturity best matches this stage.</p>
          </article>
          <article class="card">
            <p class="card-kicker">What Matters Now</p>
            <h3>${escapeHtml(lensLabels[lens] || lens)} context</h3>
            <p>${escapeHtml(getLensRecommendation(lens))}</p>
          </article>
          <article class="card">
            <p class="card-kicker">Do This Next</p>
            <h3>Open your coaching page</h3>
            <p>${escapeHtml(recommendation)}</p>
          </article>
        </div>
        <div class="card-grid three-up" style="margin-top: 1rem;">
          <article class="card">
            <p class="card-kicker">Avoid This</p>
            <h3>Do not skip the practice</h3>
            <p>Do not jump ahead to tools or advanced workflows before the current stage is repeatable.</p>
          </article>
          <article class="card">
            <p class="card-kicker">Know You’re Ready to Progress When</p>
            <h3>Your current behavior is repeatable</h3>
            <p>You can explain what you do, review the result, and apply the practice in a real workflow.</p>
          </article>
          <article class="card">
            <p class="card-kicker">Optional Deeper Resource</p>
            <h3>Explore the AAOS framework</h3>
            <p>Use the framework when you want the underlying system behind your recommended path.</p>
          </article>
        </div>

        <div class="card panel" style="margin-top: 2rem; border-color: var(--secondary-soft);">
          <div style="display: grid; gap: 1rem; md:grid-template-columns: 1fr auto;">
            <div>
              <p class="card-kicker" style="color: var(--secondary);">Save your results</p>
              <h3 style="margin-bottom: 0.5rem;">Get your personalized roadmap by email</h3>
              <p>Join the movement to receive a detailed breakdown of your maturity level, recommended tools, and the next steps for your lens.</p>
            </div>
            <form method="POST" action="https://lsfo-zgfl.maillist-manage.com/weboptin.zc" target="_blank" class="form-inline" style="margin-top: 0.5rem;">
              <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW">
              <input type="hidden" name="zx" value="13336b6b1">
              <input type="hidden" name="zcvers" value="3.0">
              <input type="hidden" name="lD" value="112881a1caeb9ba71">
              <input type="hidden" name="zcld" value="112881a1caeb9ba71">
              <input type="hidden" name="zctd" value="112881a1caeb9ba9d">
              <input type="hidden" name="zc_formIx" value="3z48d34bc44b911e5b1c4025477f34fa57102849dfc54c33fb8876123171441f44">
              <input type="hidden" name="mode" value="OptinCreateView">
              <input type="hidden" name="submitType" value="optinCustomView">

              <label class="form-label" for="assessment-email">Email address</label>
              <input id="assessment-email" type="email" name="CONTACT_EMAIL" placeholder="your@email.com" required class="input-text">
              <button type="submit" class="button">Email My Results</button>
            </form>
            <p class="form-note">By clicking, you join the AI-Augmented newsletter. We respect your privacy.</p>
          </div>
        </div>

        <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem;">
          <div class="saved-indicator">Result saved to this browser</div>
          <div class="cta-row">
            <a class="button" href="${stageHref}">Do This Next</a>
            <a class="button secondary" href="${lensHref}">Explore lens</a>
            <a class="button secondary" href="${aaosHref}">What is AAOS?</a>
          </div>
        </div>
      `;
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const heading = result.querySelector('#assessment-result-heading');
      if (heading) heading.focus();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNavDropdowns, { once: true });
    document.addEventListener('DOMContentLoaded', showIucWelcome, { once: true });
    document.addEventListener('DOMContentLoaded', redirectLensHubToSavedStage, { once: true });
    document.addEventListener('DOMContentLoaded', persistCurrentStage, { once: true });
    document.addEventListener('DOMContentLoaded', renderLensStages, { once: true });
    document.addEventListener('DOMContentLoaded', initStagePersistenceControls, { once: true });
    document.addEventListener('DOMContentLoaded', initAssessment, { once: true });
    document.addEventListener('DOMContentLoaded', updateSavedIndicators, { once: true });
    document.addEventListener('DOMContentLoaded', initResourceRecommendations, { once: true });
    document.addEventListener('DOMContentLoaded', initJourneyContinuity, { once: true });
    document.addEventListener('DOMContentLoaded', initAssessmentPrompt, { once: true });
    document.addEventListener('DOMContentLoaded', initMeasurement, { once: true });
  } else {
    setupNavDropdowns();
    showIucWelcome();
    redirectLensHubToSavedStage();
    persistCurrentStage();
    renderLensStages();
    initStagePersistenceControls();
    initAssessment();
    updateSavedIndicators();
    initResourceRecommendations();
    initJourneyContinuity();
    initAssessmentPrompt();
    initMeasurement();
  }
})();
