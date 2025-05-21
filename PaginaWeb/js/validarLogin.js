document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formLogin");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 👈 esto es clave

    const usuario = document.getElementById("usuario").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    if (usuario === "admin" && contraseña === "1234") {
      window.location.href = "seleccion_carrea.html";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
});
