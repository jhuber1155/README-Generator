// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
inquirer
    .prompt([
        {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        },
        {
        type: 'input',
        message: 'What is a description of your project?',
        name: 'description',    
        },
        {
        type: 'input',
        message: 'What was your motivation for this particular project?',
        name: 'motivation',
        },
        {
        type: 'input',
        message: 'Why did you decide to build this particular project? What problem will it solve?',
        name: 'problemSolved',
        },
        {
        type: 'input',
        message: 'What did you learn as you built this project?',
        name: 'lessonsLearned',
        },
        {
        type: 'input',
        message: 'How do you install this project for others to use it?',
        name: 'installation',
        },
        {
        type: 'input',
        message: 'How do you use this project? What downloads or modifications will the user need?',
        name: 'usage',
        },
        {
        type: 'checkbox',
        message: 'What License did you use?',
        choices: ['Apache License 2.0', 'MIT License', 'BSD 2-Clause "Simplified"', 'Boost Software License 1.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0'],
        name: 'license',
        },
    ])
    .then((data) =>{
        const readMeAnswers = generateMarkdown(data)
            fs.writeFile("README.md", readMeAnswers, (err) => err ? console.err(err) : console.log('README successfully written!'))
             
        })
];
console.log(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
