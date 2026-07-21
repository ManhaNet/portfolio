(() => {
  "use strict";

  const body = document.body;
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = Array.from(document.querySelectorAll(".nav-menu a"));
  const year = document.querySelector("#year");
  const revealItems = document.querySelectorAll(".reveal");
  const typingTarget = document.querySelector(".typing-text");
  const reduceMotion = false;

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  window.addEventListener("load", () => {
    body.classList.add("is-loaded");
  });

  const closeNav = () => {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  };

  if (navToggle && navMenu) {
    // Focus trap variables
    const focusableElements = navMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      body.classList.toggle("nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      
      if (isOpen) {
        firstFocusable?.focus();
      }
    });

    navLinks.forEach((link) => link.addEventListener("click", closeNav));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
      
      // Focus Trap Logic
      if (navMenu.classList.contains("is-open")) {
        if (event.key === "Tab") {
          if (event.shiftKey) { // Shift + Tab
            if (document.activeElement === firstFocusable) {
              lastFocusable.focus();
              event.preventDefault();
            }
          } else { // Tab
            if (document.activeElement === lastFocusable) {
              firstFocusable.focus();
              event.preventDefault();
            }
          }
        }
      }
    });
  }

  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Optimized active section observer using a map
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => activeObserver.observe(section));
  }

// Typing Animation
if (typingTarget) {

  const words = typingTarget.dataset.words
    .split(",")
    .map(word => word.trim())
    .filter(Boolean);

  const typingSpeed = reduceMotion ? 150 : 80;
  const deletingSpeed = reduceMotion ? 80 : 40;

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {

    const word = words[wordIndex];

    typingTarget.textContent = word.substring(0, charIndex);

    if (!deleting) {
      charIndex++;

      if (charIndex > word.length) {
        deleting = true;
        setTimeout(type, 1200);
        return;
      }

    } else {

      charIndex--;

      if (charIndex < 0) {
        deleting = false;
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
      }

    }

    setTimeout(type, deleting ? deletingSpeed : typingSpeed);
  }

  type();
}
// ===========================
// Back To Top Button
// ===========================

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

}
console.log("✅ END OF SCRIPT");
})();