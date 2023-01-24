var elegido = ""

function changeOperation(operation) {
    var change = prompt("Elegiste: " + elegido + "\n¿Quieres cambiar de operación?\nsi o no")
    if(change == "si") {
      calcular() 
    } else if(change == "no") {
        operation()
    } else {
        alert("ingresa una respuesta valida")
        changeOperation(operation)
    }
}

function calcular() {
    var operacion = prompt("¿Que operación utilizarás?\nsuma: + \nresta: - \nmultiplicacion: *  \ndivision: /");
    switch(operacion) {
        case "suma":
        case "+":
            var operacionElegida = "suma"
            elegido = operacionElegida

            function suma(){
                var first_number = parseFloat(prompt("ingresa el primer número"));
                var second_number = parseFloat(prompt("ingresa el segundo número"));
                var invalid_number = ("No se ingresaron valores válidos");
                if(isNaN(first_number && second_number)) {
                    alert(invalid_number);
                    suma();
                } else {
                    var resultado = (first_number + second_number);
                    alert("El resultado de la suma es: " + resultado);
                }
            }
            changeOperation(suma)
        break;
    
        case "resta":
        case "-":
            var operacionElegida = "resta"
            elegido = operacionElegida
        
            function resta() {
                var first_number = parseFloat(prompt("ingresa el primer número"));
                var second_number = parseFloat(prompt("ingresa el segundo número"));
                var invalid_number = ("No se ingresaron valores válidos");
                if(isNaN(first_number && second_number)) {
                    alert(invalid_number);
                    resta();
                } else {
                    var resultado = (first_number - second_number);
                    alert("El resultado de la resta es: " + resultado);
                }
            }
            changeOperation(resta)
        break;
    
        case "multiplicacion":
        case "*":
            var operacionElegida = "multiplicacion"
            elegido = operacionElegida
        
            function multi() {
                var first_number = parseFloat(prompt("ingresa el primer número"));
                var second_number = parseFloat(prompt("ingresa el segundo número"));
                var invalid_number = ("No se ingresaron valores válidos");
                if(isNaN(first_number && second_number)) {
                    alert(invalid_number);
                    multi();
                } else {
                    var resultado = (first_number * second_number);
                    alert("El resultado de la multiplicación es: " + resultado);
                } 
            }
            changeOperation(multi)
        break;
    
        case "division":
        case "/":
            var operacionElegida = "division"
            elegido = operacionElegida
        
            function div() {
                var first_number = parseFloat(prompt("ingresa el primer número"));
                var second_number = parseFloat(prompt("ingresa el segundo número"));
                var invalid_number = ("No se ingresaron valores válidos");
                if(isNaN(first_number && second_number)) {
                    alert(invalid_number);
                    div();
                } else {
                    var resultado = (first_number / second_number);
                    alert("El resultado de la división es: " + resultado);
                }
            }
            changeOperation(div)
        break;
        
        default:
            function invalid() {
                var inv = ("No se ingresó una operación válida");
                alert(inv);
                calcular();
            }
            invalid();
        break;
    }
}
calcular();