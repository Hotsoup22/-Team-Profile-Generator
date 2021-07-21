// const FileIO = require("./fileIO");

// const fileIO = new FileIO();



// // TODO: Include packages needed for this application


const inquirer = require("inquirer");
const employee = [""] ;
// TODO: Create an array of questions for user input
const managerQuestions = [
  {
    type: "input",
    message: "What is the name of the team's Manager?",
    name: "name",
  },
  {
    type:"input",
    message: "what is the team manager's id?",
     name: "id"
  },
  {
    type:"input",
    message:"What is the team Manager's Email Adress?",
    name:"email",
  },
  {
    type:"input",
    message:"What is the team Manager's office Number?",
    name: "office number"
  },
];
  const addMemberQ = [
  {
    type: "list",
    name: "addMember",
    message: "Which type of team member would you like to add?",
    choices:["Engineer", "Intern", "employee", "no more new peeps"],
  },
];
const engineerQuestions = [
  {
    type:"input",
    message: "What is the team's new Engineer's name? ",
    name:"name",
  },
  {
    type:"input",
    message:"What is the team Engineer's Id?",
    name:"id",
  },
  {
    type:"input",
    message:"What is the team Engineer's Email Address?",
    name:"email"
  },
  {
    type:"input",
    message:"What is your Engineer's Github username?",
    name:"username"
  }
]
  const internQuestions = [
    {
      type: "input",
      message:"What is the team's new Intern's name?",
      name: "name",
    },
    {
      type:"input",
      message:"What is your Intern's id?",
      name: "id",
    },
    {
      type:"input",
      message:"what is your Intern's Email Adress?",
      name: "email",
    },
      {
        type:'input',
        message:"What is your intern's school?",
        name:"school",
      },

   ];
     //     function writeToFile(userData) {

  //       const fs = require("fs");
  //       fs.writeFile("output.md", generateMarkdown(userData), (err) =>
  //         err ? console.error(err) : console.log("Success!")
  //       );
  //     }

    const promptAddMember = () =>{
     inquirer.prompt(addMemberQ)
    .then((addMemberAnswer) => {
     //THEN to use their answers to decide what to do next.
     addMemberAnswer = addMemberAnswer.addMember
    //  writeToFile(addMemberAnswer);
     if(addMemberAnswer === ("Engineer")){
      return promptEngineerQuestions();
     }else if(addMemberAnswer === "Intern"){
      return askForInternInfo();
     } else console.log("promt add member, else."+ addMemberAnswer+ addMemberQ.name)
      
    })
  }
  //     const promptEngineerQuestions = () => { 
  //     return inquirer.prompt(engineerQuestions) = () => inquirer
  //     .then((engineerAnswers) => {
  //     const Engineer = new Engineer(engineerAnswers);
  //     employee.push(Engineer);
  //     return promptAddMember();
  //   })
  // }
   const promptEngineerQuestions = () =>{
     inquirer.prompt(engineerQuestions)
   .then((engineerAnswers) => {
     engineerAnswers = engineerQuestions.name;
    //THEN to use their answers to decide what to do next.

   if (engineerAnswers === /^[^a-z][0-9]+$/){
    const Engineer = new Engineer(engineerAnswers)
    employee.push(Engineer);
   return promptAddMember();
} else {
  return promptAddMember();
}
   //  writeToFile(addMemberAnswer);
   // if(addMemberAnswer === "Engineer"){
   //  return
    //}else if(addMemberAnswer === "Intern"){
     //return askForInternInfo();
    //} else console.log("it broke here00")
     
   })
 }

        //const askForInternInfo = () => {
        const askForInternInfo = () => inquirer
          .prompt(internQuestions)
          .then((internsAnswer) => {
            internsAnswer = internQuestions.name;
   
          if (internsAnswer === /^[^a-z][0-9]+$/){
            //THEN we need to create a new Intern object with data
            const Intern = new Intern(internsAnswer)
            // push the new intern to the list of employees
             employee.push(Intern);
             
           return promptAddMember();
        } else {
          return promptAddMember();
        }
      })
        //const askForInternInfo = () => {
        // const askForInternInfo = () => inquirer
        //   .prompt(internQuestions)
        //   .then((internsAnswer) => {
        //  //THEN to use their answers to decide what to do next.
        // })
     


      
//   `inquirer.prompt()` the user for manager information using our `managerQuestions`
     
        inquirer.prompt(managerQuestions)
          .then((managerAnswers) => {
           managerAnswers = managerQuestions.name;
            //then we need to creat a new manager object with th  at data
             
             if (managerAnswers === /^[^a-z][0-9]+$/){
              const Manager = new Manager(managerAnswers);
             employee.push(Manager);
             return promptAddMember();
          }else
              // AND  THEN new to ask the users what they want to do next. (`inquierer.prompt()` with whatsNextQuestions)
                return   promptAddMember();
          })
          .then(() =>{
            // User employee objects to create html page and write it to a file
          })
          .catch((error) => {
            if (error.isTtyError) {
            console.log("manger questions prompt01"+error+"coulndt work bob"+ error.isTtyError)
            } else {
              console.log("manger questions prompt01"+error+' Something else went wrong. '+error.isTtyError);
            }
          });


          













// // TODO: Create a function to write README file
// function writeToFile(userData) {

//   const fs = require("fs");
//   fs.writeFile("output.md", generateMarkdown(userData), (err) =>
//     err ? console.error(err) : console.log("Success!")
//   );
// }

// // // TODO: Create a function to initialize app
// function init() {
//   inquirer
//     .prompt(questions)

//     .then((userData) => {
//       writeToFile(userData);
//       userData = questions.name;
    
//     });

// }

// // // // Function call to initialize app
// init();

