// MAROON by Renggali — Digital Design Concept Book Interactivity
document.addEventListener('DOMContentLoaded', () => {
  const indexBtn = document.getElementById('indexToggle');
  const drawer = document.getElementById('chapterDrawer');
  const printBtn = document.getElementById('printBtn');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (indexBtn && drawer) {
    indexBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      drawer.classList.toggle('open');
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => drawer.classList.remove('open'));
    });

    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && e.target !== indexBtn) {
        drawer.classList.remove('open');
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  // Lightbox for inspecting photorealistic mockups
  document.querySelectorAll('.visual-frame img').forEach((img) => {
    img.addEventListener('click', () => {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  if (lightbox && lightboxClose) {
    lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }
});
