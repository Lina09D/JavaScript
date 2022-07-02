/* Funcion para validar datos de tipo texto.
DO...WHILE:crea un bucle que ejecuta una sentencia especificada, hasta que la condición 
de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la
sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
*/
function validacionTexto(texto) {

    do {
      let nombre = prompt(texto);
   
      if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
        return nombre;
    } while (true);
}

/* Funcion para validar datos de tipo númerico.
DO...WHILE:crea un bucle que ejecuta una sentencia especificada, hasta que la condición 
de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la
sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
*/
function validacionNumero(texto) {

    do {
      let nombre = prompt(texto);
   
      if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
        return nombre;
    } while (true);
}

//CompraTienda: Es para crear los productos que se desean comprar, agrgar valores y el nombre del cliente.
//Una función constructora no tiene return.
class CompraTienda {
    //Propiedades :: Atributos
    //#: Significa el encapsulamiento = El usuario no lo ve, pero los metodos get y set si pueden modificarlo y capturar un valor.
    #nombreCliente;
    #productoCompra;
    #cantidadCompra;
    #precioCompra;
    //Método constructor: Asigna valores iniciales a las propiedades.
    //"": Porqué los datos que va a capturar son de tipo string.
    //0: Porqué los datos que va a capturar son de tipo númerico.
    // El método constructor se ejecuta cuando...se usa la palabra new y la referencia de la clase. 
    constructor() {
        this.#nombreCliente = "";
        this.#productoCompra = "";
        this.#cantidadCompra = 0;
        this.#precioCompra = 0;
    }

    //Métodos adicionales de la clase.
    //calculaValorCompra: Retorna o devuelve el valor resultante de multiplicar catidadCompra * precioCompra.
    calculaValorCompra() {
        return this.#cantidadCompra * this.#precioCompra;
    }

    //Función...capturaDato: Captura los diferentes valores. Leer tres datos = nomProducto, cantProducto, valProducto.
    //Valor: es variable local...esta definida dentro de pa función.
    capturaDato(mensaje) {
        let valor = prompt(mensaje);
        return valor;
    }

    //Get y Set: Son métodos especiales/No son funciones.
    //get: VER, para mostrar el artributo o propiedad.
    get getNombreCliente() {
        return this.#nombreCliente;
    }

    //set: Para asignar un valor.
    //Para asignarle un valor el método set, se le envia el parametro (value).
    //(value):Para que ese valor que se esta mandando lo almacene a la propiedad.
    set setNombreCliente(value) {
        this.#nombreCliente = value;
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

//CarritoTienda: Es para guardar en un arreglo los objetos que se van creando de CompraTienda.
class CarritoTienda {
    //Propiedades :: Atributos
    //#: Significa el encapsulamiento = El usuario no lo ve, pero los metodos get y set si pueden modificarlo y asignar un valor.
    //[]:Significa que hay un array o arreglo
    //#productos: es un array, encapsulado...todo lo que el cliente seleccione se captura en array.
    #productos = [];
    //Método constructor...CREA el array vacio
    constructor() {
        this.#productos = [];
    }

    //nuevoProducto: Captura el atributo nom, que es el nombre del cliente.
    //Producto: Es una referencia a un nuevo objeto de la clase CompraTienda.
    //push: Es para anadir elementos al final de un array y devuelve la nueva log del array.
    nuevoProducto(nombre) {
        let producto = new CompraTienda();
        producto.setNombreCliente = nombre;
        producto.setProductoCompra = producto.capturaDato = validacionTexto('Digite el producto a comprar: ');
        producto.setCantidadCompra = producto.capturaDato = validacionNumero('Digite numero de unidades: ');
        producto.setPrecioCompra = producto.capturaDato = validacionNumero('Digite precio del Producto: $');
        this.#productos.push(producto);
        return producto;
    }

    //get: Para mostrar el artributo.
    //return: Todos los productos seleccionadoso que el cliebnte desea comprar, se van a retornar con una lista.
    get carritoCompra() {
        return this.#productos;
    }

    //get: Para mostrar el artributo.
    //return: Cuantos productos esta llevando.
    //length: Cuantos productos va a llevar.
    get numeroProductos() {
        return this.#productos.length;
    }
}

//capturaNombreCliente: Para no estar preguntando el nombre del cliente.
function capturaNombreCliente() {
    let nombre = validacionTexto('Nombre del Cliente: ');
    return nombre;
}

//Tabla de productos
   

//Inicia el programa a funcionar. 
//let sw = true: Varible booleana que indica si el nombre del cliente es diferente a vacio.
let sw = true;
let respuesta = true;
let nombre = '';

do {
    do {
        nombre = capturaNombreCliente();
        if (nombre === "") {
            sw = true;
        }
        else {
            sw = false;
        }
    } while (sw);

    //Canasta: Es una referencia a un nuevo objeto de la clase CarritoTienda.
    //El nombre del cliente del objeto de la posición n.
    let canasta = new CarritoTienda();

    do {
        canasta.nuevoProducto(nombre);
        respuesta = confirm('¿Desea un nuevo producto?');
    } while (respuesta);
    console.log("\n" + 'Nombre del Cliente: ' + canasta.carritoCompra[0].getNombreCliente);
    let i = 0;
    let compra = 0;


    //=>: Define que existe una función en flecha.
    //toFixed: Da formato a un número decimal y lo redondea.
    //replace: Remplaza valores.
    //forEach: Significa que puede coger el objeto de la posición 0, de la posición 1, y asi en todas las posiciones...Barrer todos los objetos que estan en el arreglo
    //i++: A la variable sumele 1.
    //+=: Es un operador aritmético, se utiliza para sumarle una valor a cierta variable.
    canasta.carritoCompra.forEach(producto => {
        i++;
        compra += producto.calculaValorCompra();
        console.log(i + ". " + producto.getProductoCompra + "  " + producto.getCantidadCompra + "  $" + producto.getPrecioCompra +
            "   $" + (producto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    });
    console.log("Valor de la Compra: $", (compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    respuesta = confirm('¿Existe un nuevo Cliente?');
} while (respuesta);