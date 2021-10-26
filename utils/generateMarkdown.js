// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'None') {
    return '';
  } else if (license === 'Apache 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  } else if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]"
  } else if (license === 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
  } else if (license === 'GNU GPL v2') {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]"
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === "None"){
    return '';
  } else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]"
  } else if (license === "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)"
  } else if (license === "GNU GPL v2") {
    return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return license;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Badge:
  ${renderLicenseBadge(data.license[0])}

  ### Table of Contents:

   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contribution](#contribution)
   - [Test](#test)
   - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  Follow the steps below:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${renderLicenseLink(data.license[0])}
  ${renderLicenseSection(data.license[0])}

  ## Contribution:
  ${data.contribution}

  ## Test:
  ${data.test}

  ### Questions:
  If you have any questions, reach out to me at:
    - Github: [${data.github}] (https://github.com/${data.github})
    - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
