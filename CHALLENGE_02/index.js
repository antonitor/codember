function miniCompilador(entrada) {
    // Valor numérico inicial
    let valor = 0;

    // Resultado final a imprimir
    let resultado = '';

    // Iterar sobre cada símbolo en la entrada
    for (const simbolo of entrada) {
        // Realizar la operación correspondiente
        switch (simbolo) {
            case '#':
                valor += 1; // Incrementar en 1
                break;
            case '@':
                valor -= 1; // Decrementar en 1
                break;
            case '*':
                valor *= valor; // Multiplicar por sí mismo
                break;
            case '&':
                resultado += valor.toString(); // Imprimir el valor numérico actual
                break;
            default:
                // Ignorar símbolos no reconocidos
                break;
        }
    }

    return resultado;
}

const mensaje = process.argv[2]
if (!mensaje) {
    console.log('Introduce el argumento entre comillas dobles "" por consola')
    return
}

console.log("Compilador:", miniCompilador(process.argv[2]))