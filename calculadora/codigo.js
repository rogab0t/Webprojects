var ruta = window.location;
console.log(ruta)
document.write("You are in: " + ruta);

function calcular() 
{
  var operacion = prompt("¿Que operación utilizarás?\nsuma, resta, multiplicacion o division:");
  switch(operacion) {
    case "suma":
    case "+":
      function changeSum() {
        var change = prompt("Elegiste SUMA.\n¿Quieres cambiar de operación?\nsi o no")
        if(change == "si") {
          calcular() 
        } else if(change == "no") {
            suma()
        } else {
            alert("ingresa una respuesta valida")
            changeSum()
        }
      }
      changeSum()
      
      function suma()
      {
        var first_number = parseFloat(prompt("ingresa el primer número"));
        var second_number = parseFloat(prompt("ingresa el segundo número"));
        var invalid_number = ("No se ingresaron valores válidos");
        if(isNaN(first_number && second_number)) {
          alert(invalid_number);
          suma();
        } else {
            var resultado = (first_number + second_number);
            alert("El resultado de la suma es " + resultado);
        }
      }
    break;
  
    case "resta":
    case "-":
        function changeRes() {
          var change = prompt("Elegiste RESTA.\n¿Quieres cambiar de operación?\nsi o no")
          if(change == "si") {
            calcular() 
          } else if(change == "no") {
              resta()
          } else {
              alert("ingresa una respuesta valida")
              changeRes()
          }
        }
        changeRes()
    
      function resta() {
        var first_number = parseFloat(prompt("ingresa el primer número"));
        var second_number = parseFloat(prompt("ingresa el segundo número"));
        var invalid_number = ("No se ingresaron valores válidos");
        if(isNaN(first_number && second_number)) {
          alert(invalid_number);
          resta();
        } else {
            var resultado = (first_number - second_number);
            alert("El resultado de la resta es " + resultado);
        }
      }
    break;
  
    case "multiplicacion":
    case "*":
        function changeMul() {
          var change = prompt("Elegiste MULTIPLICACIÓN.\n¿Quieres cambiar de operación?\nsi o no")
          if(change == "si") {
            calcular() 
          } else if(change == "no") {
              multi()
          } else {
              alert("ingresa una respuesta valida")
              changeMul()
          }
        }
        changeMul()
    
      function multi() {
        var first_number = parseFloat(prompt("ingresa el primer número"));
        var second_number = parseFloat(prompt("ingresa el segundo número"));
        var invalid_number = ("No se ingresaron valores válidos");
        if(isNaN(first_number && second_number)) {
          alert(invalid_number);
          multi();
        } else {
            var resultado = (first_number * second_number);
            alert("El resultado de la multiplicación es " + resultado);
        } 
      }
      break;
  
    case "division":
    case "/":
        function changeDiv() {
          var change = prompt("Elegiste DIVISÓN.\n¿Quieres cambiar de operación?\nsi o no")
          if(change == "si") {
            calcular() 
          } else if(change == "no") {
            div()
          } else {
              alert("ingresa una respuesta valida")
              changeDiv()
          }
        }
        changeDiv()
    
      function div() {
        var first_number = parseFloat(prompt("ingresa el primer número"));
        var second_number = parseFloat(prompt("ingresa el segundo número"));
        var invalid_number = ("No se ingresaron valores válidos");
        if(isNaN(first_number && second_number)) {
          alert(invalid_number);
          div();
        } else {
            var resultado = (first_number / second_number);
            alert("El resultado de la división es " + resultado);
        }
      }
      break;
      
    default:
      function invalid() {
        var inv = ("No se ingresó una operación válida");
        alert(inv);
        calcular();
      }
    invalid();
  }
}
calcular();