// var lista1 =[100, 200, 500, 400000000];

// var mitadLista1 = parseInt(lista1.length / 2);

// function esPar(numero){
//     if(numero % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// var mediana;

// if (esPar(lista1.length)){
//     var elemento1 = lista1[mitadLista1];
//     var elemento2 = lista1[mitadLista1 - 1];

//     var mediana = (elemento1 + elemento2) / 2;
// }
// else{
//     mediana = lista1[mitadLista1];
// 

function calcularMediana(lista){
   
    var lista;

    lista.sort(function(a, b) {
        return a - b;
      });
      console.log(lista);
}