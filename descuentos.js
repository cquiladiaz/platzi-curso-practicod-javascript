//var precioOriginal = 120;
//var descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio * porcentajePrecioConDescuento)/100; 

    return precioConDescuento;
}

function priceDiscountOnClick(){
    var inputPrice = document.getElementById("InputPrice");
    var priceValue = inputPrice.value;

    var inputDiscount = document.getElementById("InputDiscount");
    var discountValue = inputDiscount.value; 

    var precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    var resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuento;    
}

//  console.log({//de esta manera lo traemos como si fuera un objeto con diferente atributos
//      precioOriginal,
//      descuento,
//      porcentajePrecioConDescuento,
//      precioConDescuento,
//  });