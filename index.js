const fs = require('fs');
const path = require('path');

const myFunc = require('./myFunc');

const funcArguments = [...process.argv];
funcArguments.splice(0, 2);

const funcParameters = {
    countRows: '',
    skipEmptyLines: ''
}

for (i = 0; i < funcArguments.length; i++) {
    switch (funcArguments[i]) {
        case '--count-rows': {
            if (fs.existsSync(funcArguments[i+1])) {
                funcParameters.countRows = funcArguments[i+1];
                if ((funcArguments[i+2]) === '--skip') {
                    funcParameters.skipEmptyLines = true;
                }
            } else {
                console.log('no such file or directory');
            }
        }
    }
}

myFunc.analizeTextFile(funcParameters);