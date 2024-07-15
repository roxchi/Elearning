
(function ($) {
  "use strict";
    //¸ü¶àÏÂÔØ£ºhttp://www.bootstrapmb.com
  jQuery(document).ready(function () {
    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // navbar
    $(".nav__bar").on("click", function () {
      $(this).toggleClass("nav__bar-toggle");
      $(".nav__menu").toggleClass("nav__menu-active");
      $(".backdrop").toggleClass("backdrop-active");
    });

    $(".backdrop, .nav__menu-close").on("click", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
    });

    $(window).on("resize", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
    });

    if ($(window.width < 1200)) {
      $(".nav__menu-link--dropdown").on("click", function () {
        $(this).next(".nav__dropdown").toggleClass("nav__dropdown-active");
        $(this).toggleClass("nav__menu-link--dropdown-active");
      });
    }

    // on window scroll
    $(window).on("scroll", function () {
      // position navbar on scroll
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".header").removeClass("sticky-active");
      } else {
        $(".header").addClass("sticky-active");
      }

      // scroll bottom to top
      var scrollToTop = $(".scrollToTop");
      if ($(window).scrollTop() < 300) {
        scrollToTop.removeClass("active");
      } else {
        scrollToTop.addClass("active");
      }
    });

    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });
  });
})(jQuery);
