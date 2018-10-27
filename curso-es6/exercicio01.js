class Usuario {

    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
    
}

class Admin extends Usuario {

    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }

    isAdmin() {
        return this.admin;
    }
}

const user = new Usuario('email@teste.com', 'senha123');
const admin = new Admin('email@teste.com', 'senha123');
console.log(user.isAdmin()) // false
console.log(admin.isAdmin()) // true