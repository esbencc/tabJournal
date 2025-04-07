document.addEventListener('DOMContentLoaded', () => {
  const dateSpan = document.getElementById('date');
  const now = new Date();
  dateSpan.textContent = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});
