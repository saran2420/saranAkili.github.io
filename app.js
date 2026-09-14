const filters = document.querySelectorAll('[data-filter]');
const skills = document.querySelectorAll('[data-group]');
filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let visible = 0;
  skills.forEach(card => {
    card.hidden = selected !== 'all' && card.dataset.group !== selected;
    if (!card.hidden) visible++;
  });
  document.getElementById('filter-status').textContent = `${visible} skill areas shown.`;
}));
