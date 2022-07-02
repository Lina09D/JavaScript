/*let:  permite declarar variables limitado su
prompt(): es un método del objeto, que e us para mostrarun mensaje
que se le solicita al usuario que ingrese.
La función validarTexto, es la que nos sirve para no dejar continuar 
si no se ingresa el tipo de dato requerido.*/
function validacionTexto(texto) {

    do {
      let nombre = prompt(texto);
   
      if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
        return nombre;
    } while (true);
   }
   /*validacionTexto: este método solo permite el ingreso de letras,
    de otra manera continuará preguntando hasta insertar letras.*/
   let usuario = validacionTexto("¿Cuál es tu nombre?");
let productos = {
    c: 25000,
    p: 60000,
    m: 5000
};
/*
alert: es una funcion de lenguaje que devuelve un cuadro de alerta,
por ejemplo una información.
${}: permite insertar valores dinamicos en cadena.
*/
let lista = " ";
lista = lista + usuario + " Para realizar la compra ten encuenta: " + "\n";
lista = lista + "" + "\n";
lista = lista + "| CÓDIGO |  PRODUCTO  |   PRECIO    |" + "\n";
lista = lista + `|      01      |     Camisa      |     ${productos.c}    |` + "\n";
lista = lista + `|      02      |    Pantalón     |     ${productos.p}    |` + "\n";
lista = lista + `|      03      |     Medias      |      ${productos.m}     |` + "\n";
lista = lista + "" + "\n";
alert(lista);
/*La función validarNúmero, es la que nos sirve para no dejar continuar 
si no se ingresa el tipo de dato requerido.*/
function validacionNumero(texto) {

    do {
      let nombre = prompt(texto);
   
      if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
        return nombre;
    } while (true);
}
/*
DO...WHILE: crea un bucle que ejecuta una sentencia especificada, hasta que la condición 
de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la
sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
*/
do{
    do{
 /*
prompt(): es un método del objeto, que e us para mostrarun mensaje
que se le solicita al usuario que ingrese.
toUpperCase(): devuelve el valor de la cadena convertida a mayúsculas. 
*/
        let id = prompt(usuario + " Escribe el código del producto a comprar: ")
        id = id.toUpperCase();
        /* 
        switch: evalúa una expresión, comparando el valor de esa expresión 
        con una instancia case, y ejecuta declaraciones asociadas a ese case, 
        así como las declaraciones en los case que siguen.
        validacionNumero: este método solo permite el ingreso de números,
        de otra manera continuará preguntando hasta insertar números.
        */
        switch(id){
            case '01':
            var cant = validacionNumero(" Cantidad a llevar de dicho producto:");
            var total = productos.c * cant;
            alert(" El precio a pagar por" + " Camisa " + "es de: " + "$" + total + " pesos");
            break;
            case '02':
            var cant = validacionNumero(" Cantidad a llevar de dicho producto:");
            var total = productos.p * cant;
            alert(" El precio a pagar por" + " Pantalón " + "es de: " + "$" + total + " pesos");
            break;
            case '03':
            var cant = validacionNumero(" Cantidad a llevar de dicho producto:");
            var total = productos.m * cant;
           alert(" El precio a pagar por" + " Medias " + "es de: " + "$" + total + " pesos");
            break;
            default:
/*
Esté alert se mostrará si el código que ingresemos no se encuentra 
o en definotivo no existe.
*/
                alert("Ese producto no existe");
                cant = false
        }
    }while(cant === false);
    /*
    En el confirm se efectua un mesaje, si el usuario desea llevar otro producto.
    si el usuario lo desea retornara, de otra manera finalizará.
    */
    var valid = confirm("¿Quieres otro producto?");
}while(valid === true);