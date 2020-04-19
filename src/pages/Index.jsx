import React from "react";
import { Link } from "react-router-dom";
import LandingContainer from "../components/LandingContainer";
import Logo from "../images/logo.png";
import Marki from "../images/marki.png";

const Index = () => {
    return (
        <React.Fragment>
            <div className="brand--icon z-index position--absolute p">
                <img src={Logo} className="logo" alt="logo" />
                <img src={Marki} className="marki ml" alt="marki" />
            </div>
            <LandingContainer>
                <h1 className="text-primary">
                    Time is now for organized roll-calls without wahala
                </h1>
                <Link to="./register">
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Get Started
                    </button>
                </Link>

                <h2 className="font-weight-normal account">
                    Have an account already?
                    <Link to="./login" className="text-primary">
                        Login
                    </Link>
                </h2>
            </LandingContainer>
        </React.Fragment>
    );
};

export default Index;
