// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

const Markdown = require('./utils/generateMarkdown')



// TODO: Create an array of questions for user input

const questions = [
    {
        name:'title',
        type:'input',
        message: 'What is the title of your project'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter project description'
    },
    {
        name: 'installation',
        type: 'input' ,
        message:'Installation instructions?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'enter usage info'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Enter contributions'
    },
    {
        name: 'test',
        type: 'input',
        message: 'enter test instructions'
    }
]

const content = []




// TODO: Create a function to write README file
const README = (answers) => 
    `# ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## Contributions 
    ${answers.contribution}
    
    ## Test Instructions
    ${answers.test}`

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
.then((answers) => {
    content.push(answers)

    const readmecontent = README(content[0])
    
    fs.writeFile('ReadMe.md',readmecontent, (err) => 
        err ? console.log(err) : console.log('success')
    )
    // console.log(content)
})

}

// Function call to initialize app
init();

