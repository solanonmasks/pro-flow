// Quote form: sends to Netlify Forms without leaving the page, then shows
// the "Thanks, we've got it" panel. If sending fails, it asks people to call.
document.querySelectorAll('[data-quote-form]').forEach((form) => {
  const success = document.getElementById(form.dataset.success);
  const error = form.querySelector('[data-form-error]');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    error.hidden = true;
    button.disabled = true;
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(`Form error ${res.status}`);
      form.hidden = true;
      success.hidden = false;
      success.focus();
    } catch (err) {
      error.hidden = false;
      button.disabled = false;
    }
  });
});
