function calculaGorjeta(array) {
    if (array < 50) {

        return array = (20 / 100 * array);

    } else if (array >= 50 && array < 200) {

        return array = (15 / 100 * array);

    } else {

        return array = (10 / 100 * array);
    }
}

let nomesRestaurante = [];
let valoresTotais = [];
let valoresFinais = [];
let gorjetas = [];


for (let i = 0; i < 3; i++) {
    nomesRestaurante[i] = prompt(`Digite o nome do ${i + 1}° restaurante: `);
}

for (let i = 0; i < 3; i++) {
    valoresTotais[i] = prompt(`Digite valor do ${i + 1}° restaurante: `);
    gorjetas.push(calculaGorjeta(valoresTotais[i]));
    valoresFinais.push(parseFloat(valoresTotais[i]) + parseFloat(gorjetas[i]));
}

for (let i = 0; i < 3; i++) {
    const nomes = nomesRestaurante[i];
    const valores = valoresTotais[i];
    const gorjeta = gorjetas[i];
    const final = valoresFinais[i];

    console.log(`[Restaurante: ${nomes}] | [Valor R$: ${valores}] | [Gorjeta R$: ${gorjeta}] | [Valor Total R$: ${final}]`);
}
