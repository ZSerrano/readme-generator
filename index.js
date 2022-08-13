// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = 
inquirer
    .prompt([
    {
        name: 'title',
        message: 'Project Title?',
        type: 'input',
    },
    {
        name: 'description',
        message: 'Please describe your project',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Please insert the installation process',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Please describe the usage',
        type: 'input'
    },
    {
        name: 'contributors',
        message: 'Please list all contributors',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'Please list all tests',
        type: 'input'
    }
        ])
    .then(function(answer) {
    console.log(answer);
    });

const generator = generateMarkdown(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Congrats on your new README!'))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('sample.md', generator)
}

// Function call to initialize app
init();
