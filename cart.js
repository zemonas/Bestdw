// cart.js
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

document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById("products-container");
  const totalPriceElement = document.getElementById("total-price");

  // Retrieve product details from localStorage
  let cartItems = JSON.parse(localStorage.getItem("productDetails"));

  // Check if cartItems is null or not an array (convert to an array if needed)
  if (cartItems === null || !Array.isArray(cartItems)) {
    cartItems = [cartItems]; // Initialize as an empty array
  }

  // Check if there are products in the cart
  if (cartItems.length === 0) {
    productsContainer.innerHTML = "<p>No products added to the cart.</p>";
    totalPriceElement.textContent = "Total Price: $0";
  } else {
    let total = 0;

    // Display each product in the cart
    cartItems.forEach((item) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      // // Create product image
      // const productImage = document.createElement("img");
      // productImage.src = item.image || ""; // Ensure image property exists
      // productImage.alt = "Product Image";
      // productDiv.appendChild(productImage);

      // Create product details
      const productDetails = document.createElement("div");
      productDetails.classList.add("product-details");

      const productName = document.createElement("h3");
      productName.textContent = item.name || ""; // Ensure name property exists
      productDetails.appendChild(productName);

      const productDates = document.createElement("p");
      productDates.textContent = `Dates: From ${item.checkInDate || ""} to ${
        item.checkOutDate || ""
      }`; // Ensure date properties exist
      productDetails.appendChild(productDates);

      const productPrice = document.createElement("p");
      productPrice.textContent = `Price: $${item.price || "1350.00"}`; // Ensure price property exists
      productDetails.appendChild(productPrice);

      productDiv.appendChild(productDetails);
      productsContainer.appendChild(productDiv);

      // Calculate the total price
      total = item.totalPrice;
    });

    // Display the total price
    totalPriceElement.textContent = `Total Price: $${total}`;
  }
});
