// JavaScript to clear local storage when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Clear the local storage
  localStorage.clear();
});

// JavaScript to conditionally display the red dot and make it a link to cart.html
document.addEventListener("DOMContentLoaded", function () {
  const cartLink = document.getElementById("cart-link");
  const redDot = document.getElementById("red-dot");

  // Retrieve product details from localStorage
  const productDetails = JSON.parse(localStorage.getItem("productDetails"));

  if (productDetails && Object.keys(productDetails).length > 0) {
    // If there are items in the cart, show the red dot and make it a link to cart.html
    redDot.style.display = "block";
    cartLink.href = "cart.html";
  } else {
    // If the cart is empty, hide the red dot and disable the link
    redDot.style.display = "none";
    cartLink.removeAttribute("href");
  }
});
$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    prevArrow: '<button id="prevBtn" class="slick-prev">Previous</button>',
    nextArrow: '<button id="nextBtn" class="slick-next">Next</button>',
  });
});
