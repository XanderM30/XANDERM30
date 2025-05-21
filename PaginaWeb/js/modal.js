// Obtener elementos
const aboutModal = document.getElementById("aboutModal");
const aboutBtn = document.querySelector(".about-btn");
const closeAbout = document.getElementById("closeAbout");

const contactModal = document.getElementById("contactModal");
const contactBtn = document.querySelector(".contact-btn");
const closeContact = contactModal.querySelector(".close");

// Asegurarnos de que los modales no se muestren al cargar la página
aboutModal.style.display = "none"; // Se asegura de que el modal de "Sobre el Proyecto" esté oculto
contactModal.style.display = "none"; // Se asegura de que el modal de "Contacto" esté oculto

// Abrir el modal de "Sobre el Proyecto"
aboutBtn.addEventListener("click", function() {
    aboutModal.style.display = "flex"; // Mostrar el modal
});

// Cerrar el modal de "Sobre el Proyecto"
closeAbout.addEventListener("click", function() {
    aboutModal.style.display = "none"; // Ocultar el modal
});

// Abrir el modal de "Contacto"
contactBtn.addEventListener("click", function() {
    contactModal.style.display = "flex"; // Mostrar el modal de contacto
});

// Cerrar el modal de "Contacto"
closeContact.addEventListener("click", function() {
    contactModal.style.display = "none"; // Ocultar el modal de contacto
});

// Cerrar el modal de "Sobre el Proyecto" al hacer clic fuera de él
window.addEventListener("click", function(event) {
    if (event.target === aboutModal) {
        aboutModal.style.display = "none"; // Ocultar el modal
    }

    // Cerrar el modal de "Contacto" al hacer clic fuera de él
    if (event.target === contactModal) {
        contactModal.style.display = "none"; // Ocultar el modal de contacto
    }
});
