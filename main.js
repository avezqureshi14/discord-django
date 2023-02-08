const fs = require('fs');

fs.readFile('numbers.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const numbers = data.split('\n').map(Number);
    const sortedNumbers = numbers.sort((a, b) => a - b);

    fs.writeFile('sortedNumbers.txt', sortedNumbers.join('\n'), (err) => {
        if (err) throw err;
        console.log('Numbers have been sorted and written to the file.');
    });
});
