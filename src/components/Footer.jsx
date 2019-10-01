import React from 'react';
import { Link } from "react-router-dom";
class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>          
                <footer className="footer bg-white border-top">                
                    <div className="container text-center ">
                        <div className="row">
                            <div className="col-4 col-md-4 pt-3 mb-2">
                            <i className="fas fa-road color-orange"></i>
                            <Link to="/" className="text-dark"> <br/> Trayectos </Link>
                            </div>
                            <div className="col-4 col-md-4 pt-3 mb-2">
                            <i className="fas fa-home color-orange"></i>
                            <Link to="/home" className="text-dark"> <br/> Inicio </Link>
                            </div>
                            <div className="col-4 col-md-4 pt-3 mb-2">
                            <i className="fas fa-paper-plane color-orange"></i>
                            <Link to="/listen" className="text-dark"> <br/> Pqrs </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;