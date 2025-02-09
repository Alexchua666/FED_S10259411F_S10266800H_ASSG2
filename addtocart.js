var shoppingCart = (function () {
    var cart = [];

    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    // Save cart
    function saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    }

    // Initialize cart from localStorage
    if (localStorage.getItem("shoppingCart") != null) {
        loadCart();
    }

    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };

    // List cart
    obj.listCart = function () {
        return cart.map(function (item) {
            return {
                name: item.name,
                price: item.price,
                count: item.count,
                total: (item.price * item.count).toFixed(2)
            };
        });
    };

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    };

    // Total cart value
    obj.totalCart = function () {
        return cart.reduce(function (total, item) {
            return total + item.price * item.count;
        }, 0).toFixed(2);
    };

    // Total items count
    obj.totalCount = function () {
        return cart.reduce(function (total, item) {
            return total + item.count;
        }, 0);
    };

    return obj;
})();

// Add item to cart when button is clicked
$('.add-to-cart').click(function (event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

// Clear cart button
$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
});

// Display cart items
function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {
        output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>(" + cartArray[i].price + ")</td>"
            + "<td>" + cartArray[i].count + "</td>"
            + "<td>" + cartArray[i].total + "</td>"
            + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}

displayCart();
