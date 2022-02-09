const calculator = (a, b, operation) => {
    let ans;
    switch (operation) {
        case '+':
            ans = a + b;
            break;
        case '-':
            ans = a - b;
            break;
        case '*':
            ans = a * b;
            break;
        case '/':
            ans = a / b;
            break;
        case '%':
            ans = a % b;
            break;
        case '**':
            ans = a ** b;
            break;
        default:
            ans = "Oop's you have entered wrong operator!!";

    }
    return ans;
}

console.log(calculator(2, 3, '**'));
console.log(10 === +'10');