const toggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
  toggle.innerHTML = body.classList.contains("dark-mode")
    ? '<i class="bi bi-sun-fill"></i>'
    : '<i class="bi bi-moon-fill"></i>';
});

const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    messageBox.textContent = "Veuillez remplir tous les champs.";
    messageBox.style.color = "red";
    return;
  }

  messageBox.textContent = "Message envoyé avec succès !";
  messageBox.style.color = "green";
  form.reset();
});

const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => observer.observe(el));