var lista = [1,2,3,1,2,3,2,2,1,5,3,2,2];

var listaCount = {};

//convirtiendo un array en un objeto
lista.map(
    function (elemento){
        if (listaCount[elemento]) {
            listaCount[elemento] = listaCount[elemento] + 1;
        }
        else{
            listaCount[elemento] = 1;
        }
    }
);

//convirtiendo un objeto en una array
var listaCountArray = Object.entries(listaCount).sort(
    function (a, b){
    return a[1] - b[1];
});

//identificando la moda en nuestro array
var moda = listaCountArray[listaCountArray.length - 1];

console.log(lista);
console.log(listaCount);
console.log(listaCountArray);
console.log(moda[0]);
console.log(moda[1]);
