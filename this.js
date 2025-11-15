// this function

const user = {
    username: "tony stark",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);        // here the user name is set to tony stark
        console.log(this);  // give the current context and the updated context i.e username changed to gaurav
    }
}
user.welcomeMessage();      // username tony stark will print
user.username = "gaurav"
user.welcomeMessage();      // will give the name gaurav

console.log(this);  // gives window
