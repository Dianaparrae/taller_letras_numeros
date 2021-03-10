// Variables DIV
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
// Variables botones
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");
// Variables temporales
let letrasTemp = "";
let numerosTemp = "";

// Logica


const logicaA1 = () => {

    if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "") {
        numeros.innerHTML = "1";
        numerosTemp = "1";
      } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") {
          alert("Ya está!!");
        }else{
            if (letrasTemp === "A" || letrasTemp !== "") {
                alert("Ya está!!");
              } else {
                if (letrasTemp === "") {
                  letras.innerHTML = "A";
                  letrasTemp = "A";
                } 
              }
        }
      }
  };


const logicaB2 = () => {
  if (letrasTemp === "A") {
    letras.innerHTML = letrasTemp + "B";
    letrasTemp = "AB";
  } else {
    alert("Faltan letras");
  }
};

const logicaC3 = () => {
  if (letrasTemp === "AB") {
    letras.innerHTML = letrasTemp + "C";
    letrasTemp = "ABC";
  } else {
    alert("Faltan letras");
  }
};

const logicaD4 = () => {
  if (letrasTemp === "ABC") {
    letras.innerHTML = letrasTemp + "D";
    letrasTemp = "ABCD";
  } else {
    alert("Faltan letras");
  }
};

const logicaE5 = () => {
  if (letrasTemp === "ABCD") {
    letras.innerHTML = letrasTemp + "E";
    letrasTemp = "ABCDE";
  } else {
    alert("Faltan letras");
  }
};

const logicaF6 = () => {
  if (letrasTemp === "ABCDE") {
    letras.innerHTML = letrasTemp + "F";
    letrasTemp = "ABCDEF";
  } else {
    alert("Faltan letras");
  }
};

const logicaG7 = () => {
  if (letrasTemp === "ABCDEF") {
    letras.innerHTML = letrasTemp + "G";
    letrasTemp = "ABCDEFG";
  } else {
    alert("Faltan letras");
  }
};

const logicaH8 = () => {
  if (letrasTemp === "ABCDEFG") {
    letras.innerHTML = letrasTemp + "H";
    letrasTemp = "ABCDEFGH";
  } else {
    alert("Faltan letras");
  }
};

const logicaI9 = () => {
  if (letrasTemp === "ABCDEFGH") {
    letras.innerHTML = letrasTemp + "I";
    letrasTemp = "ABCDEFGHI";
  } else {
    alert("Faltan letras");
  }
};

const logicaJ0 = () => {
  if (letrasTemp === "ABCDEFGHI") {
    letras.innerHTML = letrasTemp + "J";
    letrasTemp = "ABCDEFGHIJ";
  } else {
    alert("Faltan letras");
  }
};

// Onclick
btnA1.onclick = function () {
  logicaA1();
};

btnB2.onclick = function () {
  logicaB2();
};

btnC3.onclick = function () {
  logicaC3();
};

btnD4.onclick = function () {
  logicaD4();
};

btnE5.onclick = function () {
  logicaE5();
};

btnF6.onclick = function () {
  logicaF6();
};

btnG7.onclick = function () {
  logicaG7();
};

btnH8.onclick = function () {
  logicaH8();
};

btnI9.onclick = function () {
  logicaI9();
};

btnJ0.onclick = function () {
  logicaJ0();
};
