function solve(arr, cmdStr) {
    let firstRow = arr[0];
    let cmdArg = cmdStr.split(' ');
    let header = cmdArg[1];
    let index = firstRow.indexOf(header);

    switch (cmdArg[0]) {
        case'hide':
            arr.forEach(row => row.splice(index, 1));
            arr.forEach(r => console.log(r.join(' | ')))
            break;
        case'sort':
            arr.shift();
            console.log(firstRow.join(' | '));
            if (arr.length > 0) {
                if (isNaN(arr[1][index])) {
                    arr = arr.sort((a, b) => a[index] > (b[index]));
                } else {
                    arr = arr.sort((a, b) => a[index] - b[index]);
                }

                for (let row of arr) {
                    console.log(row.join(' | '));
                }
            }
            break;
        case 'filter':
            let value = cmdArg[2];
            arr.shift();
            console.log(firstRow.join(' | '));
            for (let row of arr) {
                if (row[index] === value)) {
                    console.log(row.join(' | '));
                    break;
                }
            }
            break;
    }
}


solve([['firstName', 'age', 'grade', 'course'],
        ['Peter', '25', '5.00', 'JS-Core'],
        ['George', '34', '6.00', 'Tech'],
        ['Marry', '28', '5.49', 'Ruby']],
    'filter firstName Marry'
);