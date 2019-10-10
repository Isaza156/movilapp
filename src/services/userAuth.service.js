function userAuth() {

    let userIsAuth = true
    let uid =  "5d9f516d88727d0d3635678b"

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