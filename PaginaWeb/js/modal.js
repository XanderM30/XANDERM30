// Obtener el modal, el tache y el botón de contacto
const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close");
const contactBtn = document.querySelector(".contact-btn");

// Mostrar el modal cuando se hace clic en el botón de contacto
contactBtn.onclick = () => {
    console.log("Abriendo modal...");
    modal.style.display = "flex";  // Mostrar el modal
};

// Cerrar el modal cuando se da clic en el tache (x)
closeBtn.onclick = () => {
    console.log("Cerrando modal...");
    modal.style.display = "none";  // Ocultar el modal
};

// Cerrar el modal si se hace clic fuera de la ventana modal
window.onclick = (event) => {
    if (event.target === modal) {
        console.log("Cerrando modal por clic fuera...");
        modal.style.display = "none";  // Ocultar el modal
    }
};
