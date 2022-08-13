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
    \n
    ## Table of Contents
    \n 1. [Description](#description)
    \n 2. [Installation](#installation)
    \n 3. [Usage](#usage)
    \n 4. [Contributors](#contributors)
    \n 5. [Tests](#tests) 
    ## Description <a href="description"></a>
    \n 
    ${data.description}
    \n
    ## Installation <a href="installation"></a>
    \n 
    ${data.installation}
    \n
    ## Usage <a href="usage"></a>
    \n 
    ${data.usage}
    \n
    ## Contributors <a href="contributors"></a>
    \n 
    ${data.contributors}
    \n
    ## Tests <a href="tests"></a>
    \n 
    ${data.tests}
    \n
`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
module.exports = renderLicenseLink;
module.exports = renderLicenseSection;