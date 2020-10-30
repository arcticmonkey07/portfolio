'use strict';

(function () {
  window.onload = function () {
    let menu = document.querySelector('.menu');
    let menuShow = document.querySelector('.menu__show');
    let menuShowOnIcon = document.querySelector('.menu__icon');
    let menuHide = document.querySelector('.menu__hide');
    let menuPrompt = document.querySelector('.menu__prompt');

    menuShow.onmouseover = function () {
      menu.classList.add('menu__showed');
      menuPrompt.classList.add('menu__prompt-hide');
      menuPrompt.classList.remove('menu__prompt-show');
    };
    menuShowOnIcon.onmouseover = function () {
      menu.classList.add('menu__showed');
    };
    menuHide.onmouseover = function () {
      menu.classList.remove('menu__showed');
      menuPrompt.classList.remove('menu__prompt-hide');
      menuPrompt.classList.add('menu__prompt-show');
    };
  };
})();