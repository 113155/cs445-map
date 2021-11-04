/**
 * exercise2.js
 */

Array.prototype.removeDuplicatesAsync = () => {
    new Promise(function (resolve) {
        setTimeout(() => {
            let uniqueArray = [];
            for (let value of array) {
                if (uniqueArray.indexOf(value) === -1) {
                    uniqueArray.push(value);
                }
            }
            resolve(uniqueArray);
        })

    }).then(result => console.log(result));
}
console.log('start');
let array = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];
array.removeDuplicatesAsync();
console.log('end');