/*
objeto datosArchivo: este trae los datos del archivo datos.json
se trae y se almacena en el objeto datosArchivo.
datos.json: que los datos vienen en un formato json, hay que 
tener muy encuenta en estos formatos las llaves y los objetos.
un import solo copia. 
*/
import datosArchivo from './datos.json' assert { type: 'json' };
/* 
ProductoTienda: Es para crear los productos que se desean comprar, 
agrgar valores y el nombre del cliente, clase que gestiona cada 
uno de los productos que se tienen para la venta.
Una función constructora no tiene return.

Las clases ProductoTienda y GestionarProductosTienda sirven 
para que el administrador gestione y  para el funcionamiento de 
la tienda Online. Con esas dos clases es que se realiza la venta.
Gestionar: colocar nuevos productos, comprar nuevos productos, 
deplegar los precios de los productos.
Lo que el usuario me va a comprar.
*/
class ProductoTienda {
 /*
 Propiedades :: Atributos
 #: Significa el encapsulamiento = El usuario no lo ve, pero los 
 metodos get y set si pueden modificarlo y capturar un valor.
 */
     #codigoProducto;
     #nombreProducto;
     #inventarioProducto;
     #precioProducto;
/*
Método constructor: Asigna valores iniciales a las propiedades.
"": Porqué los datos que va a capturar son de tipo string.
0: Porqué los datos que va a capturar son de tipo int(N entero).
0.0:Porqué los datos que va a capturar son de tipo float(N real). 
El método constructor se ejecuta cuando...se usa la palabra 
new y la referencia de la clase. 
*/
     constructor(){

          this.#codigoProducto = '';
          this.#nombreProducto = '';
          this.#inventarioProducto = 0;
          this.#precioProducto = 0.0;

     }
/*
Get y Set: Son métodos especiales / No son funciones.
get: VER, para mostrar el artributo o propiedad.
this: está clase, no hay nesecidad de buscarla si contiene el this.
*/
     get getCodigoProducto() {
          return this.#codigoProducto;
     }
/*
set: Para asignar un valor.
Para asignarle un valor el método set, se le envia el parametro (value).
(value):Para que ese valor que se esta mandando lo almacene a la propiedad.
*/
     set setCodigoProducto(value) {
          this.#codigoProducto = value;
     }
//get: Para mostrar el artributo.
     get getNombreProducto() {
          return this.#nombreProducto;
     }
//set: Para asignar un valor.
     set setNombreProducto(value) {
          this.#nombreProducto = value;
     }
//get: Para mostrar el artributo.
     get getInventarioProducto() {
          return this.#inventarioProducto;
     }
//set: Para asignar un valor.
     set setInventarioProducto(value) {
          this.#inventarioProducto = value;
     }
//get: Para mostrar el artributo.
     get getPrecioProducto() {
          return this.#precioProducto;
     }
//set: Para asignar un valor.
     set setPrecioProducto(value) {
          this.#precioProducto = value;
     }

}
//Clase que gestiona los productos que se tienen para la venta en la tienda.
class GestionarProductosTienda {
//Propiedades :: Atributos
/*
#: Significa el encapsulamiento = El usuario no lo ve, pero los 
metodos get y set si pueden modificarlo y capturar un valor.
*/
     #cargaProductos;

     constructor(){
/*
#cargaProductos: es un arreglo, que llevara objetos de 
la clase productos.
Se habla de los productos que están a la venta.
*/
          this.#cargaProductos = [];

     }

//Métodos adicionales de la clase.
/*
getDatosProductosCargados: Retorna o devuelve los valores 
almacenados en cargaProductos que es el arreglo.
*/
    
