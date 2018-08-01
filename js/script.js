$('document').ready(function () {
      var Closed = false;

      $('.hamburger').click(function () {
        if (Closed == true) {
          $(this).removeClass('open');
          $(this).addClass('closed');
          $('.header-menu__list').removeClass('open');
          $('.header-menu__list').addClass('closed');
          Closed = false;
        } else {               
          $(this).removeClass('closed');
          $(this).addClass('open');
          $('.header-menu__list').removeClass('closed');
          $('.header-menu__list').addClass('open');
          Closed = true;
        }
      });
});