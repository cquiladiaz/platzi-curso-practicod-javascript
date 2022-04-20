function calcularMediaArimetica (lista){
    var sumaLista = lista.reduce(
        function(a=0, b){
            return a + b;
        }
    );

    var promedioLista = sumaLista / lista.length;
    return promedioLista;
}