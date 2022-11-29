
///FOR
alert("Inicie Sesión")

let passwordUsuario = parseInt(prompt("Ingrese su contraseña"));
const passwordCorrecto = 123456789;

for (let i = 0; i < 3; i++) {
    if (passwordUsuario === passwordCorrecto) {
        console.log("Contraseña correcta. Bienvenido Usuario");
        break;
    } else {
        passwordUsuario = parseInt(prompt("Contraseña incorrecta. Vuelve a intentarlo"));
    }

}

//while - switch

let entrada = prompt("¿Que medio de pago querés usar?");

while (entrada != "ESC") {
    switch (entrada) {
        case "tarjeta de credito":
            alert("Hoy podes abonar hasta en 6 cuotas sin interés!");
            break;
        case "debito":
            alert("Podrás abonar en una cuota");
            break;
        case "efectivo":
            alert("Podrás abonar a través de Pagofácil o Rapipago en una cuota");
            break;
        case "mercado pago":
            alert("Podés abonar con todos los medios de pago que te brinda MercadoPago");
            break;
        case "transferencia":
            alert("Genial, tendrás un 15% de descuento en tu compra");
            break;
        default:
            alert("Tenemos todos los medios de pago disponibles.Elegí el tuyo!");
            break;

    }
}
entrada = prompt("Ingresa tu medio de pago"); 
 

 
///function

function totalProducto(productoA, productoB) {
    let resultado = productoA + productoB;
    let mensaje = `La suma es ${resultado}`;
    alert(mensaje);

}

let productoA = parseInt(prompt("Ingrese el valor del primer producto"));
let productoB = parseInt(prompt("Ingrese el valor del segundo producto"));

sumar (productoA,productoB) 

