const a = 1; //constante não pode ser alterada em tempo de execução.

// a = 3;

const usuario = {nome: "Jeremias"};

usuario.nome = "Oliveira";

//a variavel é mutável!, se for um objeto ela o valor pode ser editado mas a variavel const nunca poderá
//receber um novo objeto.

console.log(usuario);

//============================

function testandoLet(x){
	let y = 2;

	if(x > 5){
		console.log(x,y);
	}
}

console.log(teste(10));