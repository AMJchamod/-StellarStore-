// Function to handle adding items to the cart
function addToCart(productId, productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Check if the product already exists in the cart
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    // If product exists, increase its quantity
    existingProduct.quantity += 1;
  } else {
    // If product doesn't exist, add it to the cart with a quantity of 1
    cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
  }

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} has been added to your cart!`);
}

// Function to display the cart contents
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = ''; // Clear existing contents

  if (cart.length === 0) {
    // If the cart is empty, display a message
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  // Display each item in the cart
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'col-md-12';
    cartItem.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
      <button class="btn btn-danger remove-from-cart" data-id="${item.id}">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Add event listeners to "Remove" buttons for each cart item
  document.querySelectorAll('.remove-from-cart').forEach(button => {
    button.addEventListener('click', () => {
      removeFromCart(button.dataset.id);
    });
  });
}

// Function to handle removing items from the cart
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Filter out the item to be removed
  cart = cart.filter(item => item.id !== productId);
  
  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Refresh the cart display
  displayCart();
}

// Function to handle checkout
function checkout() {
  // Clear the cart from localStorage
  localStorage.removeItem('cart');
  alert('Thank you for your purchase!');
  
  // Refresh the cart display
  displayCart();
}

// Event listener to display cart on page load for displaycartpage.html
if (document.getElementById('cartItems')) {
  displayCart();
}

// Event listener to handle "Add to Cart" button in carts.html
if (document.querySelectorAll('.add-to-cart').length > 0) {
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const productId = card.dataset.id;
      const productName = card.querySelector('.card-title').innerText;
      
      // Extract the price correctly
      const priceText = card.querySelector('.card-text').innerText;
      const productPrice = parseFloat(priceText.match(/[\d,.]+/)[0].replace(/,/g, ''));

      addToCart(productId, productName, productPrice);
    });
  });
}

// Event listener for checkout button in displaycartpage.html
if (document.getElementById('checkoutButton')) {
  document.getElementById('checkoutButton').addEventListener('click', checkout);
}
