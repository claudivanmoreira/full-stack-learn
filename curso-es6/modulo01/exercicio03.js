// Cenario 1
const arr = [1, 2, 3, 4, 5];
const map = arr.map(function(item) {
    return item + 10;
});

//Em Arrow Functions
const newMap = arr.map(item => item + 10);
console.log(map);
console.log(newMap);

// Cenario 2
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);

//Em Arrow Functions
const newMostraIdade = (usuario => usuario.idade);
console.log(newMostraIdade(usuario));

// Cenario 3
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//Em Arrow Functions
const newMostraUsuario = (nome = 'Diego', idade = 18) => ({ 
    nome, 
    idade 
});
console.log(newMostraUsuario(nome, idade));
console.log(newMostraUsuario(nome));

//Cenario 4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}

//Em Arrow Functions
const newPromise = new Promise((resolve, reject) => resolve());
console.log(promise);
console.log(newPromise);