const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];

const render = require("./lib/htmlRenderer");

function managerQuestions() {

  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your manager's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your manager's id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your manager's email address?"
  },
  {
    type: "input",
    name: "office",
    message: "What is your manager's office number?"
  },
  {
    type: "list",
    name: "member",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add anymore team members."
    ]
  }
  ]).then(function(data) {
  const manager = new Manager(data.name, data.id, data.email, data.office);
  team.push(manager);
  addMember(data);    
  });
};

  function engineerQuestions() {
    inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your engineer's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your engineer's id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your engineer's email address?"
  },
  {
    type: "input",
    name: "username",
    message: "What is your engineer's GitHub username?"
  },
  {
    type: "list",
    name: "member",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add anymore team members."
    ]
  }
  ]).then(function(data) {
    const engineer = new Engineer(data.name, data.id, data.email, data.username);
    team.push(engineer);
    addMember(data);    
  });
};


function internQuestions() {
  inquirer.prompt ([
{
  type: "input",
  name: "name",
  message: "What is your intern's name?"
},
{
  type: "input",
  name: "id",
  message: "What is your intern's id?"
},
{
  type: "input",
  name: "email",
  message: "What is your intern's email address?"
},
{
  type: "input",
  name: "school",
  message: "What is your intern's school?"
},
{
  type: "list",
  name: "member",
  message: "Which type of team member would you like to add?",
  choices: [
    "Engineer",
    "Intern",
    "I don't want to add anymore team members."
  ]
}
]).then(function(data) {
  const intern = new Intern(data.name, data.id, data.email, data.school);
  team.push(intern);
  addMember(data);    
});
};
  
  function addMember(data) {
    if (data.member === "Engineer") {
      engineerQuestions();
    }
    else if (data.member === "Intern") {
      internQuestions();
    }
    else {
      fs.writeFile(outputPath, render(team), (err) => {
        if (err) {
          throw error;
        };
      })
    }
  }


managerQuestions();