// Data mini judul tiap pertemuan (bisa digenerate otomatis)
const pageData = [
  {id:1, judul:"Pengenalan HTML"},
  {id:2, judul:"Struktur Dasar HTML5"},
  // ... dst sampe 14
];

const searchInput = document.getElementById('searchPage');
const hasilBox    = document.getElementById('hasilSearch');

function renderHasil(key = ''){
  hasilBox.innerHTML = '';
  if(!key) return;

  const cocok = pageData.filter(m =>
    m.judul.toLowerCase().includes(key.toLowerCase())
  );

  if(cocok.length){
    hasilBox.innerHTML = cocok.map(m =>
      `<li><a href="pertemuan-${String(m.id).padStart(2,'0')}.html">Pertemuan ${m.id} - ${m.judul}</a></li>`
    ).join('');
  }else{
    hasilBox.innerHTML = '<li>Tidak ditemukan</li>';
  }
}

searchInput?.addEventListener('input', e => renderHasil(e.target.value));