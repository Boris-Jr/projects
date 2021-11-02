// letras y números
const numbers = document.getElementById("numbers");
const letters = document.getElementById("letters");

const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const cn = document.getElementById("cn");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");

// FUNCIONES PARA LETRAS
const fnA1 = () => {
    if (letters.innerHTML == "") {
        letters.innerHTML = "A";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "") {
            numbers.innerHTML = "1";
        } else {
            alert("Debe pulsar en orden");
        }
    }
}
const fnB2 = () => {
    if (letters.innerHTML == "A") {
        letters.innerHTML += "B";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "1") {
            numbers.innerHTML += "2";
        } else {
            alert("Debe pulsar en orden");

        }
    }
}
const fnC3 = () => {
    if (letters.innerHTML == "AB") {
        letters.innerHTML += "C";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "12") {
            numbers.innerHTML += "3";
        } else {
            alert("Debe pulsar en orden");

        }
    }
}
const fnD4 = () => {
    if (letters.innerHTML == "ABC") {
        letters.innerHTML += "D";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "123") {
            numbers.innerHTML += "4";
        } else {
            alert("Debe pulsar en orden");

        }
    }
}
const fnE5 = () => {
    if (letters.innerHTML == "ABCD") {
        letters.innerHTML += "E";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "1234") {
            numbers.innerHTML += "5";
        } else {
            alert("Debe pulsar en orden");

        }
    }
}
const fnF6 = () => {
    if (letters.innerHTML == "ABCDE") {
        letters.innerHTML += "F";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "12345") {
            numbers.innerHTML += "6";
        } else {
            alert("Debe pulsar en orden");

        }
    }
}
const fnG7 = () => {
    if (letters.innerHTML == "ABCDEF") {
        letters.innerHTML += "G";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "123456") {
            numbers.innerHTML += "7";
        } else {
            alert("Debe pulsar en orden");

        }
    }
}
const fnH8 = () => {
    if (letters.innerHTML == "ABCDEFG") {
        letters.innerHTML += "H";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "1234567") {
            numbers.innerHTML += "8";
        } else {
            alert("Debe pulsar en orden");

        }
    }
}
const fnI9 = () => {
    if (letters.innerHTML == "ABCDEFGH") {
        letters.innerHTML += "I";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "12345678") {
            numbers.innerHTML += "9";
        } else {
            alert("Debe pulsar en orden");

        }
    }
}
const fnJ0 = () => {
    if (letters.innerHTML == "ABCDEFGHI") {
        letters.innerHTML += "J";
    }else{
        if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "123456789") {
            numbers.innerHTML += "0";
        } else {
            alert("Debe pulsar en orden");

        }
    }
}
const fnCn = () =>{
    numbers.innerHTML ="";
}
const fnCl = () =>{
    letters.innerHTML ="";
}

a1.onclick = () =>{ fnA1() }
b2.onclick = () =>{ fnB2() }
c3.onclick = () =>{ fnC3() }
d4.onclick = () =>{ fnD4() }
e5.onclick = () =>{ fnE5() }
f6.onclick = () =>{ fnF6() }
g7.onclick = () =>{ fnG7() }
h8.onclick = () =>{ fnH8() }
i9.onclick = () =>{ fnI9() }
cn.onclick = () =>{ fnCn() }
j0.onclick = () =>{ fnJ0() }
cl.onclick = () =>{ fnCl() }