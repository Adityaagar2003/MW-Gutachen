'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});


document.getElementById('menu-toggle').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map when DOM is fully loaded
  var map = L.map('map').setView([-8.3405, 115.092], 13); // Bali, Indonesia

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
});



document.querySelectorAll('.faq-header').forEach(item => {
  item.addEventListener('click', function() {
    const parent = this.parentElement;
    const content = parent.querySelector('.collapse-content');
    const isActive = parent.classList.contains('active');
    
    // Close all open items
    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
      faq.querySelector('.collapse-content').style.maxHeight = null;
    });

    // Open the clicked item if it wasn't already active
    if (!isActive) {
      parent.classList.add('active');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});