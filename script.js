const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}
document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
// Las imágenes reales reemplazan automáticamente los espacios reservados.
document.querySelectorAll('[data-photo]').forEach(slot => {
  const photo = new Image();
  photo.className = 'real-photo';
  const descriptions = {
    'institucional.jpg': 'Fotografía institucional de Consultorios Italia',
    'fachada.jpg': 'Fachada de Consultorios Italia en Italia 569, Paraná',
    'recepcion.jpg': 'Recepción de Consultorios Italia',
    'consultorio.jpg': 'Espacio de atención odontológica de Consultorios Italia',
    'equipo.jpg': 'Equipo de Consultorios Italia'
  };
  photo.alt = descriptions[slot.dataset.photo];
  photo.loading = 'eager';
  photo.decoding = 'async';
  photo.onload = () => {
    slot.querySelector('.photo-placeholder, .architectural')?.remove();
    slot.prepend(photo);
    if (slot.classList.contains('hero-visual')) {
      slot.querySelector('figcaption').textContent = 'Consultorios Italia · Italia 569, Paraná';
    }
  };
  photo.src = `assets/${slot.dataset.photo}`;
});

