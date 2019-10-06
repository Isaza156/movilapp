function userAuth() {

    let userIsAuth = false
    let userId = ""
    let userData = ""

    this.getAuth = function () { // publicly available method that a bird object can use
        return userIsAuth;
    };

    this.getUserData = function () { // publicly available method that a bird object can use
        return userId;
    };

    this.setAuth = async function (data) {
        try {
            const url = 'https://aka-geek.appspot.com/api/usuarios/login'
            const response = await fetch(url, {
                method: 'POST',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            let authData = await response.json()

            if (response.status == 400) return authData.authRes

            userIsAuth = true
            userId = authData
            return userIsAuth

        } catch (err) {
            console.error(err)
        }
    }
}

export default new userAuth()