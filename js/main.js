$('.sld1').slick({
    dots: false,
    autoplay: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
    autoplay: true,
    arrows:false,
    infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
    autoplay: true,
    arrows:false,
    infinite: true,
        }
      },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       dots: false,
    // autoplay: true,
    // arrows:false,
    // infinite: true,
    //     }
    //   }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });