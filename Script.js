let total = 0;
const carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoEl = document.getElementById('carrito');
    carritoEl.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        carritoEl.appendChild(li);
    });
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function realizarPedido(event) {
    event.preventDefault();
    alert(`Pedido realizado. Total: $${total.toFixed(2)}`);
    // Reiniciar carrito
    carrito.length = 0;
    total = 0;
    actualizarCarrito();
}