// Initialize an empty array to store cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(product) {
    // Push the product into the cartItems array
    cartItems.push(product);
    
    // Update the cart table in the modal
    updateCartModal();
}

// Function to update the cart modal content
function updateCartModal() {
    // Select the cart table element
    const cartTable = document.querySelector('.show-cart');
    const totalCartPrice = document.querySelector('.total-cart');

    // Clear the existing table rows
    cartTable.innerHTML = '';

    // Loop through cartItems and create a row for each item
    cartItems.forEach(item => {
        const row = document.createElement('tr');
        
        // Populate the row with product details
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>₹${item.price}</td>
            <td>₹${item.quantity * item.price}</td>
        `;
        
        // Append the row to the table
        cartTable.appendChild(row);
    });

    // Calculate the total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalCartPrice.textContent = totalPrice.toFixed(2);
}

// Example product to add to cart (This should come from your product pages)
const exampleProduct = {
    name: "Product 1",
    quantity: 1,
    price: 1000
};

// Event listener for the add to cart button (you can set this for multiple products)
document.querySelector("#add-to-cart-btn").addEventListener("click", function() {
    addToCart(exampleProduct);
});
