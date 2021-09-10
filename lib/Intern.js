const Employee = require('./Employee');

class Intern extends Employee {
    constructor ({id, name, email,  school}){
        super(id, name, email, );
        this.school = school;
       
    }
    getRole() {
        return 'Intern'
    }
    teamMemberCard(){
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="role">${this.getRole()}</h6>
        <ul class="list-group">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item">School: ${this.school}</li>
    </ul> 
        </div>
      </div>`

    }
}
module.exports = Intern;