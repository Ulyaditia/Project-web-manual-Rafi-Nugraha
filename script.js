// script.js

// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#ffffff";
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
    navbar.style.padding = "12px 7%";
  } else {
    navbar.style.background = "#ffffff";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    navbar.style.padding = "18px 7%";
  }
});


// ================= ACTIVE MENU =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// ================= SMOOTH ANIMATION =================
const cards = document.querySelectorAll(".card");
const galleryCards = document.querySelectorAll(".galeri-card");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});

galleryCards.forEach(card => {
  observer.observe(card);
});


// ================= BUTTON ALERT =================
const heroButton = document.querySelector(".primary");

heroButton.addEventListener("click", () => {
  console.log("Menuju halaman jurusan...");
});


// ================= MOBILE MENU =================
const mobileMenu = document.createElement("div");
mobileMenu.classList.add("mobile-menu");
mobileMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;

document.querySelector(".navbar").appendChild(mobileMenu);

mobileMenu.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show-menu");
});