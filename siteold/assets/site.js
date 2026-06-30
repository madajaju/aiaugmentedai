document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  const params = new URLSearchParams(window.location.search);

  document.querySelectorAll('.nav [data-nav]').forEach((link) => {
    if (link.dataset.nav === page) link.setAttribute('aria-current', 'page');
  });

  document.querySelectorAll('[data-lens-switcher]').forEach((group) => {
    const controls = Array.from(group.querySelectorAll('[data-lens-control]'));
    const panels = Array.from(group.querySelectorAll('[data-lens-panel]'));
    const defaultLens = group.dataset.defaultLens || controls[0]?.dataset.lensControl;

    const activate = (lens) => {
      controls.forEach((button) => {
        const active = button.dataset.lensControl === lens;
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.lensPanel !== lens;
      });
    };

    controls.forEach((button) => {
      button.addEventListener('click', () => activate(button.dataset.lensControl));
    });

    if (defaultLens) activate(defaultLens);
  });

  document.querySelectorAll('[data-resource-filters]').forEach((group) => {
    const controls = Array.from(group.querySelectorAll('[data-filter-control]'));
    const cards = Array.from(document.querySelectorAll('[data-resource-card]'));
    const initialFilter = params.get('filter') || group.dataset.defaultFilter || 'all';

    const activate = (filter) => {
      controls.forEach((button) => {
        const active = button.dataset.filterControl === filter;
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      cards.forEach((card) => {
        if (filter === 'all') {
          card.hidden = false;
          return;
        }

        const tags = (card.dataset.tags || '').split(/\s+/);
        card.hidden = !tags.includes(filter);
      });
    };

    controls.forEach((button) => {
      button.addEventListener('click', () => activate(button.dataset.filterControl));
    });

    activate(initialFilter);
  });

  if (page === 'home') {
    const lensProfiles = {
      individual: {
        label: 'Individual',
        basePath: 'individual',
        focus: 'your personal workflow',
        summary: 'Personal workflows, output quality, and validation habits.',
      },
      team: {
        label: 'Team',
        basePath: 'team',
        focus: 'shared team workflow',
        summary: 'Shared workflow, handoffs, and review standards.',
      },
      organization: {
        label: 'Organization',
        basePath: 'organization',
        focus: 'the enterprise operating model',
        summary: 'Policy, governance, and scale across the enterprise.',
      },
    };

    const stageTemplates = {
      diagnose: {
        title: 'Diagnose',
        summaryByLens: {
          individual: 'Diagnose the personal workflow before anything changes.',
          team: 'Diagnose the team workflow before anything changes.',
          organization: 'Diagnose the organizational posture before anything changes.',
        },
        purpose: (lens) => `Identify ${lens.focus} before acting.`,
        deliverable: (lens) => `${lens.label} baseline and constraint map.`,
        failureMode: (lens) => `The ${lens.label.toLowerCase()} path optimizes the wrong workflow.`,
        outputs: () => 'Readiness assessment, posture baseline, risk map.',
        nextStep: () => 'Move into Activate and focus the weakest constraint.',
      },
      activate: {
        title: 'Activate',
        summaryByLens: {
          individual: 'Activate turns diagnosis into a focused personal improvement plan.',
          team: 'Activate turns diagnosis into a focused team improvement plan.',
          organization: 'Activate turns diagnosis into a focused organizational improvement plan.',
        },
        purpose: () => 'Turn diagnosis into a focused improvement plan.',
        deliverable: () => 'Capability plan and practice sequence.',
        failureMode: () => 'Teams add tools without changing the bottleneck.',
        outputs: () => 'Practice plan, prompt kit, capability stack.',
        nextStep: () => 'Move into Controls and make the work defensible.',
      },
      controls: {
        title: 'Controls',
        summaryByLens: {
          individual: 'Controls make personal AI work reviewable and defensible.',
          team: 'Controls make team AI work reviewable and defensible.',
          organization: 'Controls make organizational AI work reviewable and defensible.',
        },
        purpose: () => 'Make AI work reviewable and defensible.',
        deliverable: () => 'Integrity Packet and validation path.',
        failureMode: () => 'Nobody can explain or own the result.',
        outputs: () => 'Integrity packet, validation log, approval trail.',
        nextStep: () => 'Move into Execute and run the standard.',
      },
      execute: {
        title: 'Execute',
        summaryByLens: {
          individual: 'Execute turns personal standards into repeatable work.',
          team: 'Execute turns team standards into repeatable work.',
          organization: 'Execute turns organizational standards into repeatable work.',
        },
        purpose: () => 'Run repeatable augmented work.',
        deliverable: () => 'Workflow and handoff rhythm.',
        failureMode: () => 'Private judgment hides the real process.',
        outputs: () => 'Workflow board, handoff checklist, packet flow.',
        nextStep: () => 'Move into Measure and check the signal.',
      },
      measure: {
        title: 'Measure',
        summaryByLens: {
          individual: 'Measure converts personal work evidence into operational truth.',
          team: 'Measure converts team work evidence into operational truth.',
          organization: 'Measure converts organizational work evidence into operational truth.',
        },
        purpose: () => 'Know whether the system is improving.',
        deliverable: () => 'Metrics and correction signal.',
        failureMode: () => 'Busy work gets mistaken for progress.',
        outputs: () => 'Metrics dashboard, correction tracker, review log.',
        nextStep: () => 'Move into Scale only after the system is stable.',
      },
      scale: {
        title: 'Scale',
        summaryByLens: {
          individual: 'Scale expands personal practice only after stability is demonstrated.',
          team: 'Scale expands team practice only after stability is demonstrated.',
          organization: 'Scale expands organizational practice only after stability is demonstrated.',
        },
        purpose: () => 'Expand without losing control.',
        deliverable: () => 'Rollout plan and readiness profile.',
        failureMode: () => 'Instability spreads faster than learning.',
        outputs: () => 'Rollout plan, reuse standard, readiness profile.',
        nextStep: () => 'Return to Diagnose for the next rollout or scope change.',
      },
    };

    const lensControls = Array.from(document.querySelectorAll('[data-home-lens-control]'));
    const stageControls = Array.from(document.querySelectorAll('[data-home-stage-control]'));
    const stageDetail = document.querySelector('[data-home-stage-detail]');
    const stageTitle = document.querySelector('[data-home-stage-title]');
    const stageSummary = document.querySelector('[data-home-stage-summary]');
    const stageContext = document.querySelector('[data-home-stage-context]');
    const stageKeys = document.querySelector('[data-home-stage-keys]');
    const stageLink = document.querySelector('[data-home-stage-link]');
    const stageDiagrams = Array.from(document.querySelectorAll('[data-stage-diagram]'));
    const activeStageClass = 'is-active';
    const defaultLens = 'individual';
    const defaultStage = 'diagnose';
    let currentLens = defaultLens;
    let currentStage = defaultStage;

    const syncDiagram = (stageKey) => {
      stageDiagrams.forEach((diagram) => {
        if (!diagram?.contentWindow) return;
        diagram.contentWindow.postMessage({ source: 'aaos-page', type: 'stage-set', stage: stageKey }, '*');
      });
    };

    const buildStageCopy = (lensKey, stageKey) => {
      const lens = lensProfiles[lensKey] || lensProfiles.individual;
      const stage = stageTemplates[stageKey] || stageTemplates.diagnose;

      return {
        title: `${stage.title} (${lens.label})`,
        summary: stage.summaryByLens?.[lensKey] || stage.summaryByLens?.individual || '',
        link: `${lens.basePath}/${stageKey}/index.html`,
        keys: [
          ['Purpose', stage.purpose(lens)],
          ['Deliverable', stage.deliverable(lens)],
          ['Failure mode', stage.failureMode(lens)],
          ['Typical outputs', stage.outputs(lens)],
          ['Recommended next step', stage.nextStep(lens)],
        ],
      };
    };

    const renderStage = (stageKey, shouldSyncDiagram = true) => {
      const data = buildStageCopy(currentLens, stageKey);
      if (!stageTitle || !stageSummary || !stageKeys || !stageLink) return;

      currentStage = stageKey;
      stageTitle.textContent = data.title;
      stageSummary.textContent = data.summary;
      if (stageContext) {
        stageContext.textContent = `Viewing the ${lensProfiles[currentLens].label} lens.`;
      }
      stageKeys.innerHTML = data.keys
        .map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`)
        .join('');
      stageLink.setAttribute('href', data.link);

      stageControls.forEach((control) => {
        const active = control.dataset.homeStageControl === stageKey;
        control.setAttribute('aria-pressed', active ? 'true' : 'false');
        control.classList.toggle(activeStageClass, active);
      });

      if (shouldSyncDiagram) syncDiagram(stageKey);
    };

    const activateLens = (lensKey) => {
      if (!lensProfiles[lensKey]) return;
      currentLens = lensKey;

      lensControls.forEach((button) => {
        const active = button.dataset.homeLensControl === lensKey;
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      renderStage(currentStage, true);
    };

    lensControls.forEach((button) => {
      button.addEventListener('click', () => activateLens(button.dataset.homeLensControl));
    });

    stageControls.forEach((control) => {
      const stageKey = control.dataset.homeStageControl;
      control.addEventListener('mouseenter', () => renderStage(stageKey));
      control.addEventListener('focus', () => renderStage(stageKey));
      control.addEventListener('click', () => renderStage(stageKey));
    });

    stageDiagrams.forEach((diagram) => {
      diagram.addEventListener('load', () => syncDiagram(currentStage));
    });

    window.addEventListener('message', (event) => {
      const data = event.data || {};
      if (data.source !== 'aaos-svg') return;
      if (!stageTemplates[data.stage]) return;

      if (data.type === 'stage-hover' || data.type === 'stage-select') {
        renderStage(data.stage, false);
      }
    });

    activateLens(defaultLens);
    return;
  }

  const stageData = {
    diagnose: {
      title: 'Diagnose',
      summary: 'Diagnose identifies the current posture before anything changes. The goal is to understand what is actually limiting the work before prescribing a response.',
      keys: [
        ['Purpose', 'Identify the real posture before acting.'],
        ['Key deliverable', 'Baseline posture and constraints.'],
        ['Failure mode', 'People optimize the wrong workflow.'],
        ['Typical outputs', 'Readiness assessment, posture baseline, risk map.'],
      ],
      link: 'method/index.html#stages',
    },
    activate: {
      title: 'Activate',
      summary: 'Activate turns diagnosis into targeted capability. It focuses development on the weakest part of the system so improvement is deliberate, not random.',
      keys: [
        ['Purpose', 'Turn diagnosis into a focused improvement plan.'],
        ['Key deliverable', 'Capability plan and practice sequence.'],
        ['Failure mode', 'Teams add tools without changing the bottleneck.'],
        ['Typical outputs', 'Practice plan, prompt kit, capability stack.'],
      ],
      link: 'method/index.html#stages',
    },
    controls: {
      title: 'Controls',
      summary: 'Controls make capability trustworthy through grounding, validation, and ownership. This is where the Integrity Packet and named roles make responsibility visible.',
      keys: [
        ['Purpose', 'Make AI work reviewable and defensible.'],
        ['Key deliverable', 'Integrity Packet and validation path.'],
        ['Failure mode', 'Nobody can explain or own the result.'],
        ['Typical outputs', 'Integrity packet, validation log, approval trail.'],
      ],
      link: 'method/index.html#validation-ladder',
    },
    execute: {
      title: 'Execute',
      summary: 'Execute turns the standard into repeatable work. The work moves through explicit stages and transfer rules so quality can travel with it.',
      keys: [
        ['Purpose', 'Run repeatable augmented work.'],
        ['Key deliverable', 'Workflow and handoff rhythm.'],
        ['Failure mode', 'Private judgment hides the real process.'],
        ['Typical outputs', 'Workflow board, handoff checklist, packet flow.'],
      ],
      link: 'method/index.html#stages',
    },
    measure: {
      title: 'Measure',
      summary: 'Measure converts work evidence into operational truth. It checks whether the system is becoming more reliable, not merely busier.',
      keys: [
        ['Purpose', 'Know whether the system is improving.'],
        ['Key deliverable', 'Metrics and correction signal.'],
        ['Failure mode', 'Busy work gets mistaken for progress.'],
        ['Typical outputs', 'Metrics dashboard, correction tracker, review log.'],
      ],
      link: 'method/index.html#stages',
    },
    scale: {
      title: 'Scale',
      summary: 'Scale expands only after stability is demonstrated. It is the consequence of governable performance, not a reward for enthusiasm.',
      keys: [
        ['Purpose', 'Expand without losing control.'],
        ['Key deliverable', 'Rollout plan and readiness profile.'],
        ['Failure mode', 'Instability spreads faster than learning.'],
        ['Typical outputs', 'Rollout plan, reuse standard, readiness profile.'],
      ],
      link: 'method/index.html#stages',
    },
  };

  const stageDetail = document.querySelector('[data-stage-detail]');
  const stageTitle = document.querySelector('[data-stage-title]');
  const stageSummary = document.querySelector('[data-stage-summary]');
  const stageKeys = document.querySelector('[data-stage-keys]');
  const stageLink = document.querySelector('[data-stage-link]');
  const stageDiagram = document.querySelector('[data-stage-diagram]');
  const stageControls = Array.from(document.querySelectorAll('[data-stage-control]'));
  const defaultStage = document.body.dataset.stage && stageData[document.body.dataset.stage]
    ? document.body.dataset.stage
    : 'diagnose';
  const stageLinkMap = (() => {
    const raw = document.body.dataset.stageLinks;
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  })();

  if (stageDetail && stageTitle && stageSummary && stageKeys && stageLink && stageControls.length) {
    const activeStageClass = 'is-active';
    let currentStage = defaultStage;

    const syncDiagram = (stageKey) => {
      if (!stageDiagram?.contentWindow) return;
      stageDiagram.contentWindow.postMessage({ source: 'aaos-page', type: 'stage-set', stage: stageKey }, '*');
    };

    const renderStage = (stageKey, shouldSyncDiagram = true) => {
      const data = stageData[stageKey];
      if (!data) return;

      stageTitle.textContent = data.title;
      stageSummary.textContent = data.summary;
      stageKeys.innerHTML = data.keys
        .map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`)
        .join('');
      stageLink.setAttribute('href', stageLinkMap?.[stageKey] || data.link);
      currentStage = stageKey;

      stageControls.forEach((control) => {
        const active = control.dataset.stageControl === stageKey;
        control.setAttribute('aria-pressed', active ? 'true' : 'false');
        control.classList.toggle(activeStageClass, active);
      });

      if (shouldSyncDiagram) syncDiagram(stageKey);
    };

    stageControls.forEach((control) => {
      const stageKey = control.dataset.stageControl;
      control.addEventListener('mouseenter', () => renderStage(stageKey));
      control.addEventListener('focus', () => renderStage(stageKey));
      control.addEventListener('click', () => renderStage(stageKey));
    });

    if (stageDiagram) {
      stageDiagram.addEventListener('load', () => syncDiagram(currentStage));
    }

    window.addEventListener('message', (event) => {
      const data = event.data || {};
      if (data.source !== 'aaos-svg') return;
      if (!stageData[data.stage]) return;

      if (data.type === 'stage-hover' || data.type === 'stage-select') {
        renderStage(data.stage, false);
      }
    });

    renderStage(defaultStage);
  }
});
