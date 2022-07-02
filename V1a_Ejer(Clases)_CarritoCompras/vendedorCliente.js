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

//Se crea una clase llamada TiendaVendedor.
class TiendaVendedor {
  /*Propiedades :: Atributos
  #: Significa el encapsulamiento = El usuario no lo ve, pero los metodos 
  get y set si pueden modificarlo y capturar un valor.*/
    #nombreVendedor;
    #nombreProducto;
    #cantidadProducto;
    #precioProducto; 
  /*Método constructor: Asigna valores iniciales a las propiedades.
  "": Porqué los datos que va a capturar son de tipo string.
  0: Porqué los datos que va a capturar son de tipo númerico.
  El método constructor se ejecuta cuando...se usa la palabra 
  new y la referencia de la clase. */
    constructor() {
      this.#nombreVendedor = "";
      this.#nombreProducto = "";
      this.#cantidadProducto = 0;
      this.#precioProducto = 0;
    }
  
    /*Métodos adicionales de la clase.
    Función...capturaDato: Captura los diferentes 
    valores. Leer tres datos = nomProducto, cantProducto, valProducto.
    Valor: es variable local...esta definida dentro de pa función.*/
    capturaDato(mensaje) {
      let valor = prompt(mensaje);
      return valor;
    }
  
    //Get y Set: Son métodos especiales/No son funciones.
    //get: VER, para mostrar el artributo o propiedad.
    get getNombreVendedor() {
      return this.#nombreVendedor;
    }

