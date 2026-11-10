const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');

if (btn && nav) {
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('.case-open').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.dialog);
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  });
});

document.querySelectorAll('dialog').forEach((dialog) => {
  const closeButton = dialog.querySelector('.close');
  closeButton?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
