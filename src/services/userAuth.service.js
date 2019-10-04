function userAuth() {

    let userIsAuth = true

    this.getAuth = function () { // publicly available method that a bird object can use
        return userIsAuth;
    };
    this.setAuth = function () {
        userIsAuth = true
    }
}

export default new userAuth()