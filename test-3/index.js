// на входе есть числовой массив, необходимо вывести элементы массива кратные 3.

let a = [7, 8, 6, 9, 2, 3, 11, 15, 1, 30];

function checkArray(arr){
    let newArr = arr.filter((el, i) => el % 3 == 0);
    console.log(newArr);
} 

checkArray(a);
checkArray([3, 12, 1, 7, 24, 63]);