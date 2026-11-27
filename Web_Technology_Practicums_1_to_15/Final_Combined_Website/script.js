const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const lightMode = document.body.classList.contains("light");
  themeToggle.textContent = lightMode ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", lightMode ? "Switch to dark theme" : "Switch to light theme");
});

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();
  const status = document.getElementById("formStatus");
  if (!name || !email || !message) {
    status.textContent = "Please complete all fields.";
    return;
  }
  status.textContent = `Thank you, ${name}! Your message has been prepared. This demo does not send messages to a server.`;
  contactForm.reset();
});
