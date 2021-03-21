const calcularAposentadoria = (i) => 2021 - (2021-i);

const nome = prompt('Informe seu nome: ')
const idade = prompt('Informe sua idade:')

const aux = calcularAposentadoria(idade);

if (aux >= 65) {
    console.log(`${nome} você já está aposentado(a)!`);
} else {
    const falta = 65 - aux;
    console.log(`${nome} faltam ${falta} anos para vc aposentar...`);
}