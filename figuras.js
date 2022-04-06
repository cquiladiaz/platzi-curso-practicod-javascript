//Código del cuadrado
function perimetroCuadrado(lado){
    return lado*4;
} 

function areaCuadrado(lado){
    return lado*lado;
} 

//Código del triángulo
function perimetrotriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areatriangulo(base, altura){
    return (base * altura) / 2;
} 

//Código del circulo
function diametroCirculo(radio){
    return radio * 2;
} 

function perimetroCirculo(radio){
    return (radio*2) * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

//

//Aqui interactuamos con HTML
//cuadrado
function calcularPerimetroCuadrado(){
    var input = document.getElementById("inputCuadrado");
    var value = input.value;

    var perimetro = perimetroCuadrado(value);
    alert(perimetro + " cm");
}
function calcularAreaCuadrado(){
    var input = document.getElementById("inputCuadrado");
    var value = input.value;

    var area = areaCuadrado(value);
    alert(area + " cm2");
}
//triangulo
function calcularPerimetroTriangulo(){
    var input1 = document.getElementById("inputLado1");
    var valueT1 = parseInt(inputLado1.value);

    var input2 = document.getElementById("inputLado2");
    var valueT2 = parseInt(inputLado2.value);

    var input3 = document.getElementById("inputLado3");
    var valueT3 = parseInt(inputLado3.value);

    var perimetroT = perimetrotriangulo(valueT1, valueT2, valueT3);
    alert(perimetroT + " cm");
}
function calcularAreaTriangulo(){
    var input1 = document.getElementById("inputLadoBase");
    var valueTbase = parseInt(input1.value);
    
    var input2 = document.getElementById("inputAltura");
    var valueTaltura = parseInt(input2.value);

    var areaT = areatriangulo(valueTbase, valueTaltura);
    alert(areaT + " cm2");
}
//círculo
function calcularPerimetroCirculo(){
    var inputR = document.getElementById("inputRadio");
    var valueR = parseInt(inputR.value);

    var perimetroC = perimetroCirculo(valueR);
    alert(perimetroC + " cm");
}
function calcularAreaCirculo(){
    var inputR = document.getElementById("inputRadio");
    var valueR = parseInt(inputR.value);

    var areaC = areaCirculo(valueR);
    alert(areaC + " cm");
}

//triangulo isósceles
function calcularAlturaDeTriangulo(){
    var l1 = document.getElementById("l1");
    var valueL1 = parseInt(l1.value);

    var l2 = document.getElementById("l2");
    var valueL2 = parseInt(l2.value);

    var l3 = document.getElementById("l3");
    var valueL3 = parseInt(l3.value);
    
    if (valueL1 === valueL2){
        var h = Math.sqrt(((valueL1)**2)-((valueL3/2)**2));
        alert("La altura del triángulo es: " + h );
    }
    else{
        alert("Lo siento, las medidas ingresadas no corresponden a un triángulo isosceles");
    }
}
