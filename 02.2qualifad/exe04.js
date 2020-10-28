// Switch/case é uma estrutura de condição que define o código a ser executado com base em uma comparação de valores.

// Para que isso fique mais claro, vejamos a sintaxe do switch/case:
var tipo = "+";
var nome;

switch (tipo) {
    case "+":
        nome = "segunda"

        break;
    case "-":
        nome = "terça"
        break;

    default:
        return "invalido";

}

console.log(nome)