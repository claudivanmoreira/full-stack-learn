const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {
    nome, 
    endereco: {
        cidade, estado
    }
} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

const newMostraInfo = ({nome, idade}) => `${nome} tem ${idade} anos.`;
console.log(newMostraInfo({ nome: 'Diego', idade: 23 }));