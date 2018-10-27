const nome = "Diego";
const idade = 23;
const usuario = {
  nome: nome,
  idade: idade,
  cidade: "Rio do Sul"
};

//Object Short Syntax
const shortUsuario = {
    nome,
    idade,
    cidade: "Rio do Sul"
};
console.log(usuario);
console.log(shortUsuario);