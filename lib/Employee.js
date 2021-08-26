class Employee {
    constructor({ id, name, email, role}) {
        this.id = id
        this.name = name
        this.email = email
        this.role = role
        //this.4thQ = theQ
    }
    getName(){
       return console.log(this.name);
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return  this.email
    }
    getRole(){
        return  `Role: Employee:`;
    }
}
module.exports = Employee;

