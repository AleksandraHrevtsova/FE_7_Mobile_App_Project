// (function() {
//   document.addEventListener('DOMContentLoaded', ready);
//   function ready() {
//     var button = document.querySelector('.first-section-header__button');
//     var navigation = document.querySelector('.navigation');
//     button.addEventListener('click', function(e) {
//       button.classList.toggle('active');
//       navigation.classList.toggle('active');
//     });
//     console.log('button', button);
//     navigation.addEventListener('click', function() {
//       button.classList.remove('active');
//       navigation.classList.remove('active');
//     });
//   }
// })();

// var angle = 0;
// function galleryspin(sign) { 
// spinner = document.querySelector("#spinner");
// if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
// spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
// }