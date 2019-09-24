import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer mt-auto py-3 bg-light fixed-bottom">
                    <div className="container justify-content-center ">
                        <div className="row">
                            <div className="col-4 col-md-4">
                            <i className="fas fa-road color-orange fa-2x"></i>
                            </div>
                            <div className="col-4 col-md-4">
                            <i className="fas fa-plus-circle color-orange fa-3x"></i>
                            </div>
                            <div className="col-4 col-md-4">
                            <i className="fas fa-paper-plane color-orange fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;