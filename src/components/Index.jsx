import React from 'react' 
import { Link } from 'react-router-dom'
import Background from './Background'


const Index = () => {
    return (
        <div className="container">
            <Background />
            <div className="landing-description">
                <p className="text-primary">
                    Time is now for organized row-calls without wahala.
                </p>
                <Link to="/Register" className="register">
                    <input type="button" className="btn btn-primary" value="Get started" />
                </Link>
                <p className="sign-in">
                    Have an account already, <Link to="/login" className="login">login</Link>
                </p>
            </div>
        </div>    
    )
}

export default Index