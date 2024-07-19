const user = {
    username:"adot",
    price: 544,

    welcomeMessage: function(){
        console.log(`${this.username} Welcome, the price is ${this.price}`)
    }
}

user.welcomeMessage()
user.username = "aditya"
user.welcomeMessage()