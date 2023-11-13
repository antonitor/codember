function contarPalabras(mensaje) {
    // Convertir el mensaje a minúsculas y dividirlo en palabras
    const palabras = mensaje.toLowerCase().split(' ');

    // Crear un objeto para almacenar la cuenta de cada palabra
    const cuentaPalabras = {};

    // Iterar sobre cada palabra y contar su frecuencia
    for (const palabra of palabras) {
        // Incrementar la cuenta de la palabra en el objeto
        cuentaPalabras[palabra] = (cuentaPalabras[palabra] || 0) + 1;
    }

    // Construir la cadena de resultado
    let resultado = '';
    for (const palabra in cuentaPalabras) {
        if (cuentaPalabras.hasOwnProperty(palabra)) {
            resultado += palabra + cuentaPalabras[palabra];
        }
    }

    return resultado;
}

const mensaje = process.argv[2]
if (!mensaje) {
    console.log('Introduce el mensaje entre comillas dobles "" por consola')
    return
}

console.log("CONTAR PALABAS:", contarPalabras(process.argv[2]))