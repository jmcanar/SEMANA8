document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener elementos
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Validar nombre
    if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    // Validar correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validar mensaje
    if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
    } else {
        message.classList.remove('is-invalid');
    }

    // Si todo es válido, mostrar mensaje de éxito
    if (isValid) {
        alert('Formulario enviado con éxito!');
        this.reset();
    }
});

function showAlert() {
    alert('¡Bienvenido a nuestra tienda! Gracias por visitarnos.');
}