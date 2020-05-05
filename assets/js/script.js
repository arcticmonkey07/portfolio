'use strict';

(function () {
  var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#C63D0F', '#1BBC9B', '#7E8F7C', '#C63D0F', '#C63D0F', '#1BBC9B'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Vue CRM', 'Wines', 'Social Network', 'CandyShop', 'HelyFly', 'Budboat', 'BigShop', 'Pink', 'Device', 'Nerds', 'Code & Magic', 'Trenager', 'Meetup', 'Corporate', 'Bologna', 'Eclipse', 'Sedona' ],
    responsiveWidth: 900,
    afterResponsive: function(isResponsive){
    }
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