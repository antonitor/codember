import fs from 'fs';

const message_02 = fs.readFileSync('message_02.txt', 'utf-8');

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

console.log("Resultado mini-compilador:", miniCompilador(message_02))