function solution(topping) {
    const firstStack = {};
    const secondStack = topping.reduce((acc, curr) => {
        if (acc[curr] === undefined) acc[curr] = 1;
        else acc[curr] += 1;
        return acc;
    }, {});

    let idx = 0;
    let result = 0;

    let firstStackLen = Object.keys(firstStack).length;
    let secondStackLen = Object.keys(secondStack).length;

    while (firstStackLen - secondStackLen !== 0 && idx <= topping.length - 1) {
        if (firstStack[topping[idx]] === undefined) {
            firstStack[topping[idx]] = 1;
            firstStackLen += 1;
        }
        secondStack[topping[idx]] -= 1;
        if (secondStack[topping[idx]] === 0) secondStackLen -= 1;
        idx += 1;
    }
    while (firstStackLen - secondStackLen === 0 && idx <= topping.length - 1) {
        if (firstStack[topping[idx]] === undefined) {
            firstStack[topping[idx]] = 1;
            firstStackLen += 1;
        }
        secondStack[topping[idx]] -= 1;
        if (secondStack[topping[idx]] === 0) secondStackLen -= 1;
        idx += 1;
        result += 1;
    }
    return result;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 2, 3, 1, 4]));
