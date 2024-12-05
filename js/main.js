 // Change nav style on scroll
 $(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 97) {
    $("nav").addClass('header_style');
    $("nav").removeClass('background');
  } else {
    $("nav").removeClass("header_style");
    $("nav").addClass('background');
  }
});

    $('.dropdown-submenu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next('.dropdown-menu').hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
      }
      var $subMenu = $(this).next('.dropdown-menu');
      $subMenu.toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass('show');
      });

      return false;
    });

    // Add hover functionality
    if ($(window).width() >= 768) {
      $('.navbar .dropdown').hover(
        function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
        },
        function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
        }
      );
    }
    $ ('.mobile-menu') .click(function (){
      $ ('.navbar-collapse') .toggle();
  })