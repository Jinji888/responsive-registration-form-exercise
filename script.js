const formulario = document.getElementById('formulario-usuario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Registro exitoso!');
    formulario.reset();
});