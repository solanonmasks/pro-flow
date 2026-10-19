// "Text us the problem" card: chips build a message, the button opens the
// phone's messages app with that message filled in.
document.querySelectorAll('[data-text-card]').forEach((card) => {
  const phone = card.dataset.phone;
  const chips = [...card.querySelectorAll('[data-chip]')];
  const box = card.querySelector('textarea');
  const send = card.querySelector('[data-send]');

  function updateLink() {
    const body = box.value.trim() || 'Hi PRO FLO, I need a quote.';
    send.href = `sms:${phone}?&body=${encodeURIComponent(body)}`;
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const on = chip.getAttribute('aria-pressed') !== 'true';
      chip.setAttribute('aria-pressed', String(on));
      const picked = chips.filter((c) => c.getAttribute('aria-pressed') === 'true').map((c) => c.dataset.chip);
      box.value = picked.length ? `Hi PRO FLO, I need a quote for: ${picked.join(', ').toLowerCase()}. Address: ` : '';
      updateLink();
    });
  });

  box.addEventListener('input', updateLink);
  updateLink();
});
