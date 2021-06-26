// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// Constant to conect with generateMarkdown
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "proname",
    type: "input",
    message: "Write the name of your project:",
  },
  {
    name: "usergit",
    type: "input",
    message: "Write your github username:",
  },
  {
    name: "email",
    type: "input",
    message: "Write your email:",
  },
  {
    name: "pdescription",
    type: "input",
    message: "Write a description of your project:",
  },
  {
    name: "installation",
    type: "input",
    message: "Explain the installation process:",
  },
  {
    name: "usage",
    type: "input",
    message: "Describe how to use you project:",
  },
  {
    name: "contribution",
    type: "input",
    message: "What are your guidelines for contribution?:",
  },
  {
    name: "tests",
    type: "input",
    message: "Intructions for running test:",
  },
  {
    name: "license",
    type: "list",
    message: "Choose a license for you project:",
    choices: [
      "MIT License",
      "Mozilla Prublic License",
      "GNU General Public v3.0",
    
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Readme file created")
  );
}

// TODO: Create a function to initialize app
function init() {
  console.log("Readme Generator (Easy and Fast)");
  console.log("============================");
  console.log("Just complete the required information and your Read me will be ready in a moment");

  inquirer.prompt(questions).then((answers) => {
    const content = generateMarkdown(answers);
    writeToFile("NewReadme.md", content);
  });
}

// Function call to initialize app
init();