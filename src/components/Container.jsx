import React from "react";
import Logo from "../images/logo.png";
import Marki from "../images/marki.png";

const Container = ({ children }) => {
    return (
        <React.Fragment>
            <div className="container bg-dark vh-100">
                <div className="position--absolute">Marki.io</div>
                <div className="row">
                    <div className="col-4 col-sm-12 col-md-6 view--height__max bg-white shadow shadow-sm-none">
                        <div className="outer-circle"></div>
                        <div className="inner-circle"></div>
                        <div className="innermost-circle"></div>
                        <div className="logo--container p">
                            <img src={Logo} className="logo" alt="logo" />
                            <img src={Marki} className="marki ml" alt="marki" />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Container;
