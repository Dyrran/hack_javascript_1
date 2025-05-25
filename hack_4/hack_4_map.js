/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

const values = new Map();

values.set("uno", 1);
values.set("tres", 3);
values.set("cinco", 5);
values.set("siete", 7);

for (const x of values.values()) {
    result.push(x);
}

//export result
module.exports = result;