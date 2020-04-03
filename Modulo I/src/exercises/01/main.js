class User{
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}

	isAdmin(){
		return false;
	}
}

class Admin extends User{
	constructor(email, password) {
	  super(email, password);
	}

	isAdmin(){
		return true;
	}
}

const user1 = new User("jeremiasprogrammer@gmail.com", "1234567");
const admin1 = new Admin("sorafinalform8@gmail.com", "1234567");

console.log(user1.email, user1.password);
console.log(admin1.email, admin1.password);

console.log(user1.isAdmin());
console.log(admin1.isAdmin());