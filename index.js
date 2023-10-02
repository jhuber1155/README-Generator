// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
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
        type: 'input',
        message: 'Who would you like to thank for their help with the project or who needs due credit in helping you create this project?',
        name: 'credits',
        },
        {
        type: 'input',
        message: 'Are there any extra features you would like to highlight with this project?',
        name: 'features',
        },
        {
        type: 'input',
        message: 'How can others who view this contribute to this project?',
        name: 'contribution',
        },
        {
        type: 'input',
        message: 'How can people test this project?',
        name: 'projectTesting',
        },
        {
        type: 'list',
        message: 'What License did you use?',
        choices: ['Apache License 2.0', 'MIT License', 'BSD 2-Clause "Simplified"', 'Boost Software License 1.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0'],
        name: 'license',
        },
        {
        type: 'input',
        message: 'What is your GitHub Profile for future questions?',
        name: 'github',
        },
        {
        type: 'input',
        message: 'What is your email for future questions?',
        name: 'emailName',
        },
    ])
    .then((data) =>{
        const readMeAnswers = generateMarkdown(data)
        const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
            fs.writeFile(fileName, readMeAnswers, (err) => err ? console.err(err) : console.log('README successfully written!'))
        })
];

function init() {}


init();
