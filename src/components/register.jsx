/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react' 
import { Link } from 'react-router-dom'
import Background from './background'


export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
        this.handleEmailInput = this.handleEmailInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.togglePassword = this.togglePassword.bind(this)
    }

    handleEmailInput(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordInput(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault() // prevents the browser from reloading on submit
        const { email} = this.state
        alert(`Welcome 🤝 ${email}`) 
    }

    
    render() {
        return (
            <div className="container">
            <Background />
                <div className="register-description">
                    <p className="text-primary">Welcome to Marki!</p>
                    <div className="brief">
                        <p>
                            Now you'll be able to mark attendance at your class and events with no stress.
                        </p>
                    </div>
                    <form action="" method="POST" onSubmit={this.handleSubmit}>
                        <div className="email">
                            <div className="label-for-email label">
                                <label For="email">Enter your email address</label>
                            </div>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="form--control"
                                value={this.state.email}
                                onChange={this.handleEmailInput}
                                required 
                            />
                        </div>
                        <div className="password">
                            <div className="label-for-password label">
                                <label For="password">Enter your preferred password</label>
                            </div>
                            <input 
                                type={this.state.hidden ? "pssword" : "text"} 
                                name="password" 
                                id="email" 
                                className="form--control"
                                value={this.state.password}
                                onChange={this.handlePasswordInput}
                                required 
                            />
                            <span><i className="fas fa-eye"></i></span>
                        </div>
                        <p className="pwd-details">Let it include lowercase, uppercase and number</p>
                        <button className="btn btn-primary signUp-btn">Sign up</button>
                        <p className="sign-in">
                            Have an account already, <Link to="/login" className="login">login</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}