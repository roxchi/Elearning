
(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // wow init
    new WOW().init();

    // course slider
    $(".course__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-course-item"),
        nextArrow: $(".next-course-item"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // features slider
    $(".features__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: false,
        variableWidth: true,
        speed: 600,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
            },
          },
        ],
      });

    // services slider
    $(".services__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-service-item"),
        nextArrow: $(".next-service-item"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              variableWidth: true,
            },
          },
        ],
      });

    // special course slider
    $(".course__slider-special")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-special-course-item"),
        nextArrow: $(".next-special-course-item"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    //counter
    $(".counter-number").counterUp({
      delay: 10,
      time: 1000,
    });

    // testimonials slider
    $(".testimonials__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-testimonial-item"),
        nextArrow: $(".next-testimonial-item"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // select course
    $("#selectCourse").niceSelect();

    // video popup
    if ($(".hero__popup").length) {
      $(".hero__popup").magnificPopup({
        type: "iframe",
      });
    }
  });
})(jQuery);
