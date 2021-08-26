// const Employee = require("./Employee");

// class Manager  extends Employee{
//     constructor ({officeNumber}){
//         super(); 
//         this.officeNumber = officeNumber
//     }
// }

const Employee = require("./Employee");

class Manager extends Employee {
    constructor (id, name, email, role, officeNum ){
        super(id, name, email);
        this.officeNum = officeNum;
        role = "Manager";
    } 
    
   getOfficeNum(){
       this.officeNum;
   }
   getRole(){
      role = "Manager"; 
   }
}
module.exports = Manager;