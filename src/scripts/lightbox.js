// Lightbox: tap a photo to see it bigger. Uses the browser's built-in <dialog>,
// which handles the Esc key and keeps keyboard focus inside while open.
const dialog = document.getElementById('lightbox');
if (dialog) {
  const image = dialog.querySelector('img');
  const title = dialog.querySelector('[data-lb-title]');
  const caption = dialog.querySelector('[data-lb-cap]');

  document.querySelectorAll('[data-lightbox-open]').forEach((button) => {
    button.addEventListener('click', () => {
      image.src = button.dataset.big;
      image.alt = button.dataset.cap;
      title.textContent = button.dataset.title;
      caption.textContent = button.dataset.cap;
      dialog.showModal();
    });
  });

  // Clicking anywhere closes it, like the design.
  dialog.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
  });
}
