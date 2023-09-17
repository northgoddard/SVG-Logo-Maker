const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
    inquirer.registerPrompt('max-input', MaxLengthInputPrompt);
const fs = require('fs');
const gen = require('./generate.js');

function init() {
    inquirer.prompt([
            {
                type: 'max-input',
                name: 'text',
                message: 'Enter Log text',
                maxLength: 3
            },
            {
                name: 'textColor',
                type: 'input',
                message: 'Enter text color',
            },
            {
                name: 'shape',
                type: 'checkbox',
                message: 'Pick a shape',
                choices: ['triangle', 'square', 'circle']
            },
            {
                name: 'color',
                type: 'input',
                message: 'Enter shape color',
            }
        ]).then((response) => {
            fs.writeFile('./example/logo.svg', gen(response), (err) => {
                if (err) throw err;
            })
        })
    }

init();