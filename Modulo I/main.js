class List {
	constructor() {
		this.data = [];
	}

	add(data){
		this.data.push(data);
		console.log(this.data);
	}
}

class TodoList extends List{
	constructor() {
	  super();

	  	
	}
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = () => {
	MinhaLista.add("Novo todo");
}