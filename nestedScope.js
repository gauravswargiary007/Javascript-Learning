function one() {
    const username = "tony Stark";

    function two() {
        const website = "youtube";
        console.log(username);      // accesseible as username is globle within the function
    }
    two();
}
one(); 