interface Imyself{
    name: string; 
    bankAccount: any;
    hobbies: string[];
}
let bankAccount = { 
    money: 2000, 
    deposit(value) { 
        this.money += value; 
    } 
}; 
let myself: Imyself = { 
    name: "John", 
    bankAccount: bankAccount, 
    hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);