/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

const products = new Map();

products.set("soda", 7);
products.set("juice", 5);
products.set("cookie", 3);
products.set("candy", 1);

for (const x of products.values()) {
    result.push(x);
}

//export result
module.exports = result;