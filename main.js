$(function() {
let $fullNav = $('#nav');
const $width = $(window).width();
let $icon = $('.click');

let $mobNav = $('.mobile-navbar');
$mobNav.hide()





 if ($width <= 700) {
   console.log('less')
   $('.arrow').hide()
 } else {
   $mobNav.hide()


   console.log('more')

 }

 $icon.on('click', () => {
   if ($icon.hasClass('menu')) {
      console.log('fount it')
      $icon.removeClass('menu').addClass('close')
        console.log('addedt')
      $mobNav.slideDown()
      $icon.attr('src', 'img/close-button.svg')
   } else if ($icon.hasClass('close')) {
      $icon.removeClass('close').addClass('menu')
        console.log('addedt again')
      $mobNav.slideUp()
      $icon.attr('src', 'img/menu-button.svg')
       }
     });








})
