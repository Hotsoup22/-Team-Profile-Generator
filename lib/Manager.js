const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor ({id, name, email, officeNumber}){
        super(id, name, email);
        this.officeNumber = officeNumber;
       
    } 
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
    teamMemberCard(){
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="role">${this.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office Number: ${this.officeNumber}</li>
            </ul>
         </div>`

    }
}
module.exports = Manager;