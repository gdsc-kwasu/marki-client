import React from "react";
// import { Link } from 'react-router-dom'
// import Background from './Background'

const Index = () => {
    return (
        <div className="container vh-100">
            <div className="row position--relative overflow vh-100">
                <div className="in"></div>
                <div className="out"></div>
                <div className="col-12 col-lg-6 px-2 px-lg-4 z-index align-self-center">
                    <h1 className="text-primary">
                        Time is now for organized roll-calls without wahala
                    </h1>
                    <button className="btn btn-primary btn-lg btn-md" type="submit">
                        Get Started
                    </button>
                    <h2 className="font-weight-normal">
                        Have an account already,
                        <a href="x" className="text-primary">
                            Sign in
                        </a>
                    </h2>
                </div>
                <div className="col-12 col-lg-6 bg--avatar vh-100 d-sm-none"></div>
            </div>
        </div>
    );
};

export default Index;
