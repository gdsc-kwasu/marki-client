import React, { useState } from "react";
import { Link } from "react-router-dom";
import LandingContainer from "../components/LandingContainer";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')

    return (
        <LandingContainer>
            <h2 className="text-primary font-weight-bolder">
                Welcome to Marki!
            </h2>
            <p className='hero-text font-weight-normal'>
                Now, you'll be able to mark attendance at your class and at
                events with ease and no stress
            </p>
            <div className="form-group">
                <label htmlFor="email">
                    Enter your email
                    <input
                        type="email"
                        className="form-control form--large border-radius mt form-md"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group mt">
                <label htmlFor="password">
                    Enter your preferred password
                    <input
                        type="password"
                        className="form-control form--large border-radius mt form-md"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                </label>
                <i className="fas fa-eye icon--brand icon--brand__reg text-primary"></i>
            </div>
            <small className="text-primary">
                Let it include lowercase, uppercase and number
            </small>
            <Link to="./courses">
                <button
                    className="btn btn-primary btn-lg btn-md mt-2"
                    type="submit"
                >
                    Get Started
                </button>
            </Link>
            <h3 className="font-weight-normal">
                Have an account already?
                <Link to="./login" className="text-primary pl">
                    Login
                </Link>
            </h3>
        </LandingContainer>
    );
};

export default Register;
