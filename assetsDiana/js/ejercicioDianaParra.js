let contadorNumeros = 0;
let contadorLetras = 0;
let contadorProceso = 0;
let totalItems = 9;
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
let textoLetras = "";
let textoNumeros = "";


const logicaBoton = (escribirLetra, escribirNumero, numeroBoton) => {
    console.log(escribirLetra, escribirNumero, numeroBoton);
  if (contadorProceso == 0) {
    if (contadorLetras == totalItems) {
        contadorProceso += 1;
      }
    if (numeroBoton == contadorLetras) {
      contadorLetras += 1;
      console.log("agregando letra", escribirLetra,contadorLetras);
      textoLetras += escribirLetra 
      letras.innerHTML = textoLetras 
    } else if (contadorLetras <= totalItems){
        alert("ya esta la letra: ", escribirLetra)
    } else {
      alert("Faltan letras");
    }

  } else {
        if (numeroBoton == contadorNumeros) {
            contadorNumeros += 1;     
      console.log("agregando numero", escribirNumero);
      textoNumeros += (1+escribirNumero)
      numeros.innerHTML = textoNumeros 
    } else if (contadorNumeros <= totalItems){
        alert("ya esta el número", escribirNumero)
    } else {
      alert("Faltan números");
    }

  }
};

const accionarBoton = (identificadorBoton, numeroBoton) => {
  switch (identificadorBoton) {
    case "btnA1":
      logicaBoton("A", 0, numeroBoton);
      break;
    case "btnB2":
      logicaBoton("B", 1, numeroBoton);
      break;
    case "btnC3":
      logicaBoton("C", 2, numeroBoton);
      break;
    case "btnD4":
      logicaBoton("D", 3, numeroBoton);
      break;
    case "btnE5":
      logicaBoton("E", 4, numeroBoton);
      break;
    case "btnF6":
      logicaBoton("F", 5, numeroBoton);
      break;
    case "btnG7":
      logicaBoton("G", 6, numeroBoton);
      break;
    case "btnH8":
      logicaBoton("H", 7, numeroBoton);
      break;
    case "btnI9":
      logicaBoton("I", 8, numeroBoton);
      break;
    case "btnJ10":
      logicaBoton("J", 9, numeroBoton);
      break;

    default:
      break;
  }
};
