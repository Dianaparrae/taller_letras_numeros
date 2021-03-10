let letras = document.getElementById("letras");
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ10 = document.getElementById("btnJ10");
let letrasTemp = "";
let numeros = document.getElementById("numeros");


const logicaA1 = () => {
    letras.innerHTML = "A";
    letrasTemp = "A";
}

const logicaB2 = () => {
    if (letrasTemp === "A") {
        letras.innerHTML = letrasTemp + "B";
    } else {
        alert("Faltan letras");
}
}

const logicaC3 =() => {
    if (letrasTemp === "A") {
        letras.innerHTML = letrasTemp + "B" + "C";
    } else {
        alert("Faltan letras");
    }
} 

const logicaD4 =() => {
    if (letrasTemp === "A") {
        letras.innerHTML = letrasTemp + "B" + "C" + "D";
    } else {
        alert("Faltan letras");
    }
} 

const logicaE5 =() => {
    if (letrasTemp === "A") {
        letras.innerHTML = letrasTemp + "B" + "C" + "D" + "E";
    } else {
        alert("Faltan letras");
    }
}

const logicaF6 =() => {
    if (letrasTemp === "A") {
        letras.innerHTML = letrasTemp + "B" + "C" + "D" + "E" + "F";
    } else {
        alert("Faltan letras");
        }
    } 

const logicaG7 =() => {
        if (letrasTemp === "A") {
            letras.innerHTML = letrasTemp + "B" + "C" + "D" + "E" + "F" + "G";
        } else {
            alert("Faltan letras");
        }
    } 

const logicaH8 =() => {
        if (letrasTemp === "A") {
            letras.innerHTML = letrasTemp + "B" + "C" + "D" + "E" +"F" +"G" + "H";
        } else {
            alert("Faltan letras");
        }
    } 
    
const logicaI9 =() => {
        if (letrasTemp === "A") {
            letras.innerHTML = letrasTemp + "B" + "C" + "D" + "E" + "F" + "G" + "H" + "I";
        } else {
            alert("Faltan letras");
        }
    } 
    
const logicaJ10 =() => {
        if (letrasTemp === "A") {
            letras.innerHTML = letrasTemp + "B" + "C" + "D" + "E" + "F" + "G" + "H" + "I" + "J";
        } else {
            alert("Faltan letras");
        }
    } 

   
btnA1.onclick = function () {
    logicaA1();
}

btnB2.onclick = function () {
    logicaB2();
}

btnC3.onclick = function (){
    logicaC3();
}

btnD4.onclick = function (){
    logicaD4();
}

btnE5.onclick = function (){
    logicaE5();
}

btnF6.onclick = function (){
    logicaF6();
}

btnG7.onclick = function (){
    logicaG7();
}

btnH8.onclick = function (){
    logicaH8();
}

btnI9.onclick = function (){
    logicaI9();
}

btnJ10.onclick = function (){
    logicaJ10();
}
