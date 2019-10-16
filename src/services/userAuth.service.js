function userAuth() {
    let userIsAuth = false;
    let userId = "";
    let userData = "";
    const mainUrl = 'https://aka-geek.appspot.com'

    this.getAuth = function () {
        // publicly available method that a bird object can use
        return userIsAuth;
    };

    this.getUserData = function () {
        // publicly available method that a bird object can use
        return userId;
    };

    this.setAuth = async function (data) {
        try {
            const url = `${mainUrl}/api/usuarios/login`;
            const response = await fetch(url, {
                method: "POST",
                cache: "no-cache",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            let authData = await response.json();

            if (response.status === 400) return authData.authRes;

            userIsAuth = true;
            userId = authData;
            return userIsAuth;
        } catch (err) {
            console.error(err);
        }
    };

    this.register = async  function (user) {
        try {
            let response = await fetch(
                `${mainUrl}/api/usuarios`,
              {
                method: "POST",
                body: JSON.stringify(user), // data can be `string` or {object}!
                headers: {
                  "Content-Type": "application/json"
                }
              }
            );
            let data = await response.json();
            if(response.status === 400) return { error: true, message: data.error}
            return { error: false, id: data}
          } catch (error) {
      
            console.error(error);
      
          }
    }

    this.setHardAuth = ()=>{
        userIsAuth = true;
    }

    this.setId = function (id) {
         userId = id;
    };

    this.getId = function () {
        return userId;
    };

    this.logout = function () {
        userIsAuth = false;
    };
}

export default new userAuth();
