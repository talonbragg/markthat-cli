#!/usr/bin/env node

'use strict';

var program = require('commander');
var pkg = require('../package.json');
var markthat = require('markthat');
var palette = require('messagepalette')
const fs = require('fs');

program
    .version('0.1.0')
    .option('-m, --markthatfile args <file to parse> <new file name>', 'Parses markdown file to html')
    .parse(process.argv);

    if (program.markthatfile) {
        markthat.markthatFile(program.args[1]).then(thefile => {
            fs.openSync(program.args[0], 'w');
            fs.writeFile(program.args[0], thefile, (err) => {
            
                console.log(palette('green',"The file was succesfully saved!"));
            }); 
        })
    }
