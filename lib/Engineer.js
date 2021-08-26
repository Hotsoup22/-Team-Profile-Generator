const Employee = require('./Employee');
class Engineer extends Employee {
    constructor (id, name, email, role, userName ){
        super(id, name, email, role);
        this.userName = userName;
       
    }
}
module.exports = Engineer;