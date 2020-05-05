'use strict';

(function () {
  window.onload = function () {
    let menu = document.querySelector('.menu');
    let menuShow = document.querySelector('.menu__show');
    let menuShowOnIcon = document.querySelector('.menu__icon');
    let menuHide = document.querySelector('.menu__hide');
    menuShow.onmouseover = function () {
      menu.classList.add('menu__showed');
    };
    menuShowOnIcon.onmouseover = function () {
      menu.classList.add('menu__showed');
    };
    menuHide.onmouseover = function () {
      menu.classList.remove('menu__showed');
    };
  };
})();