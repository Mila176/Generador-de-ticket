const form = document.getElementById('ticket-form');
const ticketSection = document.getElementById('ticket');
const avatarInput = document.getElementById('avatar');
const ticketAvatar = document.getElementById('ticket-avatar');

const nameResult = document.getElementById('name-result');
const emailResult = document.getElementById('email-result');
const githubResult = document.getElementById('github-result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.fullName.value.trim();
  const email = form.email.value.trim();
  const github = form.github.value.trim();
  const avatarFile = avatarInput.files[0];

  if (!name || !email || !github || !avatarFile) return alert('Todos los campos son obligatorios.');
  if (!validateEmail(email)) return alert('Por favor, ingresa un correo válido.');

  const reader = new FileReader();
  reader.onload = () => {
    ticketAvatar.src = reader.result;
    nameResult.textContent = name;
    emailResult.textContent = email;
    githubResult.textContent = github;

    console.log("Mostrando el ticket..."); // Debug para verificar que llega hasta aquí
    ticketSection.classList.remove('hidden');
    ticketSection.scrollIntoView({ behavior: 'smooth' });

    form.reset();
  };
  reader.readAsDataURL(avatarFile);
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
