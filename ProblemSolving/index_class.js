// necesitamos construir una solución para atender clientes en una tienda
// que el cliente realmente necesita 
// se debe atender de forma ordenada
// el pago total por cada cliente 
// retornar la factura (se retira al cliente de la fila)
// calcular el total de ventas de la tienda 
// tenemos toda la información

// entradas: clientes, productos (precio), cantidad de productos
// salidas: la venta a un cliente, las ventas del dia 
// entradas --> salida ? si podemos determinar 



// como cajero del "sales_software" quiero atender clientes 
// y calcular el valor de los productos adquiridos
// para facturar su compra
// criterios de aceptación
// para facturar se debe tener el nombre del producto, 
// el codigo y la cantidad comprada
// si no se cuenta con esa información el programa deberia retornar un error 
// test unitarios (obligatorio) --> Automaticas
// cliente A: 10, papas, 1000 => 10000
// cliente A: 10, ____, 1000 => error "debe especificar el nombre del producto"

// fila de clientes
let superMarketQueue = [];
// ventas totales 
let totalSales = 0;

// definir un producto (precio, id, nombre)
function createProduct (id, name, price) {
    return {
    	id,
        name,
        price 
    };
}
// definir un cliente (nombre, id)
function createClient (fullName, id) {
    return {
        fullName,
        id,
        basket: []
    };
}
// basket: canasta
// añadirAcanasta (cantidad de productos)
function addProductToBasket (client, product, quantity){
	let newProductSelected =  {
		product, 
		quantity
	};
	client.basket.push(newProductSelected);
    return client.basket;
};

// hacerLaFila --> enqueue
function addClientInQueue (client){
    superMarketQueue.unshift(client)
};

// la factura, atender al cliente
function serveClient () {
    if (superMarketQueue.length <= 0) {
        console.info('no clients in queue');
        return;
    }
    // invoice => factura 
    let invoiceValue = 0;
    const currentClient = superMarketQueue.pop();
    console.info('Registering products for: ', currentClient.fullName);
    for (const purchasedProduct of currentClient.basket) {
        let currentProductTotal = (purchasedProduct.product.price * purchasedProduct.quantity);
        invoiceValue += currentProductTotal;
        console.info(`purchased: ${purchasedProduct.quantity} ${purchasedProduct.product.name}  for ${currentProductTotal}`);
    }
    console.info(`Your total is: ${invoiceValue}, thanks for coming`);
    totalSales += invoiceValue;
    return superMarketQueue;
};