//nome
const nome = prompt('Informe o nome:');

//peso
const peso = prompt('Informe o peso:');

//altura
const altura = prompt('Informe a altura:');

//calculo imc
const imc = (peso) / (altura * altura);

//mostra resultado

if (imc < 17) {
    console.log(`${nome} você está muito abaixo do peso!`);
    console.log(`Dica: Nunca pule refeições: faça ao menos 6 refeições fracionadas ao longo do dia;
    Aumente gradativamente a ingestão calórica: dessa forma o estômago vai se acostumando aos poucos com maiores volumes de alimento;`);
    console.log(imc);

} else if (imc >= 17 && imc < 18.5) {
    console.log(`${nome} você está abaixo do peso!`);
    console.log(`Dica: Nunca pule refeições: faça ao menos 6 refeições fracionadas ao longo do dia;`);
    console.log(imc);

} else if (imc >= 18.5 && imc < 25) {
    console.log(`${nome} você está no peso normal!`);
    console.log(`Dica: Não se preocupe com dietas... Mas sempre é bom a prática de exercícios físicos!`);
    console.log(imc);

} else if (imc >= 25 && imc < 30) {
    console.log(`${nome} você está acima do peso!`);
    console.log(`Dica: Faça uma alimentação balanceada e saudável. Pratique exercícios físicos!`);
    console.log(imc);

} else if (imc >= 30 && imc < 35) {
    console.log(`${nome} você tem Obesidade I!`);
    console.log(`Dica: Faça uma alimentação balanceada e saudável. Pratique exercícios físicos!`);
    console.log(imc);

} else if (imc >= 35 && imc < 40) {
    console.log(`${nome} você tem Obesidade II (severa)!`);
    console.log(`Dica: Faça uma alimentação balanceada e saudável. Pratique exercícios físicos!`);
    console.log(imc);

} else {
    console.log(`${nome} você tem Obesidade III (mórbida)!`);
    console.log(`Dica: Faça uma alimentação balanceada e saudável. Pratique exercícios físicos!`);
    console.log(imc);
}