     getDatosProductosCargados() {
          return this.#cargaProductos;
     }
/*
cargaManualProducto: es cuando pregunta si se desea agregar 
un nuevo producto...grabar nuevos productos.
*/
     cargaManualProducto(){

          let dato = "";
          //let respuesta = confirm('¿Desea digitar un nuevo producto?');
/*
confirm: me devuelve un boolean true o false.
*/
          while (confirm('¿Desea grabar un nuevo producto?')){

               let sw = true;
               //productos es un nuevo objeto de la clase ProductoTienda.
               let producto = new ProductoTienda();

               do{
                    dato = this.datosProducto = valNum("Código del Producto: ");
                    //sw = this.verificarCodigoProducto(dato);
                    /*Lo que la persona digito lo almacena en dato. */
               } while (this.verificarCodigoProducto(dato));
               producto.setCodigoProducto = dato.toUpperCase();
               do{
                    dato = this.datosProducto = valnom("Nombre del Producto: ");
                    /* toUpperCase: Es una función que es un método toUpperCase() devuelve 
                    el valor de la cadena convertida a mayúsculas . Este método no afecta el 
                    valor de la cadena en sí, ya que las cadenas son inmutables.  */
               } while (this.verificarNombreProducto(dato.toUpperCase()));
               producto.setNombreProducto = dato.toUpperCase();
               producto.setInventarioProducto = Number(this.datosProducto = valNum("Cantidad del Producto: "));
               producto.setPrecioProducto = Number(this.datosProducto = valNum("Precio del Producto: "));
     
               this.#cargaProductos.push(producto);
     
               //respuesta = confirm('¿Desea grabar un nuevo producto?');

          }
     }

/*
cargaArchivoProducto: Carga los archivos que se encuentran almacenados 
que estan el documento o archivo.json.      
*/
     cargaArchivoProductos(){
          
          let i=0;

          if (datosArchivo.length > 0){
          
               datosArchivo.forEach(objeto => {
/*Se validan los datos y se le agregan los meétodos a los pototipos 
por defecto*/
                    i++;
                    let producto = new ProductoTienda();
                    producto.setCodigoProducto = objeto.codigoProducto.toUpperCase();
                    producto.setNombreProducto = objeto.nombreProducto.toUpperCase();
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    producto.setPrecioProducto = objeto.precioProducto; 
                    
                    this.#cargaProductos.push(producto);
     
               });  

          };
//mostramos la cantidad de productos que hay a la venta.
          console.log("Total de productos cargados: " + i);

     }
/*
almacenaProductos: coge el arreglo de productos y los guarda, 
esto seria persistencia de datos
*/
     almacenaProductos(datosClase){
          //console.log(datosClase);
          localStorage.setItem("productosTienda",JSON.stringify(datosClase));
          let datosJson = localStorage.getItem("productosTienda");
          //console.log(JSON.parse(datosJson));
     }
/*
datosProducto: Recibe un mensaje y lo guarda en valor, luego
retorna el valor digitado
El valor digitado se almacena en dato.
Se realiza el método para la validacion de datos.
*/
datosProducto(mensaje,tipo){
     let valor = "";
   
     if(tipo==="número")valor=valNum(mensaje)
     if(tipo=== "texto")valor= valnom(mensaje)
     return valor;
}

/*
verificaCodigoProducto: verificar que si el código del 
producto existe o no. 
La variable es codigo
*/
     verificarCodigoProducto(codigo){

          let sw = false;
          let BreakException = {};
/*
if (this.#cargaProductos.length > 0): La longitud del arreglo es mayor que cero
Se pregunta si el arreglo contiene datos o esta vació.
*/
          if (this.#cargaProductos.length > 0){
/*
try...catch: Se usa para capturar errores en tiempo de ejecución.
dentro del bloque try se colocan las intrucciones que se van a vigilar,
si llegase a cometerse un error se captura, una vez capturadas 
se envian al catch y se ejecuta la intrucción dada.
Se utilizo ya que se utilizo la estructura de un forEach.
La estructura forEach no tiene un rompimiento(BreakException), para 
esto entonces se genera un error o rompimiento con "throw BreakException".
switch: Verifica si el codigo es realmente nuevo o ya existe.
Si el codigo que ingrese lo encontre debe valer true y no se prodra 
guardar ese codigo, sino lo encontre es false quiere decir qie se 
puede guardar el código.
=>: Quiere decir que será función flecha. 
*/
             try {
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getCodigoProducto === codigo){
                              sw = true;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };

          } else{
               sw = false;
          }
          return sw;
     }
/*
verificaNombreProducto: verificar que si el nombre del 
producto existe o no. 
*/
     verificarNombreProducto(nombre){

          let sw = false;
          let BreakException = {};
/*
try...catch: Se usa para capturar errores en tiempo de ejecución.
dentro del bloque try se colocan las intrucciones que se van a vigilar,
si llegase a cometerse un error se captura, una vez capturadas 
se envian al catch y se ejecuta la intrucción dada.
Se utilizo ya que se utilizo la estructura de un forEach.
La estructura forEach no tiene un rompimiento(BreakException), para 
esto entonces se genera un error o rompimiento con "throw BreakException".
switch: Verifica si el nombre es realmente nuevo o ya existe.
Si el nombre que ingrese lo encontre debe valer true y no se prodra 
guardar ese nombre, sino lo encontre es false quiere decir qie se 
puede guardar el nombre.
=>: Quiere decir que será función flecha. 
*/
          if (this.#cargaProductos.length > 0){
               try {
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getNombreProducto === nombre){
                              sw = true;
                              throw BreakException;
                         };
                    })
               } catch (e) {
                    if ( e !== BreakException) throw e;
               };
          } else{
               sw = false;
          }
          return sw;
     }
