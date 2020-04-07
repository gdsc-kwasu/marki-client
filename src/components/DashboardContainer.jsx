import React from "react";
import Logo from "../images/logo.png";
import Marki from "../images/marki.png";

const DashboardContainer = ({ children }) => {
    return (
        <React.Fragment>
            <div className="container bg-dark vh-100">
                <div className="row">
                    <div className="position--absolute">Marki.io</div>
                    <div className="col-12 col-md-8 col-lg-6 view--height__max bg-white pos-abs overflow shadow shadow-sm-none">
                        <div className="outer-circle"></div>
                        <div className="inner-circle"></div>
                        <div className="innermost-circle"></div>
                        <div className="logo--container p ">
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

export default DashboardContainer;
