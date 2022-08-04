// 1. Написать функцию, которая будет возвращать сумму элементов массива.

const arr = [1, 2, -1, 3];

let sumArr = arr.reduce(function (sum, elem) {
    return sum + elem;
}, 0);

console.log(sumArr) // 5




// 2. Написать функцию, которая проверяет строку на палиндром.

const str1 = 'Иди'; // true
const str2 = 'А роза упала на лапу Азора'; // true
const str3 = 'Человек'; // false

let isPalindrom = (str) => {
    let arr = str.toLowerCase().split('');
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i])
            return false
        else return true
    }
};
console.log(isPalindrom(str1), isPalindrom(str2), isPalindrom(str3))




// 3. Реализовать наследование (Man унаследовать от Human). Двумя способами (es5 & es6).

const Man5 = {
    learn() {
        console.log("это метод learn из объекта Man5");
    },
};

const Human5 = function () {};

Human5.prototype.learn = Man5.learn;

new Human5().learn();


class Man6 {
    constructor(name) {
        this.name = name;
    };
    learn() {
        console.log("это метод learn из объекта Man6");
    };
};

class Human6 extends Man6 {
    constructor(name) {
        super(name);
    };
};

new Human6('Alex').learn();




// 4. Реализовать цепочку вызовов
// http://jsfiddle.net/qzg9vhsL/
// add - увеличивает на 1
// dec - уменьшает на 1

const obj = {
    a: 0,
    add() {
        this.a++;
        return this;
    },
    dec() {
        this.a--;
        return this;
    },
    showA() {
        console.log(this.a);
        return this;
    }
}

obj.add().add().dec().add().showA(); // 2



// 5. Реализовать каррирование. Кол-во скобок может быть произвольное
// http://jsfiddle.net/vnr0ec93/


function sum(value) {
    let res = value;

    const foo = (value2) => {
        res += value2;
        return foo;
    };

    foo.toString = () => res;

    return foo;
}

alert(sum(1)(2)(3)); // 6




/* 
// 6. Промисы. Описать, что происходит на каждой строчке. 
// http://jsfiddle.net/zm5festy/1/

function func1() {
    return Promise.resolve('1');
}

function func2() {
    return Promise.resolve('2');
}

function func3(res) {
    return console.log(res);
}

// 6.1:
func1()                  // вызвана func1, возвращает '1' при успешном выполнении промиса
    .then(function () {  // после выполнения предыдущей строки вызвана function, 
        return func2();  // которая возвращает func2 и вызывает её, которая в свою очередь при успешном выполнении возвращает '2'
    })
    .then(func3)         // после выполнения предыдущей строки вызвана func3, которая принимает параметром результат, равный 2, и выводит его в консоль.
// 6.2:
func1()                 // вызвана func1, возвращает '1' при успешном выполнении промиса
    .then(function () { // после выполнения предыдущей строки вызвана function,
        func2();        // которая вызывает func2, 
    })                  // но ничего не возвращает 
    .then(func3)        // после выполнения предыдущей строки вызвана func3, которая принимает параметром результат, который не найден и выводит в консоль undefined
// 6.3:
func1()                     // вызвана func1, возвращает '1' при успешном выполнении промиса
    .then(func2())          // после выполнения предыдущей строки игнорируется, т.к then может принимать только коллбэки - здесь же вызывается не функция func2, а выражение func2(), которое не является функцией и не м.б. вызвано в then
    .then(func3)            // после выполнения предыдущей строки вызвана func3, которая принимает параметром результат, равный 1, и выводит его в консоль.
// 6.4:
func1()                     // вызвана func1, возвращает '1' при успешном выполнении промиса
    .then(func2)            // после выполнения предыдущей строки вызвана func2, которая в свою очередь при успешном выполнении возвращает '2'
    .then(func3)            // после выполнения предыдущей строки вызвана func3, которая принимает параметром результат, равный 2, и выводит его в консоль. 
*/