class BankAccount{
    #balance=0;
     deposite(amount){
        this.#balance=+amount;
        return this.#balance;
    }
    getbalance(){
        return `$ ${this.#balance}`
    }
}
let acc=new BankAccount()
console.log(acc.deposite(30000));


console.log(acc.getbalance());
