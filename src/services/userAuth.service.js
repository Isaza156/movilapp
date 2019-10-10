function userAuth() {

    let userIsAuth = true
    let uid =  "5d9f4c883e5e7f0c36cea96d"

    this.getAuth = function () { // publicly available method that a bird object can use
        return userIsAuth;
    };
    this.setAuth = function () {
        userIsAuth = true
    }

    this.getId = function () {
        return uid;
    }
}

export default new userAuth()