const fs = require('fs');
const path = require('path');

const analizeTextFile = (args) => {


    const readFilesFromDirectory = (directory, skipEmptyLines) => {
        fs.readdir(args.countRows, (err, files) => {
            if (err) {
                console.error(err)
            } else {
                console.log(`Files in directory: ${args.countRows}:`)
                files.forEach((file, index) => {
                    countRowsInFile(directory, file, skipEmptyLines);
                })
            }
        })
    }

    const countRowsInFile = (directory, file, skipEmptyLines) => {
        fs.readFile(path.join(directory, file), (err, data) => {
            if (err) {
                console.error(err);
            } else {
                let numberOfRows = 1;
                data = data.toString();
                for (i = 0; i < data.length; i++) {
                    if (skipEmptyLines ? ((data[i] === '\n') && (data[i + 2] !== '\n')) : (data[i] === '\n')) {
                        numberOfRows++;
                    }
                }
                console.log(`File ${file} has ${numberOfRows} rows.`);
            }
        });
    }

    if (args.countRows != '') {
        console.log(path.extname(args.countRows, args.skipEmptyLines));
        if (path.extname(args.countRows) === '') {
            readFilesFromDirectory(args.countRows, args.skipEmptyLines);

        } else {
            countRowsInFile(args.countRows, "", args.skipEmptyLines);
        }
    }

}

module.exports = analizeTextFile;