
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

  ## Badges
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ![Static Badge](https://img.shields.io/badge/${data.license}-blue)


  ## Description 
  ${data.description}

  ## Table of Contents

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributions](#contributions)

  [Tests](#tests)

  [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits
  I would like to thank the following for all of their help!
  ${data.credits}

  ## License
  This repository is using the following License: ${data.license}
  
  ## Features
  ${data.features}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  My Github profile is: www.github.com/${data.github}
  I can be reached at: ${data.emailName} if you have any questions!

`;
}

module.exports = generateMarkdown;
