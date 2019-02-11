function printAnArray(arr) {
    let delimeter = arr.slice(-1).pop();
    arr.pop();
    console.log(arr.join(delimeter));
}

//printAnArray(['One', 'Two', 'Three', 'Four', 'Five', '-'];)

function printElementFromArray(arr) {
    let step = +arr.pop();

    for (let i = 0; i < arr.length; i += step) {
        let element = arr[i];
        console.log(element);
    }
}

//printElementFromArray(['5', '20', '31', '4', '20', '2']);
//printElementFromArray(['dsa','asd', 'test', 'tset', '2']);
//printElementFromArray(['1', '2','3', '4', '5', '6']);

function addRemoveElements(arr) {
    let resultArr = [];

    for (let i in arr) {
        let index = +i + 1;
        if (arr[i].toLowerCase() === 'add') {
            resultArr.push(index);
        } else if (arr[i].toLowerCase() === 'remove' && resultArr.length > 0) {
            resultArr.pop(index);
        }
    }

    if (resultArr.length > 0) {
        console.log(resultArr.join('\n'));
    } else {
        console.log('Empty');
    }
}

//addRemoveElements(['add', 'add', 'add', 'add']);
//addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
//addRemoveElements(['remove', 'remove', 'remove']);

function rotateArray(arr) {
    let lastindex = arr.pop(-1);
    let step = lastindex % arr.length;

    for (let i = 0; i < +step; i++) {
        let reminder = arr.pop();
        arr.unshift(reminder);
    }

    console.log(arr.join(' '));
}

//rotateArray(['1', '2', '3', '4', '2']);
//rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

function extractSubsequence(arr) {
    let resultArr = [];
    let currentBiggest = arr[0];

    Array.from(arr).forEach(e => {
        if (e >= currentBiggest) {
            resultArr.push(e);
            currentBiggest = e;
        }
    });

    console.log(resultArr.join('\n'));
}

//extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//extractSubsequence([1, 2, 3, 4]);
//extractSubsequence([20, 3, 2, 15, 6, 1]);

function sortArrayBy2Criteria(arr) {
    arr.sort(function (a, b) {
        if (a.length === b.length) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
        }
        return a.length - b.length;
    });
    console.log(arr.join("\n"));
}

//sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
//sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
//sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);

function magicMatrices(matrix) {
    let sum = 0;
    matrix[0].forEach(x => sum += x);
    for (let row = 1; row < matrix.length; row++) {
        let rowSum = 0;
        matrix[row].forEach(x => rowSum += x);
        if (rowSum !== sum) return false;
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++)
            colSum += matrix[row][col];
        if (colSum !== sum) return false;
    }
    return true;
}

// magicMatrices([[4, 5, 6],
//                [6, 5, 4],
//                [5, 5, 5]]);

// magicMatrices([ [11, 32, 45],
//                [21, 0, 1],
//                [21, 1, 1]]);

// magicMatrices([ [1, 0, 0],
//                [0, 0, 1],
//                [0, 1, 0]]);

function spiralMatrix(row, col) {

}

//spiralMatrix(5, 5);
//spiralMatrix(3, 3);
