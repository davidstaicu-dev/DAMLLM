// Javascript per el formulari de passwords (Exercici 4)
function validarPassword() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    
    // Comprovar longitud mínima
    if (password1.length < 8) {
        alert('Error: La contrasenya ha de tenir almenys 8 caràcters');
        return false;
    }
    
    // Comprovar que coincideixin
    if (password1 !== password2) {
        alert('Error: Les contrasenyes no coincideixen');
        return false;
    }
    
    // Si tot és correcte
    alert('S\'ha canviat correctament la contrasenya');
    return true;
}
