function login(username) {
    if(username === undefined) {
        console.log("please enter your name");
    } else {
        console.log(`welcome dear ${username}`);
    }
} login();
login("gaurav");