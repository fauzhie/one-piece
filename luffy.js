// Fitur 1: Klik gambar galeri → tampilkan deskripsi
const galeriImages = document.querySelectorAll('.galeri-container img');
galeriImages.forEach((img) => {
  img.addEventListener('click', () => {
    alert("Ini adalah " + img.alt);
  });
});

// Fitur 2: Smooth scroll saat klik menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fitur 3: Tombol kembali ke atas
const backToTop = document.createElement("button");
backToTop.textContent = "⬆️ Top";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px";
backToTop.style.background = "#e60000";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
