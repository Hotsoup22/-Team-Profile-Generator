const Employee = require('./Employee');
class Engineer extends Employee {
    constructor ({id, name, email, userName} ){
        super(id, name, email, );
        this.userName = userName;
       
    }
    getRole() {
        return 'Engineer'
    }
    teamMemberCard(){
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h6 class="role">${this.getRole()}</h6>
          <ul class="list-group">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${this.userName}">${this.userName}</a></li>
      </ul>         
        </div>
      </div>`

    }
}
module.exports = Engineer;