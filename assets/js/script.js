'use strict';

(function () {
  var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    navigation: true,
    navigationPosition: 'right',
    responsiveWidth: 800,
  });
})();

(function () {
  const candyshopList = document.querySelector('.candyshop__container-list');
  const candyshopIcon = document.querySelector('.candyshop__icon');
  candyshopIcon.addEventListener('click', function () {
    candyshopList.classList.remove('visually-hidden');
    candyshopList.classList.add('flipInY');
    candyshopIcon.classList.add('visually-hidden');
    candyshopIconClose.classList.remove('visually-hidden');
  });

  const candyshopIconClose = document.querySelector('.candyshop__icon-close');
  candyshopIconClose.addEventListener('click', function () {
    candyshopList.classList.add('visually-hidden');
    candyshopIconClose.classList.add('visually-hidden');
    candyshopIcon.classList.remove('visually-hidden');
    candyshopList.classList.remove('flipInY');
  });
})();

if (window.innerWidth < 800) {
  const candyshopList = document.querySelector('.candyshop__container-list');
  candyshopList.classList.remove('visually-hidden');
}
