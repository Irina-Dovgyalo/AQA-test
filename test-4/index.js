// Дана скобочная последовательность: [((())()(())]]
// - Можно ли считать эту последовательность правильной?
//   Ответ: Нет, она не правильная.
// - Если ответ на предыдущий вопрос “нет” - то что необходимо в ней изменить, чтоб она стала правильной?
//   Ответ: Вторая скобка справа должна быть ")", чтобы все парные скобки закрылись / схлопнулись.

let a = '[((())()(())]]';
let b = '[(())]';
let c = '[(()]';
let d = '[[()()]]';

function checkBalance(str) {
	let brackets = [['(', ')'], ['[', ']']];
    if (str.length % 2 !==0) return false;
        let arr = [];
        for (let i = 0; i < str.length; i++){
        for (let j = 0; j < brackets.length; j++){
            if(str[i] == brackets[j][1] && brackets[j][0] == arr[arr.length - 1]) arr.pop();
            else if(str[i] == brackets[j][0]) arr.push(str[i]);
        }
    } return arr.length == 0;
}

console.log(checkBalance(a));
console.log(checkBalance(b));
console.log(checkBalance(c));
console.log(checkBalance(d));