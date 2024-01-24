/**
 * @author Adrián Fernández Rodríguez
 * @github https://github.com/adriferro/TAREA_TEMA5.git
 */

var menu = document.querySelector('.hamburger');

function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);
