import React from "react";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <div class="bg-color-home">
            <div class="position-relative overflow-hidden p-3 p-md-5 text-center bg-home">
              <div class="col-md-5 p-lg-5 mx-auto my-5 bg-color-home">
                <h1 class="display-5 font-weight-normal  titulo-responsive">
                  Bienvenidos a MovilApp
                </h1>
                <p class="lead font-weight-normal"></p>
                <a
                  class="btn bg-orange text-white shadow font-weight-bold mt-4"
                  href="https://wa.me/"
                >
                  Tengo una idea
                </a>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