/*
mostrarProductos: Mostrar los productos que se 
encuentran en la tienda o un catalogo.
*/
     mostrarProductos(datosProductos){
          let i=0;
          console.log ("      PRODUCTOS DISPONIBLES - TIENDA ONLINE      ");
          console.log ("| CODIGO | PRODUCTO | INVENTARIO | P.V.P. |");

          datosProductos.forEach(producto => {
               console.log("|   " + producto.getCodigoProducto + "   | " + producto.getNombreProducto + " |      " +
               producto.getInventarioProducto + "     |  $" + (producto.getPrecioProducto).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " | ");
          });
          console.log(" ");          
     }

}

/*Se valida el nombre del producto, del vendedor y del cliente 
(solo se pueden digitar letras).*/
function valnom(texto) {

     do {
       let nombre = prompt(texto);
   
       if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
         return nombre;
     } while (true);
   }
/*Se valida el número de productos en venta, el precio y la cantidad 
que va a comprar el cliente (solo se pueden digitar números)*/
function valNum(texto) {
   
     do {
       let nombre = prompt(texto);
   
       if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
         return nombre;
     } while (true);
   }

/*
CompraProductoTienda y CarritoCompra: sirven para el cliente 
que esta en la tienda Online. Con esas dos clases es que se 
realiza la compra.
Lo que el usuario selecciona, ya sea producto por producto.
*/
//clase de los productos que el cliente selecciona en el carrito de compras
class CompraProductoTienda {
//Propiedades :: Atributos
/*#: Significa el encapsulamiento = El usuario no lo ve, pero los 
metodos get y set si pueden modificarlo y capturar un valor.*/
     #clienteCompra;
     #productoCompra;
     #cantidadCompra;
     #precioCompra;

//Método constructor: Asigna valores iniciales a las propiedades.
/*
"": Porqué los datos que va a capturar son de tipo string.
0: Porqué los datos que va a capturar son de tipo númerico.
0.0:Porqué los datos que va a capturar son de tipo float. 
El método constructor se ejecuta cuando...se usa la palabra 
new y la referencia de la clase. 
*/
     constructor() {

          this.#clienteCompra = '';
          this.#productoCompra = '';
          this.#cantidadCompra = 0;
          this.#precioCompra = 0.0;

     }
//Métodos adicionales de la clase.
/*
calculaValorCompra: Retorna o devuelve el valor resultante 
de multiplicar catidad * precio.
*/
     calculaValorCompra() {
          return this.#cantidadCompra * this.#precioCompra;
     }

