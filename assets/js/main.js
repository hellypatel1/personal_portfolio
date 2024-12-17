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

  // About Section - Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-effect");
  
    const scrollCallback = () => {
      scrollElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };
  
    // Initial check on page load
    scrollCallback();
  
    // Listen to scroll events
    window.addEventListener("scroll", scrollCallback);
  });

// Project Section - Scroll
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight - 100; // Offset of 100px
  };

  // Scroll event listener to add 'show' class
  const handleScroll = () => {
    projectCards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("show");
      }
    });
  };

  // Trigger on page load and scroll
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once on page load
});

// Skills Section - Fade-in effect
document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skill");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in"); // Adds fade-in class
          observer.unobserve(entry.target); // Stops observing after animation
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  skills.forEach((skill) => {
    observer.observe(skill); // Observe each skill card
  });
});

// Contact Section - Fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");

  const fadeInOnScroll = () => {
    const sectionTop = contactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      contactSection.classList.add("show");
    }
  };

  // Trigger on load and scroll
  fadeInOnScroll();
  window.addEventListener("scroll", fadeInOnScroll);
});