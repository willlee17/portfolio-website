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
  $('#status').fadeOut()
  $('#preloader').delay(350).fadeOut('slow')
})

// Projects
// Magnific Popup
$(document).ready(function() {
    $('#inline-popups-1,#inline-popups-2,#inline-popups-3,#inline-popups-4').magnificPopup({
      delegate: 'a',
      callbacks: {
        beforeOpen: function() {
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      midClick: true
    });
  }
)

// Navigation
$(document).ready(function() {
  showHideNav();

  $(window).scroll(function() {
      showHideNav();
  })

  function showHideNav() {
    if( $(window).scrollTop() > 50 ) {
      $('nav').addClass("white-nav-top");
    } else {
      $('nav').removeClass("white-nav-top");
    }
  }
})

// Smooth Scrolling
$(document).ready(function() {
   $('a.smooth-scroll').click(function(event) {
     event.preventDefault();
     var section_id = $(this).attr("href");

     $("html, body").animate({
       scrollTop: $(section_id).offset().top - 50
     }, 1250);
   })
})


// Wow JS
$(document).ready(function() {
  new WOW().init();
})

$(window).on('load', function() {
  $('#home-heading-1').addClass("animated fadeInDown");
  $('#home-text').addClass("animated zoomIn");
  $('#home-button').addClass("animated fadeInUp");
  $('#arrow-down i').addClass("animated fadeInDown infinite");
  $('#navbar').addClass("animated bounceInRight");
})
