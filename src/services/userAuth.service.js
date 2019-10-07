function userAuth() {

    let userIsAuth = true
    let uid =  "d9a1e65b36dac1f21e6c2be"

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