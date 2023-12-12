// Window
window.addEventListener("DOMContentLoaded", function () {
  // Product slider
  $(".product-slider").slick({
    infinite: true,
    dots: true,
    dotsClass: "product-dots",
    customPaging: function (productSlider, i) {
      var title = $(productSlider)[0].$slides[i].dataset.title;
      return "<button>" + title + "</button>";
    },
    arrows: false,
  });

  $(".filler-slider").slick({
    infinite: true,
    prevArrow:
      "<button type='button' class='slick-prev'><i class='bi bi-caret-left-fill'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next'><i class='bi bi-caret-right-fill'></i></i></button>",
    rows: 2,
    slidesPerRow: 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //   Work slider
  $(".work-slider").slick({
    infinite: true,
    prevArrow:
      "<button type='button' class='slick-prev'><i class='bi bi-caret-left-fill'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next'><i class='bi bi-caret-right-fill'></i></i></button>",
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  });

  //   Feedback slider
  $(".feedback-slider").slick({
    infinite: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'>abc</button>",
    nextArrow:
      "<button type='button' class='slick-next'><i class='bi bi-caret-right-fill'></i></i></button>",
    adaptiveHeight: true,
  });

  $(".service-slider").slick({
    infinite: true,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
