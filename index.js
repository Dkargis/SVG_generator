const Shapes = require('./lib/shapes');
const fs = require('fs');
const path = require('path');
const inqure = require('inquirer');
const { type } = require('os');

const shape = new Shapes();

const questions = 
    .prompt([
    
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
        message: 'What color would you like to draw with?'
        validate: function (value) {
            // Check if the input is a valid color name or number
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
]);