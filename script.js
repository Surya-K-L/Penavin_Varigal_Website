const galleryImages = document.querySelectorAll('.gallery-img');
const overlay = document.getElementById('overlay');
const cardImg = document.getElementById('cardImg');
const closeBtn = document.getElementById('closeBtn');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    cardImg.src = img.src;
    overlay.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});
