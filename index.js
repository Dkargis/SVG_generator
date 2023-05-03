const Shapes = require('./lib/shapes');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Logo = require('./lib/shapes');


const questions = [
    
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: [
            'Triangle', 
            'Square', 
            'Circle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to draw with?',
        validate: function (value) {
            if (/^[a-zA-Z]+$/.test(value) || /^\d+$/.test(value)) {
              return true;
            }
            return 'Please enter a valid color name or number';
            
            }
    },
    {
        type: 'input',
        name: 'logo',
        message: 'Instert a three letter logo'
    }
]

function generateLogo(){
    inquirer.prompt(questions).then (answers => {
    const shape = new Logo (answers.shape, answers.color, answers.logo)
    const svgFilePath ='./Examples/Example.svg';
    // const svg = shape.render(answers.shape, answers.color, answers.logo);
    // console.log(svg);
    console.log(answers.shape);
    fs.writeFileSync(svgFilePath, shape.render());
    console.log('SVG file created!');
})
.catch(error => {
    console.log(error);
}
);
}

generateLogo();
