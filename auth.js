// Proteksi halaman (jaga agar tidak bisa buka index.html tanpa login)
if (!localStorage.getItem('logged')) location.href = 'login.html';

// Fungsi logout
function logout() {
  localStorage.removeItem('logged');
  location.href = 'login.html';
}

// Pasang listener SETELAH halaman selesai load
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('tombol-logout')?.addEventListener('click', logout);
});