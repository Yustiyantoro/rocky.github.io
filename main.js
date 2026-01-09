// Dark mode toggle
const toggle = document.getElementById('tombol-tema');
const theme = document.getElementById('theme');
toggle.addEventListener('click', () => {
  const isDark = theme.disabled = !theme.disabled;
  toggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('dark', isDark);
});
// Load saved theme
if (localStorage.getItem('dark') === 'true') {
  theme.disabled = false;
  toggle.textContent = '☀️';
}

// Search
const search = document.getElementById('search');
const list = document.getElementById('materi-list');
function renderList(key = '') {
  list.innerHTML = materi
    .filter(m => m.judul.toLowerCase().includes(key.toLowerCase()))
    .map(m => `<li><a href="${m.file}">Pertemuan ${m.id} - ${m.judul}</a></li>`)
    .join('');
}
search.addEventListener('input', e => renderList(e.target.value));
renderList(); // initial