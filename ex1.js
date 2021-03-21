//nome
const nome1 = prompt('Informe o nome da 1° pessoa:');
const nome2 = prompt('Informe o nome da 2° pessoa:');

//peso
const peso1 = prompt('Informe o peso da 1° pessoa:');
const peso2 = prompt('Informe o peso da 2° pessoa:');

//altura
const altura1 = prompt('Informe a altura da 1° pessoa:');
const altura2 = prompt('Informe a altura da 2° pessoa:');

//calculo imc

const imc1 = (peso1) / (altura1*altura1);
const imc2 = (peso2) / (altura2*altura2);

//mostra resultado

if (imc1 > imc2) {
    console.log(`O imc de ${nome1} (${imc1}) é maior do que o de ${nome2} (${imc2})`);
} else if (imc2 > imc1) {
    console.log(`O imc de ${nome2} (${imc2}) é maior do que o de ${nome1} (${imc1})`);
} else {
    console.log(`O imc de ${nome1} e de ${nome2} são identicos!`);
}

