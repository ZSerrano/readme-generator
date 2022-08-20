// TODO: Include packages needed for this application
const {generateMarkdown} = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
 
inquirer
    .prompt([
    {
        name: 'title',
        message: 'Project Title?',
        type: 'input',
    },
    {
        name: 'description',
        message: 'Please describe your project:',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Please insert the installation process:',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Please describe the usage:',
        type: 'input'
    },
    {
        name: 'contributors',
        message: 'Please list all contributors:',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'Please list all tests:',
        type: 'input',
    },
    {
        name: 'license',
        message: 'What license are you using?',
        type: 'list',
        choices: ['MIT', 'None']
    }
        ])
    .then(function(answers) {
    const generator = generateMarkdown(answers);
    writeToFile('sample.md', generator);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Congrats on your new README!'))
}
