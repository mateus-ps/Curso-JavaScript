// par nome/valor
const saudacao = 'Opa' //contexto lexico 1
console.log(saudacao)

function exec(){
    const saudacao = 'Faaaala!' // contexto lexico 2
    return saudacao
}
console.log(exec())

// Objetos são numeros agrupados nome/valor
const cliente = {
    nome: 'Mateus Pereira',
    idade: 24,
    peso: 61.0,
    endereco: {
        logradouro: 'Rua Sessenta',
        numero: 260
    }
}

console.log(cliente)