///////////mountains start
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
var findNameOfTallestMountain = function (mountains) {
    var peak = { name: "", height: 10 };
    mountains.forEach(function (i) {
        if (i.height > peak.height) {
            peak = i;
        }
    });
    return peak.name;
};
var products = [
    { name: "Jalepeno Chips", price: 2.5 },
    { name: "Kit Kat", price: 1.25 },
    { name: "Water", price: 1 }
];
var calcAverageProductPrice = function (products) {
    var total = 0;
    products.forEach(function (i) {
        total = total + i.price;
    });
    return total / products.length;
};
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
var inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 5 },
    { product: { name: "LED", price: 1 }, quantity: 20 },
];
var calcInventoryValue = function (inventory) {
    var example = 0;
    var total = 0;
    inventory.forEach(function (i) {
        example = i.product.price * i.quantity;
        total = total + example;
    });
    return total;
};
var inventoryTotal = calcInventoryValue(inventory);
console.log(inventoryTotal);
