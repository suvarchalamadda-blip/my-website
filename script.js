function orderFood(foodName, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: foodName,
        price: price,
        quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(foodName + " added to cart! 🛒");
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = document.getElementById("cartCount");

    if (count) {
        count.innerText = cart.length;
    }
}

updateCartCount();
