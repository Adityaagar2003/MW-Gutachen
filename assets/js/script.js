



document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map when DOM is fully loaded
  var map = L.map('map').setView([-8.3405, 115.092], 13); // Bali, Indonesia

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
});



  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });



  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;

      // Close all other open FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
          item.querySelector('.faq-answer').style.maxHeight = null;
          item.querySelector('.faq-toggle').textContent = '+';
        }
      });

      // Toggle the clicked FAQ item
      faqItem.classList.toggle('active');

      const faqAnswer = faqItem.querySelector('.faq-answer');
      const faqToggle = faqItem.querySelector('.faq-toggle');

      if (faqItem.classList.contains('active')) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        faqToggle.textContent = '-';
      } else {
        faqAnswer.style.maxHeight = null;
        faqToggle.textContent = '+';
      }
    });
  });