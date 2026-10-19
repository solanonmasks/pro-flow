// Tabs: used by the drainage steps, the services tabs and the gallery categories.
// Markup: a [data-tabs] wrapper holding [role=tab] buttons (data-tab="0", "1", ...)
// and any number of elements with data-panel="0", "1", ... to show/hide.
function setupTabs(root) {
  const tabs = [...root.querySelectorAll('[data-tab]')].filter((t) => t.closest('[data-tabs]') === root);
  const panels = [...root.querySelectorAll('[data-panel]')].filter((p) => p.closest('[data-tabs]') === root);

  function select(index, focus) {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      if (on && focus) tab.focus();
    });
    panels.forEach((panel) => {
      panel.hidden = Number(panel.dataset.panel) !== index;
    });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i, false));
    tab.addEventListener('keydown', (e) => {
      const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (e.key in keys) {
        e.preventDefault();
        select((i + keys[e.key] + tabs.length) % tabs.length, true);
      } else if (e.key === 'Home') {
        e.preventDefault();
        select(0, true);
      } else if (e.key === 'End') {
        e.preventDefault();
        select(tabs.length - 1, true);
      }
    });
  });
}

document.querySelectorAll('[data-tabs]').forEach(setupTabs);
