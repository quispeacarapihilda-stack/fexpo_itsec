function mostrarPestania(idPestania, botonElemento) {
    // 1. Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion-tarjeta');
    secciones.forEach(sec => {
        sec.classList.remove('active');
    });

    // 2. Desactivar todos los botones de menú
    const botones = document.querySelectorAll('.btn-menu');
    botones.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Mostrar únicamente la pestaña seleccionada
    const seccionSeleccionada = document.getElementById(idPestania);
    if (seccionSeleccionada) {
        seccionSeleccionada.classList.add('active');
    }

    // 4. Activar el botón seleccionado
    if (botonElemento) {
        botonElemento.classList.add('active');
    }
}