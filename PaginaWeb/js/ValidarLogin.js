// validarLogin.js
document.addEventListener('DOMContentLoaded', () => {
  const formLogin = document.getElementById('formLogin');
  const mensajeLogin = document.getElementById('mensajeLogin');

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuarioIngresado = formLogin.usuario.value.trim().toLowerCase();
    const contraseñaIngresada = formLogin.contraseña.value;

    // Comprueba que hay cuentas en localStorage
    const cuentasJSON = localStorage.getItem('cuentas') || '[]';
    const cuentas = JSON.parse(cuentasJSON);

    // Busca cuenta que coincida en correo o matrícula
    const cuentaEncontrada = cuentas.find(c =>
      c.correo.toLowerCase() === usuarioIngresado ||
      c.matricula.toLowerCase() === usuarioIngresado
    );

    if (!cuentaEncontrada || cuentaEncontrada.contraseña !== contraseñaIngresada) {
      mensajeLogin.style.color = 'red';
      mensajeLogin.textContent = 'Usuario o contraseña incorrectos.';
      return;
    }

    // Éxito: guarda la matrícula y redirige
    localStorage.setItem('usuarioLogueado', cuentaEncontrada.matricula);
    window.location.href = 'perfil.html';  // Ajusta la ruta si es diferente
  });
});
