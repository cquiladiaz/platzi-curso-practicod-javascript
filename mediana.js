var lista = [1,2,3,54,4,6,23,5,7,455,123,45];

var mitadLista = parseInt(lista.length / 2);
//console.log(mitadLista);

//Determina si es par 
function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
//Ordene lista
lista.sort(function (a,b){
    return a - b;
});
console.log(lista);

//Calculo de la mediana 
var mediana;

function calcularMediana(){

    if(esPar(lista.length)){
        var mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;
        console.log(mediana);
    }
    else{
        mediana = lista[mitadLista];
        console.log(mediana);
    } 
}

