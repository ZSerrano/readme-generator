// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License Documentation](https://en.wikipedia.org/wiki/MIT_License)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'The license being used is the MIT license. You can find more information by clicking the link below.'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributors](#contributors)
  5. [Tests](#tests)
  6. [License](#license) 

  ## Description <a name="description"></a>
  ${data.description}

  ## Installation <a name="installation"></a>
  ${data.installation}

  ## Usage <a name="usage"></a>
  ${data.usage}

  ## Contributors <a name="contributors"></a>
  ${data.contributors}

  ## Tests <a name="tests"></a> 
  ${data.tests}

  ## License <a name="license"></a>
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = {
  generateMarkdown
};