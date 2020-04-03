//REST ...var é basicamente o restante de algo.

function apresentarParamentros(a, b, ...params){
	return params;
}

console.log(apresentarParamentros(1,2,3,4,5,6,7,8,9,10));

function soma(...params) {
	return params.reduce((total, next) => total + next);
}

console.log(soma(1,2));

//SPREAD utiliza o que e simplifica variaveis que já existem.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// // /// ////////////////

const usuario1 = {
	nome: "Jeremias",
	idade: 23,
	empresa: "Accentury"
};

const usuario2 = {...usuario1, nome: "Jere"}// o SPREAD pega tudo do objeto e sobre põe o que for passado

console.log(usuario2);