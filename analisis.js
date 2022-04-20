//Helpers or Utils
function esPar(numero){
    if(numero % 2 === 0){
        return true; 
    }
    else{
        return false;
    }
}
function calcularMediaArimetica (lista){
    var sumaLista = lista.reduce(
        function(a=0, b){
            return a + b;
        }
    );

    var promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de mediana
function medianaSalarios(lista){
    var mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        var personaMitad1 = lista[mitad];  
        var personaMitad2 = lista[mitad - 1];
    
        var mediana = calcularMediaArimetica([personaMitad1, personaMitad2]);
        return mediana;
    }
    else{
        var personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
var salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

var salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

var medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%
var spliceStart = (salariosColSorted.length * 90) / 100;
var spliceCount = salariosColSorted.length - spliceStart;

var salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

var medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
}
);
console.log(salariosColTop10);
