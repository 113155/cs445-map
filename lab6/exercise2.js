/**
 * exercise2.js
 */

async function removeDuplicates(array){
    let uniqueArray = [];
    for (let value of array) {
        if (uniqueArray.indexOf(value) === -1) {
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}
Array.prototype.removeDuplicatesAsync = async () => {
    let uniquearray = await removeDuplicates(array);
    console.log(uniquearray);
}

console.log('start');
let array = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];
array.removeDuplicatesAsync();
console.log('end');