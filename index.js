const Shapes = require('./shapes');
const fs = require('fs');
const path = require('path');
const inqure = require('inquirer');
const { choices } = require('yargs');

const shape = new Shapes();

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to draw with?'
        choices: [
            'red', 
            'blue', 
            'green']
    },
    {
        type: 'input',
        name: 'logo',
        message: 'Instert a three letter logo'
    }
];