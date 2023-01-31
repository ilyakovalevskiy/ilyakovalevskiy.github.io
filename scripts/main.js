

// + сложение (конкатенаиця) - используется для сложения двух чисел или склеивания двух строк вместе.
// 6 + 9; "Hello" + "World!";
// -, *, / вычитание, умножение, деление - они делают то, чего вы от них ожидаете в математике.
// 9 - 3; 8 * 2; 9 / 3;
// = присваивание значение переменной 
// var myVariable = 'Bob';
// === равенство (тождество) делает проверку, если увидит, что два значения равны друг другу, то возвращает результат true/false (boolean)
// var myVariable = 3;
// myVariable === 4;
// !, !== отрицание (неравенство) возвращает логически противоположное значение, которое ему предществует; превращает true в false, и т.д. Когда используется вместе с оператором равенства, оператор отрицания проверяет, являются ли два значения не равными
// var myVariable = 3;
// myVariable !== 3;

function myltiply(num1, num2) {
    var result = num1 * num2;
    return result
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img.webp') {
        myImage.setAttribute ('src', 'images/zement.jpg');
    } else {
        myImage.setAttribute ('src', 'images/img.webp');
    }
}

var myButton = document.querySelector('button');
var myHeadig = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeadig.textContent = 'Google is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeadig.textContent = 'Google is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}