     datosCompra(mensaje){
          let valor = prompt(mensaje);
          return valor;
     }
/*
datoCodigoProducto: captura el código y graba el nombre.
*/
     datoCodigoProducto(datosProductos){

          let sw = true;
          let BreakException = {};
          let valor = "";
          do {
               valor = valNum("Codigo Del Producto: ");
               try {
                    datosProductos.forEach((objeto, index) => {
                         if (objeto.getCodigoProducto === valor && objeto.getInventarioProducto > 0){
                              this.setCantidadCompra = objeto.getInventarioProducto;
                              this.setPrecioCompra = objeto.getPrecioProducto;
                              valor = objeto.getNombreProducto;
                              sw = false;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };
               if (sw){
                    console.log("Codigo No Existe. ¡Verifique!");
               }
          } while (sw);

          return valor;
     }
/*
datoCantidadProducto: captura la cantidad y se la resta 
a el arreglo.
*/
     datoCantidadProducto (datosProductos){

          let sw = true;
          let valor = "";
          let BreakException = {};
          
          do {
               valor = valNum("Número De Unidades: ");

               if (valor <= this.getCantidadCompra && valor > 0){
                    this.setCantidadCompra = valor;
                    try {
                         datosProductos.forEach((objeto, index) => {
                              if (objeto.getNombreProducto === this.getProductoCompra && objeto.getInventarioProducto > 0){
                                   objeto.setInventarioProducto = objeto.getInventarioProducto - this.getCantidadCompra;
                                   throw BreakException;
                              };
                         });
                    } catch (e) {
                         if (e !== BreakException) throw e;
                    };
     
                    sw = false;
               }else{
                    console.log ("Excede Las Existencias O Digito Cero(0). ¡Verifique!");
               };
          } while (sw);

          return valor;
     }
//get: Para mostrar el artributo.
     get getClienteCompra() {
          return this.#clienteCompra;
     }
//set: Para asignar un valor.
     set setClienteCompra(value) {
          this.#clienteCompra = value;
     }
//get: Para mostrar el artributo.
     get getProductoCompra() {
          return this.#productoCompra;
     }
//set: Para asignar un valor.
     set setProductoCompra(value) {
          this.#productoCompra = value;
     }
//get: Para mostrar el artributo.
     get getCantidadCompra() {
          return this.#cantidadCompra;
     }
//set: Para asignar un valor.
     set setCantidadCompra(value) {
          this.#cantidadCompra = value;
     }
//get: Para mostrar el artributo.
     get getPrecioCompra() {
          return this.#precioCompra;
     }
//set: Para asignar un valor.
     set setPrecioCompra(value) {
          this.#precioCompra = value;
     }

}

/*clase de los productos que el cliente lleva en el carrito 
de compras*/
class CarritoCompra{
//Propiedades :: Atributos
/*#: Significa el encapsulamiento = El usuario no lo ve, pero los 
metodos get y set si pueden modificarlo y capturar un valor.
*/
     #productosCarrito;
/*
Método constructor: Asigna valores iniciales a las propiedades.
El método constructor se ejecuta cuando...se usa la palabra new 
y la referencia de la clase. 
[]: Porqué los datos que va a capturar son de tipo arreglo.
*/
     constructor(){

          this.#productosCarrito = [];

     }
/*
nuevoProducto: Se le da el nombre del cliente y el carrito.
*/
     nuevoProducto(nombre, datosProductos){

          let producto = new CompraProductoTienda();

          producto.setClienteCompra = nombre;
          producto.setProductoCompra = producto.datoCodigoProducto(datosProductos);
          producto.setCantidadCompra = producto.datoCantidadProducto(datosProductos);
          //producto.setPrecioCompra = producto.datoPrecioCompra();
          this.#productosCarrito.push(producto);
     }
/*
MostrarCompra: la factura, Datos de la compra.
*/
     mostrarCompra(carrito){

          let i=0;
          let compra = 0;

          console.log ("\n" + "        FACTURA DE VENTA - TIENDA ONLINE        ");
          console.log ("|       PRODUCTO     |   CANTIDAD  |   P.V.P.   |   SUBTOTAL   |");

          carrito.forEach(objeto => {
               compra += objeto.calculaValorCompra();
               console.log("|      " + objeto.getProductoCompra + "      |       " + objeto.getCantidadCompra + "     | $" +
               objeto.getPrecioCompra.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  |  $" + (objeto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "   | ");
          });
          console.log("");  
          console.log("Total De La Factura:  $", (compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));     
          console.log("\n" + "¡Gracias por su compra!");
     }
/*
El arreglo de los productos que estan dentro del carrito.
get: Para mostrar el artributo.
*/
     get carritoCompra(){
          return this.#productosCarrito;
     }
/*
El cuantos de los productos que esta llevando en el carrito.
get: Para mostrar el artributo.
*/
     get númeroProductos(){
          return this.#productosCarrito.length;
     }
}

let nombr = '';
//Se pide el nombre del cliente y se valida.
function setNombreCliente(){
     let nombr = valnom('Nombre del Cliente: ');
     nombr = nombr.toUpperCase();
     return nombr;
}

//Variables para empezar el programa.
let sw = true;
let respuesta = true;
let nombre = '';

//Se trae una clase referenciando productos,
let productosTienda = new GestionarProductosTienda();
productosTienda.cargaArchivoProductos();
productosTienda.cargaManualProducto();
productosTienda.almacenaProductos(productosTienda.getDatosProductosCargados());

let canasta = new CarritoCompra();

/*while "¿Existe un nuevo Cliente?" en caso de true, se repite 
todo el procedimiento.*/
while (confirm('¿Existe un nuevo Cliente?')){

     do{
          nombre = setNombreCliente();
         if (nombre === ""){
               sw = true;          
          } else {
               sw = false;
          };
     } while (sw);  


     do{
          productosTienda.mostrarProductos(productosTienda.getDatosProductosCargados());
          canasta.nuevoProducto(nombre, productosTienda.getDatosProductosCargados());

     } while (confirm('¿Desea un nuevo producto?'));
     
     //Se muestra la cantidad de productos.
     console.log(canasta.númeroProductos);

     //Se muestra los productos.
     console.log(canasta.carritoCompra);

     //Se muestra el nombre del cliente
     console.log('Nombre del Cliente: ' + canasta.carritoCompra[0].getClienteCompra);
     canasta.mostrarCompra(canasta.carritoCompra);
}