import React from "react";


const LandingContainer = ({ children }) => {
    return (
        <div className="container vh-100">
            <div className="row position--relative overflow vh-100">
                <div className="in"></div>
                <div className="out"></div>
                
                <div className="col-12 col-lg-6 px-2 px-lg-4 z-index align-self-center">
                    {children}
                </div>
                <div className="col-12 col-lg-6 bg--avatar vh-100 d-sm-none"></div>
            </div>
        </div>
    );
};

export default LandingContainer;
