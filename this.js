// this function
const user = {
    username: "tony stark",
    price: 999,
    welcomeMessage: function() {
        console.log(`hello ${this.username}, welcome to the website`);          // here the user name is set to tony stark
        console.log("and now the current context of the object is: ", this);    // gives the current context of the object                                              // gives the current context
    }
}
user.welcomeMessage();      // username tony stark will print
user.username = "gaurav"    // the username is updated in the object
user.welcomeMessage();      // will give the updated username i.e gaurav

console.log(this);  // empty object as it is in node environment but gives window in browser
