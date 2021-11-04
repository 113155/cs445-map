/**
 * exercise1.js
 */

async function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            throw new Error("{prime: false}");
        }
        else {
            return "{prime: true}";
        }
    }
}
async function isPrimeAsync(num) {
    let prime = await isPrime(num);
    console.log(prime);
}

console.log('start');
isPrimeAsync(7)
    .catch((error) => console.log(error.message))
    .finally(() => console.log('Finished!'))
console.log('end');
