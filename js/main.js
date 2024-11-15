$(function () {
  $(".design__slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow:
      '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="" />',
    nextArrow:
      '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="" />',
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          variableWidth: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          variableWidth: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
