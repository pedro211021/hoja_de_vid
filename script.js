function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    if (!nombre || !correo || !mensaje) {
      alert("espacios sin llenar, por favor completar.");
      return false;
    }
  
    alert("¡Gracias por tu mensaje, " + nombre + "!");
    return true;
  }
  