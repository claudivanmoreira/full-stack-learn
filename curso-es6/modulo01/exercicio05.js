//REST
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => params.reduce((total, proximo) => total + proximo);
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


//SPREAD
const usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario2 = {
    ...usuario1,
    nome: "Gabriel"
}
const usuario3 = {
    ...usuario1,
    endereco: {
        cidade: 'Lontras'
    }
}
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);