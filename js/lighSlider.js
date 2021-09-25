$(document).ready(function () {
  $("#imageGalleryAnglais").lightSlider({
    // gallery:true,
    item: 4,
    auto: true,
    loop: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 400,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#imageGalleryArab").lightSlider({
    // gallery:true,
    rtl: true,
    item: 4,
    auto: true,
    loop: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 400,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#serviceSlider").lightSlider({
    item: 4,
    auto: true,
    loop: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 400,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 650,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
    $("#serviceSliderArab").lightSlider({
      item: 4,
      auto: true,
      loop: true,
    rtl: true,

      slideMove: 1,
      easing: "cubic-bezier(0.25, 0, 0.25, 1)",
      speed: 400,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            item: 3,
            slideMove: 1,
            slideMargin: 6,
          },
        },
        {
          breakpoint: 650,
          settings: {
            item: 2,
            slideMove: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            item: 1,
            slideMove: 1,
          },
        },
      ],
    });
  });
