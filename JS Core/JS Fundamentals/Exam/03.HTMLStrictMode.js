function solve(arr) {
    let final = [];

    for (let row of arr) {
        let match = row.match(/^<(.*?[A-Za-z]+.*?>)(.*?)<\/\1$/);
        if (match != null) {
            let result = match[2];
            let isCorrect = true;
            while (result.match(/(<\/?.*?[A-Za-z]+.*?>)/g)) {
                if (!result.match(/(<(.*?[A-Za-z]+.*?>))(.*?)(<\/\2)/)) {
                    isCorrect = false;
                    break;
                } else {
                    let matches = result.match(/(<.*?[A-Za-z]+.*?>)/g);
                    if (matches.length % 2 === 0) {
                        for (let match of matches) {
                            if (match.includes('/') && row.includes(match.replace()))) {
                                isCorrect = false;
                                break;
                            }
                        }
                        result = result.replace(/<(.*?[A-Za-z]+.*?>)/g, '');
                    } else {
                        isCorrect = false;
                        break;
                    }
                }
            }
            if (isCorrect) {
                final.push(result);
            }
        }
    }
    console.log(final.join(' '));
}

solve(['<div><p>This</p><h1><h1> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']
);