  //set: Para asignar un valor.
    //Para asignarle un valor el método set, se le envia el parametro (value).
    //(value):Para que ese valor que se esta mandando lo almacene a la propiedad.
    set setNombreVendedor(value) {
      this.#nombreVendedor = value;
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
    get getCantidadProducto() {
      return this.#cantidadProducto;
    }
  
//set: Para asignar un valor.
    set setCantidadProducto(value) {
      this.#cantidadProducto = value;
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
  
  /* Se crea la clase ProductosVendedor
  ProductosVendedor: Es para guardar en un arreglo los objetos 
  que se van creando de CompraTienda.*/
  class ProductosVendedor {
  /*Propiedades :: Atributos
  #: Significa el encapsulamiento = El usuario no lo ve, pero los 
  metodos get y set si pueden modificarlo y asignar un valor.
  []:Significa que hay un array o arreglo
  #productos: es un array, encapsulado...todo lo que el vendedor
  inserta se captura en array.*/
    #productos = [];
    //Método constructor...CREA el array vacio
    constructor() {
      this.#productos = [];
    }
    //Método get que retorna el arreglo de objetos.
    get sotano() {
      return this.#productos
    }
  
    otroProducto() {
      let producto = new TiendaVendedor();
      producto.setNombreVendedor = nombre;
      producto.setNombreProducto = validacionTexto('Nombre del producto: ')
      producto.setCantidadProducto = validacionNumero('Cantidad por unidades: ');
      producto.setPrecioProducto = validacionNumero('Precio por unidad: ');
  
      this.#productos.push(producto);
      return producto;
    };
  
  }

  // se guarda la funcion en la variable nombre
  //nombre = capturaNombreVendedor();
  var nombre = validacionTexto('Nombre del vendedor: ');

  //Se crean bucles do while para registrar los productos
  let almacena = new ProductosVendedor;
  do {
  
  /*
  La nueva variable almacena captura los atributops de la clase 
  ProductosVendedor.
  Se crea un do...while para saber si desea agragar o no un nuevo 
  producto*/
    do {
      almacena.otroProducto(nombre);
      var respuesta = confirm('¿Tiene un nuevo producto?');
    } while (respuesta);
    console.log("")
    console.log('Nombre del Vendedor: ' + almacena.sotano[0].getNombreVendedor);
  
    let i = 0;
    let vender = 0;
  
    //se hace la funcion flecha para que me recorra el arreglo y me lo muestre todo al final
  
    almacena.sotano.forEach(producto => {
      i++;
      console.log(i + ". " + producto.getNombreProducto + " " + producto.getCantidadProducto + " " + producto.getPrecioProducto)
  
    });
  
  } while (respuesta)


  //Se crea una clase llamada TiendaCliente.
  class TiendaCliente {
  /*Propiedades :: Atributos
  #: Significa el encapsulamiento = El usuario no lo ve, pero los metodos 
  get y set si pueden modificarlo y capturar un valor.*/
    #nombreCliente
    #nomProCliente
    #cantidadCliente
    #precioCliente
  
  /*Método constructor: Asigna valores iniciales a las propiedades.
  "": Porqué los datos que va a capturar son de tipo string.
  0: Porqué los datos que va a capturar son de tipo númerico.
  El método constructor se ejecuta cuando...se usa la palabra 
  new y la referencia de la clase. */
    constructor() {
      this.#nombreCliente = "";
      this.#nomProCliente = "";
      this.#cantidadCliente = 0;
      this.#precioCliente = 0; 
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
    get getNomProCliente() {
      return this.#nomProCliente;
    }
  
//set: Para asignar un valor.
    set setNomProCliente(value) {
      this.#nomProCliente = value;
    }
  
//get: Para mostrar el artributo.
    get getCantidadCliente() {
      return this.#cantidadCliente;
    }
  
//set: Para asignar un valor.
    set setCantidadCliente(value) {
      this.#cantidadCliente = value;
    }

//get: Para mostrar el artributo.
    get getPrecioProductoClient() {
      return this.#precioCliente;
    }

//set: Para asignar un valor.
    set setPrecioProductoClient(value) {
      this.#precioCliente = value;
    }
  }
  
/*ClienteProducto: Es para guardar en un arreglo los objetos que 
se van seleccionamdo de TiendaCliente.*/
  class ClienteProducto {
  /*Propiedades :: Atributos
  #: Significa el encapsulamiento = El usuario no lo ve, pero 
  los metodos get y set si pueden modificarlo y asignar un valor.
  []:Significa que hay un array o arreglo
  #productos: es un array, encapsulado...todo lo que el cliente 
  seleccione se captura en array.*/
    #productoCliente = [];
    //Método constructor...CREA el array vacio
    constructor() {
      this.#productoCliente = [];
    }
  
    //se crea get sotanoCliente 
    get sotanoCliente() {
      return this.#productoCliente
    }
  
    //metodo para crear la comparación entre lo que digita el cliente con lo del vendedor
    loDigitado() {
      do {
        let pedido = new TiendaCliente;
        pedido.setNombreCliente = nombreCli;
        do {
        //
        let encargo=true;
        pedido.setNomProCliente = capturaNombreProducto()
        //for para recorrer el arreglo e ir comparando cada objeto
        for(let producto of almacena.sotano ){
          //Validacion de datos (el nombre del producto que quiere el usuario debe ser igual al que establece el vendedor)
          if (pedido.getNomProCliente === producto.getNombreProducto) {
            //
            pedido.setCantidadCliente = capturaCantidadCliente();
            //Validacion de la cantidad disponible con la que quiere comprar el cliente
            if (pedido.getCantidadCliente <= producto.getCantidadProducto) {
              //
              pedido.setPrecioProductoClient = pedido.getCantidadCliente * producto.getPrecioProducto
              //            
              producto.setCantidadProducto= producto.getCantidadProducto - pedido.getCantidadCliente 
  
              //enviamos el arreglo del cliente a pedido
              this.#productoCliente.push(pedido);
              
              encargo=false
              sw = false
              break
            }
              //si el cliente quiere comprar mas productos de los que hay en bodega nos muestra que no hay tantos productos
            else {
              console.log('Haz superado la cantidad almacenada...')
              encargo=false
              break
            }
    
          } else {
            let encargo=true;
              
          } 
        }
          //bandera = true, por ende el true es para identificar que no hay un producto 
          
        if(encargo){
          console.log("No está disponible")
        }
      
      } while (sw)
        //preguntamos si el cliente quiere comprar mas productos
      respuesta = confirm("¿Desea otro producto?")
      if(respuesta){
        sw=true
      } 
      //en caso de que el cliente desee comprar mas productos, se repite el proceso
    } while (respuesta);
      
    };
  
  }
  
  let nombreCli = "";
  let sw = true;
  //Captura nombre del cleinte
  function capturaNombreCliente() {
      //almacenamos el nombre del cliente
      let nombreCli = validacionTexto("\n" + 'Nombre del Cliente: ');
        return nombreCli; 
  }
  nombreCli = capturaNombreCliente();

  //capturar nombre del producto
  function capturaNombreProducto() {
    let nProducto = validacionTexto('Nombre del producto: ')
    return nProducto
  }
  
  
  //captura cantidad de productos que quiere comprar el cliente
  function capturaCantidadCliente() {
    let nCProducto = validacionNumero('Cantidad a llevar: ')
    return Number(nCProducto)
  }
  
  
  //multiplicacion para obtener el precio total 
  function multiplicacionCantidad(producto, clienteCanProduc,nomProducCliente) {
    let cCliente = clienteCanProduc * producto.getPrecioProducto
    return cCliente;
  }
  
  
  //imprimimos la factura
  let compras = new ClienteProducto
  compras.loDigitado(nombreCli)
  //imprimimos el nombre del cliente
  console.log("\n" + "Nombre Del Cliente:" + compras.sotanoCliente[0].getNombreCliente, )
  
  console.log('|    PRODUCTO    | CANTIDAD |  TOTAL  |')
  //variable para obtener el total a pagar
  let suma=0
  //forEach para recorrer el arreglo y funcion flecha para obtener los objetos y acceder a ellos
  compras.sotanoCliente.forEach(key => {
    //imprimimos la factura            
    console.log( "|    ",key.getNomProCliente,"    |    ", 
    key.getCantidadCliente,"    |   $ ",
    key.getPrecioProductoClient,"     ")
  
    //variable suma para generar el total a pagar
    suma=suma+key.getPrecioProductoClient
    
  });
  //imprimimos el valor total 
  console.log("Total De Su Pago:" + " $", suma)
  //agradecemos al cliente por ser un crack y haber comprado en nuestra tienda
  console.log("\n" + "¡¡Gracias por su compra, Vuelva Pronto!!")