function suma (a,b){
    return a + b;
}

function resta (a,b){
    return a - b;
}

function multiplicacion (a,b){
    return a * b;
}

function division (a,b){
    return a / b;
}

function getOperandoA(){
    return parseInt(document.getElementById("operandoA").value);
}


function getOperandoB(){
    return parseInt(document.getElementById("operandoB").value);
}

var ResultadoSuma = () => {
    if((document.getElementById("operandoA").value == "") || (document.getElementById("operandoB").value == "")){
        document.getElementById("resultado").innerHTML = "Error: algún operando está vacío";
    }else{
        document.getElementById("resultado").innerHTML = suma(getOperandoA(),getOperandoB());
    }    
}

var ResultadoResta = () => {
    if((document.getElementById("operandoA").value == "") || (document.getElementById("operandoB").value == "")){
        document.getElementById("resultado").innerHTML = "Error: algún operando está vacío";
    }else{
    document.getElementById("resultado").innerHTML = resta(getOperandoA(),getOperandoB());
    }
}

var ResultadoMulti = () => {
    if((document.getElementById("operandoA").value == "") || (document.getElementById("operandoB").value == "")){
        document.getElementById("resultado").innerHTML = "Error: algún operando está vacío";
    }else{
        document.getElementById("resultado").innerHTML = multiplicacion(getOperandoA(),getOperandoB());
    }
}

var ResultadoDivi = () => {
    if((document.getElementById("operandoA").value == "") || (document.getElementById("operandoB").value == "")){
        document.getElementById("resultado").innerHTML = "Error: algún operando está vacío";
    }else{
        document.getElementById("resultado").innerHTML = division(getOperandoA(),getOperandoB());
    }
}

document.getElementById("boton-suma").addEventListener("click",ResultadoSuma);
document.getElementById("boton-resta").addEventListener("click",ResultadoResta);
document.getElementById("boton-multiplicacion").addEventListener("click",ResultadoMulti);
document.getElementById("boton-division").addEventListener("click",ResultadoDivi);



