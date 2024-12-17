// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  // Toggle the 'open' class
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Parallax Effect for Hero Section
document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
  
    // Select elements for parallax
    const heroContent = document.querySelector(".hero-content");
    const heroImage = document.querySelector(".hero-image");
  
    // Apply parallax effect using transform
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`; // Faster speed for text
    }
    if (heroImage) {
      heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Slower speed for image
    }
  });

  // Hero Section -  Scroll Effect
  document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
  
    // Function to add the 'show' class when in view
    const fadeInHero = () => {
      const heroPosition = heroSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (heroPosition < screenHeight * 0.8) {
        heroSection.classList.add("show");
        window.removeEventListener("scroll", fadeInHero); // Optional: Stop checking after animation
      }
    };
  
    // Initial check in case already in view
    fadeInHero();
  
    // Listen for scroll event
    window.addEventListener("scroll", fadeInHero);
  });
  