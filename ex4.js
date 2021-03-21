const num = prompt('Digite um número: ');

let palavras = [];

for (let i = 0; i < num; i++) {
    palavras[i] = prompt(`Digite a ${i+1}° palavra: `);
}

for (let i = num - 1; i >= 0; i--) {
    const palavra = palavras[i]
    console.log(`Palavra ${i+1} : ${palavra}`);
}