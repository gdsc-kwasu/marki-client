/* eslint-disable react/button-has-type */
import React from 'react' 
import { Link } from 'react-router-dom'
import Background from './background'


const Index = () => {
    return (
        <div className="container">
            <Background />
            <div className="landing-description">
                <p className="text-primary">
                    Time is now for organized row-calls without wahala.
                </p>
                <button className="btn btn-primary">
                    <Link to="/register" className="register">Get started</Link>
                </button>
                <p className="sign-in">
                    Have an account already, <Link to="/login" className="login">login</Link>
                </p>
            </div>
        </div>    
    )
}

export default Index