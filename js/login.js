// definir variables
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
  overlay = document.getElementById('overlay'),
  popup = document.getElementById('popup'),
  btnCerrarPopup = document.getElementById('btn-cerrar-popup');

// Agregar dos eventos
// 1) boton abrir login
btnAbrirPopup.addEventListener('click', function(){
  overlay.classList.add('active');
  popup.classList.add('active');
});

// 2) boton cerrar login
btnCerrarPopup.addEventListener('click', function(){
  overlay.classList.remove('active');
  popup.classList.remove('active');
});