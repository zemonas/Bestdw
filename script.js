$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    prevArrow: '<button id="prevBtn" class="slick-prev">Previous</button>',
    nextArrow: '<button id="nextBtn" class="slick-next">Next</button>',
  });
});
