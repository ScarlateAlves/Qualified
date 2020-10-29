var nome = "Scarlate Alves";

function abbrevName(nome) {
    var valor = 1;
    valor += nome.indexOf(" ")
    let n = nome[0] + "." + nome[valor]
    let no = n.toLocaleUpperCase()
    return no
}