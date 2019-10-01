import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <h2 className="mb-4">Contact</h2>
          <p>
            En este apartado podrás realizar tus preguntas en relación a la
            aplicación, o si encuentras un error por favor avisarnos,
            responderemos lo antes posible.
          </p>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo Electrónico"
              />
            </div>
            <div className="form-group">
              <select className="form-control">
                <option>-- Elige un servicio --</option>
                <option>Cliente</option>
                <option>Soporte</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Escribe aquí tus inquietudes"
              ></textarea>
            </div>
            <button className="btn bg-orange btn-lg text-white">Enviar</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;