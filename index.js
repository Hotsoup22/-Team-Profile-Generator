const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require('./src/generateHtml');
const inquirer = require("inquirer");

let teamMembers = [];

// TODO: Create an array of questions for user input
const managerQuestions = [
  {
    type: "input",
    message: "what is the team manager's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the name of the team's Manager?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team Manager's Email Adress?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team Manager's office Number?",
    name: "officeNumber",
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

  inquirer.prompt(addMemberQ).then((addMemberAnswer) => {
    // writeToFile(teamMembers);
    //THEN to use their answers to decide what to do next.
    addMemberAnswer = addMemberAnswer.addMember;

    if (addMemberAnswer === "Engineer") {
      return promptEngineerQuestions();
    } else if (addMemberAnswer === "Intern") {
      return askForInternInfo();
    } else if(addMemberAnswer === "Manager"){
      return promptManagerQuestions();
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
      createhtmlCards();
     
      promptMenu();

  });
};

const askForInternInfo = () =>
  inquirer.prompt(internQuestions).then((internsAnswer) => {
  console.log(internsAnswer)
    teamMembers.push(new Intern(internsAnswer));
    createhtmlCards();
    promptMenu();
})

function promptManagerQuestions(){
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    console.log(managerAnswers);
    console.log("before push in manager function")
    teamMembers.push( new Manager(managerAnswers));
    console.log("after push in manager function")
    createhtmlCards();
    return promptMenu();
  })
.catch((error) =>{
})
}

function createhtmlCards(){
teamCards =''
teamMembers.forEach(member => {
  teamCards += member.teamMemberCard()
  writeToFile(teamCards)
});
}

function writeToFile(teamMemberCard) {
  const fs = require("fs");
  fs.writeFile('./dist/index.Html', generateHtml(teamMemberCard), (err) =>{
    console.log(teamMemberCard)
    err ? console.error(err) : console.log("Success!")
  });
}

 
  const init = () =>{promptManagerQuestions();}


init();
