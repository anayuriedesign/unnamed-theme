document.documentElement.classList.add('js');

document.addEventListener('change', (event) => {
  const target = event.target;
  if (!target.matches('[data-quantity-input]')) return;

  const form = target.closest('form');
  if (!form) return;

  const min = parseInt(target.min || '1', 10);
  if (parseInt(target.value || '0', 10) < min) target.value = min;
});
