// var myVariable = "Welcome to JS basics"
// document.write(myVariable);
// alert(myVariable);

// jQuery
// How to grab an element and do actions on it

// $(document).ready(function() {
//   $('h1').hide(1000).show(1000).slideUp(1000).slideDown(1000);
//
//   $('#main').css({
//     color: 'red',
//     fontSize: 40,
//   })
//
//   $('h1').click(function() {
//     $('#main').css({
//       color: 'blue',
//       fontSize: 80,
//     })
//   })
// })
//
// $(window).on("load", function() {
//   alert("Window has loaded")
// })


// Preloader
$(window).on('load', function() {
  $('#status').fadeOut(1000)
  $('#preloader').delay(350).fadeOut()
})
