const body = document.body;
const sol = document.getElementById('sol');

sol.addEventListener('click', () => {
    // Cambia el icono primero
    if (body.classList.contains('cambiar')) {
        sol.src = 'imagenes/luna.png';
    } else {
        sol.src = 'imagenes/sol.png';
    }

    // Crear overlay para transición de fondo
    const newBg = body.classList.contains('cambiar') 
        ? 'url("imagenes/Amarillo-wallpapers-14.jpg")' 
        : 'url("imagenes/photo-1677029907981-e9a44fb7409a.jpeg")';

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.backgroundImage = newBg;
    overlay.style.backgroundSize = 'cover';
    overlay.style.backgroundPosition = 'center';
    overlay.style.transition = 'opacity 1s ease';
    overlay.style.opacity = 0;
    overlay.style.zIndex = -1;
    
    document.body.appendChild(overlay);
    
    // Forzamos reflow
    void overlay.offsetWidth;
    overlay.style.opacity = 1;
    
    setTimeout(() => {
        // Cambiamos el background real
        body.style.backgroundImage = newBg;
        body.classList.toggle('cambiar');
        overlay.remove();
    }, 1000); // igual a la duración del fade
});
