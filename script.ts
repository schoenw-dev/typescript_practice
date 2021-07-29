
///////////mountains start

interface Mountain{
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];


var findNameOfTallestMountain = (mountains:Mountain[]):string => {
    var peak = {name: "", height: 10 };
    mountains.forEach(function (i){
        if(i.height > peak.height){
            peak = i;
        }
    });
    return peak.name;
};

//console.log(findNameOfTallestMountain(mountains));

///////////mountains end


///////////products start


interface Product{
    name: string;
    price: number;
}

const products: Product[] = [
    {name: "Jalepeno Chips", price: 2.5},
    {name: "Kit Kat", price: 1.25},
    {name: "Water", price: 1}
];

var calcAverageProductPrice = (products: Product[]): number => {
    var total = 0;
    products.forEach(function(i){
        total = total + i.price;
    });
    return total / products.length;
}

var averagePrice = calcAverageProductPrice(products);

console.log(averagePrice);

//////////// products end


//////////// inventory start

interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    {product:{name:"motor", price: 10}, quantity: 10},
    {product:{name:"sensor", price: 12.5}, quantity: 5},
    {product:{name:"LED", price: 1}, quantity: 20},
];

var calcInventoryValue = (inventory: InventoryItem[]): number =>{
    var example = 0;
    var total = 0;
    inventory.forEach((i) =>{
        example = i.product.price * i.quantity;
        total = total + example;
    });

    return total;
};

var inventoryTotal = calcInventoryValue(inventory);

console.log(inventoryTotal);