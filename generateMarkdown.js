// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges

  ## Description 
  ${data.description}

  ## Table of Contents
  href = data.installation
  href = data.usage
  href = data.license
  href = data.contribution
  href = data.projectTesting
  href = data.questions

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits
  I would like to thank the following for all of their help!
  ${data.credits}

  ## License
  ${data.license}

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


const apacheLicense = {
  name: 'Apache License 2.0',
  link: 'https://www.apache.org/licenses/LICENSE-2.0',
};

const mitLicense = {
  name: 'MIT License',
  link: 'https://www.mit.edu/~amini/LICENSE.md'
}

const bsdSimplified = {
  name: 'BSD 2-Clause "Simplified"',
  link: 'https://opensource.org/license/bsd-2-clause/'
}

const boostSoftwareLicense = {
  name: 'Boost Software License 1.0',
  link: 'https://www.boost.org/LICENSE_1_0.txt'
}

const gnuGeneralPublicLicense = {
  name: 'GNU General Public License v2.0',
  link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html'
}

const mozillaPublicLicense = {
  name: 'Mozilla Public License 2.0',
  link: 'https://www.mozilla.org/en-US/MPL/2.0/'
}


const { name, link } = apacheLicense;

const badgeInfo = ({ name, link}) => (`${name} is being used and it can be found at: ${link}`)
badgeInfo(apacheLicense)