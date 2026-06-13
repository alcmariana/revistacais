// Revista CAIS — interações do portal
(function () {
  'use strict';

  var menu = document.getElementById('mobileMenu');
  var toggle = document.querySelector('.menu-toggle');
  var close = document.querySelector('.menu-close');

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    var firstLink = menu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (toggle) toggle.focus();
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);

  // Fecha com ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Fecha ao clicar em um link
  if (menu) {
    menu.querySelectorAll('nav a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }
})();
