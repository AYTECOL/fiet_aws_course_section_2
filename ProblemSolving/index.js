let superMarketQueue = []
let totalSales = 0

function addProductToBasket (purchaseProducts, product, quantity){
    purchaseProducts.push({
        product,
        quantity
    });
    return purchaseProducts;
};

function createProduct (name, price) {
    return {
        name,
        price 
    }
}

function createClient (fullName) {
    return {
        fullName,
        products: []
    };
}

function addClientInQueue (client){
    superMarketQueue.unshift(client)
};

function serveClient () {
    if (superMarketQueue.length <= 0) {
        console.info('no clients in queue');
        return;
    }
    let invoiceValue = 0;
    const currentClient = superMarketQueue.pop();
    console.info('Registering products for: ', currentClient.fullName);
    for (const purchasedProduct of currentClient.products) {
        let currentProductTotal = (purchasedProduct.product.price * purchasedProduct.quantity); 
        invoiceValue += currentProductTotal ;
        console.info(`purchased: ${purchasedProduct.quantity} ${purchasedProduct.product.name}  for ${currentProductTotal}`);
    }
    console.info(`Your total is: ${invoiceValue}, thanks for coming`);
    totalSales += invoiceValue;
    return superMarketQueue;
};

// client
// let clientA = createClient('pepe');
// let clientB = createClient('sara');
// let clientC = createClient('mateo');

// create products
// let productA = createProduct('potato', 2000)
// let productB = createProduct('milk', 2000)

// each client buys products
//clientA.products = addProductToBasket(clientA.products, productA, 10);
//clientB.products = addProductToBasket(clientB.products, productB, 2);
//clientB.products = addProductToBasket(clientB.products, productA, 1);
//addClientInQueue(clientB);
//addClientInQueue(clientA);
//serveClient();