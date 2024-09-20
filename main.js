let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');


const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuwxyz0123456789!@#$%^&*()';

function generar() {

    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;

    }

    contrasena.value = password;

    validarFortaleza(password);

}

function validarFortaleza(password) {
    let mensaje = '';

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneSimbolo = /[!@#$%^&*()]/.test(password);

    if (!tieneMayuscula || !tieneNumero || !tieneSimbolo) {
        mensaje = 'Contraseña débil: debe contener al menos una letra mayúscula, un número y un símbolo especial.';
        alert(mensaje);
    } else {
        mensaje = 'Contraseña fuerte';
        alert(mensaje);
    }

}

function limpiar() {
    contrasena.value = '';
}





