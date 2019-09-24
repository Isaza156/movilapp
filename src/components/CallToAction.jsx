import React from 'react';
//import '../global.css';

class CallToAction extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid text-center">
                <i class="fas fa-plus-circle fa-3x color-orange "></i>
                <p>Agregar</p>
                </div>
            </React.Fragment>
        );
    }
}

export default CallToAction;