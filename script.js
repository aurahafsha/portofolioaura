// Fade animations when scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('show'); }
  });
});

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
  observer.observe(el);
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.strength-item').forEach((item, i) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 70) {
      item.style.transitionDelay = (i * 0.10) + "s";
      item.classList.add("show");
    }
  });
});


// Smooth scroll menu
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash !== "") {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".contact-card").forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      card.style.transitionDelay = (i * 0.15) + "s";
      card.classList.add("show");
    }
  });
});
