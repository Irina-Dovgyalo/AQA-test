// Составить алгоритм: если введенное число больше 7, то вывести “Привет”.

function checkNumber(){
    let number = prompt('Введите число', '');
    console.log("Вы ввели число " + number);
    if(number > 7){
        alert('Привет');
        console.log('Привет');
    }
}

checkNumber();