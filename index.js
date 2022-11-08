const inquirer = require('inquirer')
const fs = require("fs");
const GenerateREADME = require('./utils/generateMarkdown')

//List of question objects to ask the user.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Features?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email for Questions?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices:['MIT', 'ISC', 'GNUPLv3'],
        //Need a filter function so that if the user selects a license, it will filter for that choice and return that value.
        filter(val) {
            return val.toLowerCase();
        }
    }
]

//runQuery function to prompt all of the questions to the user.
function runQuery() {
    return inquirer.prompt(questions)
    .then((data)=>{
        const mark = GenerateREADME.generateReadme(data)
        fs.writeFile('README.md', mark, function(err) {
            if(err) {
                console.log('File could not be saved!', err)
            } else {
                console.log('New README.md file was successfully generated!')
            }
        })
    })
    //Log any errors to the console.
    .catch((error) => {
        console.log(error)
    })
}

runQuery()

