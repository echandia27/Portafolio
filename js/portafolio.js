const body = document.body;
const sol = document.getElementById('sol');

sol.addEventListener('click', () => {
    // Cambia la clase del body
    body.classList.toggle('cambiar');

    // Cambia la imagen según el estado
    if (body.classList.contains('cambiar')) {
        sol.src = 'imagenes/sol.png'; // nueva imagen para modo oscuro
    } else {
        sol.src = 'imagenes/luna.png'; // imagen original
    }
});
