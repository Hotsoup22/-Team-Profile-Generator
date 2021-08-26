const Employee = require("./lib/Employee");
 const Manager = require("./lib/Manager");
 const Engineer = require("./lib/Engineer");
 const Intern = require("./lib/Intern");
  let teamMembers = [];
 
 const generateHtml = require('./src/indexTemplate');

// const fileIO = new FileIO();

// // TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const managerQuestions = [
  {
    type: "input",
    message: "What is the name of the team's Manager?",
    name: "name",
  },
  {
    type: "input",
    message: "what is the team manager's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team Manager's Email Adress?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team Manager's office Number?",
    name: "officeNum",
  },
];
const addMemberQ = [
  {
    type: "list",
    name: "addMember",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "no more new peeps", "Manager"],
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is the team's new Engineer's name? ",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team Engineer's Id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team Engineer's Email Address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Engineer's Github username?",
    name: "userName",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is the team's new Intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your Intern's id?",
    name: "id",
  },
  {
    type: "input",
    message: "what is your Intern's Email Adress?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your intern's school?",
    name: "school",
  },
];


const promptMenu = () => {
  writeToFile();
  inquirer.prompt(addMemberQ).then((addMemberAnswer) => {
    //THEN to use their answers to decide what to do next.
    addMemberAnswer = addMemberAnswer.addMember;
    //  writeToFile(addMemberAnswer);
    if (addMemberAnswer === "Engineer") {
      //add Engineer to html card. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      return promptEngineerQuestions();
    } else if (addMemberAnswer === "Intern") {
      return askForInternInfo();
    } else if(addMemberAnswer === "Manager"){
      return managerQuestions();
    }else if (addMemberAnswer === "no more new peeps"){
      return 
    }else
      console.log(
        "promt add member, else." + addMemberAnswer + addMemberQ.addMember
      );
  });
};

const promptEngineerQuestions = () => {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
 
    console.log(engineerAnswers)

    teamMembers.push(new Engineer(engineerAnswers));
      promptMenu();

  });
};


const askForInternInfo = () =>
  inquirer.prompt(internQuestions).then((internsAnswer) => {
  console.log(internsAnswer)

    teamMembers.push(new Intern(internsAnswer));
    
    return promptMenu();
  })

  
  function writeToFile() {

    const fs = require("fs");
    fs.writeFile('./src/indexTemplate.Html', generateHtml(teamMembers), (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  }

  const promptManagerQuestions = () =>
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
   
    // const name = managerAnswers.name;
    // const id = managerAnswers.id;
    // const email = managerAnswers.email;
    // const officeNum = managerAnswers.officeNum;
    console.log(managerAnswers);
    // console.log("id " ,id);
    // console.log("email " , email);
    // console.log("officeNum ", officeNum);
    // managerAnswers = [
    //   name = managerAnswers.name,
    //   id = managerAnswers.id,
    //   email = managerAnswers.email,
    //   officeNum = managerAnswers.officeNum
    // ],
    
   
   teamMembers.push(new Manager(managerAnswers));


   
    
    promptMenu();
    // AND  THEN new to ask the users what they want to do next. (`inquierer.prompt()` with whatsNextQuestions)
  })

const init = () =>{

promptManagerQuestions();
}
    
init();
