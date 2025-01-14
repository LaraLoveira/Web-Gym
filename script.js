//Función para añadir un producto al carrito
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    //Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 }); //Agregar producto
    }

    //Guardar
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`¡El producto ${product.name} se añadió al carrito!`);
}


//Función para inicializar los eventos en los botones
function initializeAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            const product = { name, price };

            addToCart(product);
        });
    });
}


//Inicializar los eventos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    initializeAddToCartButtons();
});


//Mapa de contacto
document.addEventListener("DOMContentLoaded", function () {
    const businessLocation = [42.32525416359376, -8.78724958557552];
    const map = L.map('map').setView(businessLocation, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker(businessLocation).addTo(map)
        .bindPopup('<b>Disciplina Muscular</b><br>Estamos aquí.')
        .openPopup();
});


//CHECKOUT
document.getElementById('checkout-form').addEventListener('submit', function (e) {
e.preventDefault();

    alert('¡Gracias por tu compra! Tu pedido ha sido realizado.');
    localStorage.removeItem('cart'); //Vaciar cesta
    window.location.href = 'index.html'; //Redirigir al inicio
});