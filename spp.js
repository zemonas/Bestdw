// JavaScript
const cartLink = document.getElementById("cart-link");
const redDot = document.getElementById("red-dot");

// Function to update the red dot based on the number of items in the cart
function updateRedDot() {
  const productDetails = JSON.parse(localStorage.getItem("productDetails"));
  if (productDetails && Object.keys(productDetails).length > 0) {
    // If there are items in the cart, show the red dot and update its content
    const itemCount = Object.keys(productDetails).length;
    redDot.style.display = "block";
    redDot.textContent = itemCount; // Update the red dot with the item count
    cartLink.href = "cart.html";
  } else {
    // If the cart is empty, hide the red dot and disable the link
    redDot.style.display = "none";
    cartLink.removeAttribute("href");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const mainPhoto = document.getElementById("main-photo");
  const smallPhotos = document.querySelectorAll(".small-photo");
  const checkInInput = document.getElementById("check-in");
  const checkOutInput = document.getElementById("check-out");
  const totalPriceSpan = document.getElementById("total-price");
  const addToCartButton = document.getElementById("add-to-cart");

  // Initialize the main photo
  mainPhoto.src = smallPhotos[0].getAttribute("data-src");

  // Add click event listeners to small photos
  smallPhotos.forEach((smallPhoto) => {
    smallPhoto.addEventListener("click", () => {
      mainPhoto.src = smallPhoto.getAttribute("data-src");
    });
  });

  // Calculate the price when date inputs change
  checkInInput.addEventListener("change", calculatePrice);
  checkOutInput.addEventListener("change", calculatePrice);

  function calculatePrice() {
    const basePrice = 1350; // Replace with your base price
    const checkInDate = new Date(checkInInput.value);
    const checkOutDate = new Date(checkOutInput.value);

    if (checkInDate && checkOutDate && checkOutDate > checkInDate) {
      const numDays = Math.ceil(
        (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
      );
      const totalPrice = basePrice * numDays;
      totalPriceSpan.textContent = `₹${totalPrice}`;
    } else {
      totalPriceSpan.textContent = "₹0";
    }
  }

  // Store product details locally
  addToCartButton.addEventListener("click", () => {
    const productName = document.querySelector(
      ".details-section h1"
    ).textContent;
    const checkInDate = checkInInput.value;
    const checkOutDate = checkOutInput.value;
    const totalPrice = totalPriceSpan.textContent;

    const productDetails = {
      productName,
      checkInDate,
      checkOutDate,
      totalPrice,
    };

    // Check if there is existing data in localStorage
    const existingData = localStorage.getItem("productDetails");
    let existingProductDetails = {};

    if (existingData) {
      // If data exists, parse it and merge with new data
      existingProductDetails = JSON.parse(existingData);
    }

    // Merge existing data with new data
    const mergedProductDetails = {
      ...existingProductDetails,
      ...productDetails,
    };

    // Convert the merged product details to a JSON string
    const productDetailsJSON = JSON.stringify(mergedProductDetails);

    // Store the merged JSON string in localStorage
    localStorage.setItem("productDetails", productDetailsJSON);

    // You can retrieve this data later using localStorage.getItem('productDetails')

    // Display a message or perform other actions
    alert("Added to cart!");

    // Update the red dot after successfully adding to the cart
    updateRedDot();
  });
});
