//The GenerateREADME class has static functions, with one being a function to generate a README file using answers received from the user. 
class GenerateREADME {
    static renderLicenseBadge(license) {
        const badges = {
            gnuplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://www.opensource.org/licenses/ISC)',
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://www.gnu.org/licenses/MIT)'
        }
        //This will return one badge via the object property based on the license that gets passed.
        return badges[license]
    }

    static renderLicenseLink(license) {
        const licenseLinks = {
            isc: '[ISC](https://choosealicense.com/licenses/isc/)',
            mit: '[MIT](https://choosealicense.com/licenses/mit/)',
            GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
        }
        return licenseLinks[license]
    }

    static renderLicenseSection(license) {
        if(license){
            return `Licensed under the ${this.renderLicenseLink(license)} license`
        } else {
            return ''
        }
    }

    static generateReadme(data) {
        return `

# ${data.title}

${this.renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#Tests)
- [Features](#Features)
- [Contribution](#Contribution)
- [Email](#Email)
- [License](#License)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Features
${data.features}

## Contribution
${data.contribution}

## Email
${data.email}

## Github
${data.github}

## License
${this.renderLicenseSection(data.license)}
        `
    }
}

module.exports = GenerateREADME