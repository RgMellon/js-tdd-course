
const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const mult = (num1, num2) => num1 * num2;

const div = (num1, num2) => (num2 === 0 ? 'Não existe div por 0' : num1 / num2);

export { sum, mult, sub, div };
