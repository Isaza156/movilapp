import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer bg-light">
                    <div className="container text-center ">
                        <div className="row">
                            <div className="col-4 col-md-4">
                            <i className="fas fa-road color-orange"></i>
                            <p>Trayectos</p>
                            </div>
                            <div className="col-4 col-md-4">
                            <i className="fas fa-home color-orange"></i>
                            <p>Inicio</p>
                            </div>
                            <div className="col-4 col-md-4">
                            <i className="fas fa-paper-plane color-orange"></i>
                            <p>Pqrs</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;