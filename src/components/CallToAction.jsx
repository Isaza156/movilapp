import React from 'react';
//import '../global.css';

class CallToAction extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid text-center ">
                <i className="fas fa-plus-circle fa-3x color-orange mb-3"></i>
                <p>Agregar</p>
                </div>
            </React.Fragment>
        );
    }
}

export default CallToAction;