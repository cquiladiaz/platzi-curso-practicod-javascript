function calcularMediaAritmética(lista){

    var sumaLista = 0;

    // for(var i=0; i < lista.length; i++){
    //  sumaLista = sumaLista + lista[i];
    // }

    var sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    console.log(sumaLista);

    var promedioLista = sumaLista / lista.length;

    return promedioLista;

}