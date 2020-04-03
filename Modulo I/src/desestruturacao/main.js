const usuario = {
	nome: "Jeremias",
	idade: 23,
	endereco: {
		cidade: "Recife",
		estado: "PE"
	}
};

//sem desestruturação ->
console.log("Nome: "+usuario.nome);
console.log("Endereço: "+usuario.endereco.cidade);

//com desestruturação ->
const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

//também pode ser aplicada aos aramentros das funções
function show({nome, idade}){
	console.log(nome, idade);
}

show(usuario);