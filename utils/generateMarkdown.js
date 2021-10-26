// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'Apache 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (!license){
    return '';
  } else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 'MIT') {
    return 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
  }
}

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

    - Github: [${data.github}] (https://github.com/${data.github})
    - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
