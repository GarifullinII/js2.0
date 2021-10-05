
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */

function t1(event) {
    document.querySelector('.out-1').textContent += event.key;

    console.log(event);
}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */

function t2(event) {
    document.querySelector('.out-2').textContent += event.keyCode;

    console.log(event);
}

document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */

function t3(event) {
    let out3 = document.querySelector('.out-3');

    if (event.keyCode >= 48 && event.keyCode <=57) {
        out3.innerHTML = 'false';
    } else {
        out3.innerHTML ='true';
    }
}

document.querySelector('.i-3').onkeypress = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */

let val4 = '';

function t4(event) {
    let out4 = document.querySelector('.out-4');

    if (event.key === event.key.toLowerCase()) {
        val4 += event.key;
    }

    out4.innerHTML = val4;

    console.log(event.keyCode);
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

let val5 = '';

function t5(event) {
    let out5 = document.querySelector('.out-5');

    if (event.key.toLowerCase()) {
        val5 += event.key.toUpperCase();
    }

    out5.innerHTML = val5;

    console.log(event);
}

document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */

let val6 = '';

function t6(event) {
    if (event.key === event.key.toLowerCase()) {
        val6 += event.key;
    }

    document.querySelector('.i-6').value = val6;

    return false;
}

document.querySelector('.i-6').onkeypress= t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = ['a', 'z', 'x', 'w', 'y', 't'];

function t7(event) {
    let out7 = document.querySelector('.out-7');

    let val = a7[Math.floor(Math.random()*a7.length)];

    if (event.key) {
        out7.innerHTML += val;
    }
}

document.querySelector('.i-7').onkeydown= t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

const a8 = {
    i : 1,
    o : 0,
    l : 7
}

let out = '';

function t8(event) {
    // 1. Получаем из event введенный символ
    let val = event.key;

    // 2. Проверяем наличие такого ключа в a8 - уже делали это раньше!!!!
    // 3. Если есть дописываем в out-8 символ из массива a8. Если нет - введенный символ.
    if(a8[val] !== undefined) {
        out += a8[val];
    } else {
        out += event.key
    }

    document.querySelector('.out-8').innerHTML = out;
}

document.querySelector('.i-8').onkeydown= t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */

function t9(event) {
    console.log(event);
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;

function t10(event) {
    // увеличиваем  h, w, потом присваиваем как свойства...

}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/

function t11(event) {
    console.log(event.key);

}

document.querySelector('.i-11').onkeydown = t11;

