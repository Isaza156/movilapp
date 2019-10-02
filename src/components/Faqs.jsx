import React from "react";

class Faqs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5 mx-auto">
            <h2 className="my-5 text-center">Preguntas frecuentes</h2>
          <div className="accordion" id="accordionExample">
            <div className="card">
            <div className="card-header bg-orange" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed text-white font-weight-bold"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ¿ Que es MovilApp ?
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Somos una App hecha para escuchar quejas y sugerencias sobre la movilidad en la ciudad, esto con el fin de llevar estas quejas o sugerencias a las entidades encargadas de estos problemas, así de algún modo haremos que mejoren la calidad de su servicio, por ejemplo el metro, los taxis, medios de transporte habituales.
                </div>
              </div>
            </div>
            <div className="card">
            <div className="card-header bg-orange" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed text-white font-weight-bold"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ¿ Como puedo hacer una queja o una sugerencia ?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Dirigete al inicio de nuesta aplicación, allí encontraras el apartado de Quejas y Sugerencias, presionas el botón +, seleccionas quien quiere que te escuche, escribes tu queja o sugerencia y le das enviar. También podrás ver los comentarios de otros usuarios, apoyarlos con un like o comentarlos.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header bg-orange" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed text-white font-weight-bold"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ¿ Quien escuchará mis quejas o sugerencias ?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Cuando dispones a realizar una queja o sugerencia, te preguntaremos a quien va dirigida, entre estas opciones tenemos: Metro, Taxis, Policia, Tránsito, Alcaldía, Gobernación, Ciclo rutas, Alimentadores, Metroplus. Nosotros nos encargaremos de llevar tu comentario a estas entidades con el fin de mejorar el servicio.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header bg-orange" id="heading4">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed text-white font-weight-bold"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    ¿ Puedo publicar mis quejas o sugerencias anonimamente ?
                  </button>
                </h2>
              </div>
              <div
                id="collapse4"
                className="collapse"
                aria-labelledby="heading4"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Si. todos nuestros usuarios tienen un "Alias", así tus quejas o sugerencias serán totalmente anonimas, no queremos exponerte, nuestro único objetivo es mejorar la movilidad en nuestra ciudad.
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Faqs;
