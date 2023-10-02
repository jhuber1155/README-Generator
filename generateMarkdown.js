
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  [![License](https://img.shields.io/badge/${data.license}-blue.svg)]

  ## Description 
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributions](#contribution)
  [Testing](#projectTesting)
  [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits
  I would like to thank the following for all of their help!
  ${data.credits}

  ## License
  This repository is using: ${data.license}
  
  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.projectTesting}

  ## Questions
  My Github profile is: ${data.github}
  I can be reached at: ${data.emailName} if you have any questions!

`;
}

module.exports = generateMarkdown;
