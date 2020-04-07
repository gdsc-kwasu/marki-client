/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react' 
import { Link } from 'react-router-dom'
import Background from './Background'


export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmailInput = this.handleEmailInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    togglePassword() {
        this.pwdField = document.getElementById('password')
        if (this.pwdField === 'password') {
            this.pwdField.type = 'text'
        } else {
            this.pwdField.type = 'password'
        }
    }

    handleSubmit(e) {
        e.preventDefault() // prevents the browser from reloading on submit
        const { email } = this.state
        alert(`Welcome 🤝 ${email}`) 
    }

    
    render() {
    // destructuring assignment
        const { email } = this.state
        const { password } = this.state

        return (
            <div className="container--reg">
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
                                value={ email }
                                onChange={this.handleEmailInput}
                                required 
                            />
                        </div>
                        <div className="password">
                            <div className="label-for-password label">
                                <label For="password">Enter your preferred password</label>
                            </div>
                            <input 
                                type='password' 
                                name="password" 
                                id="password" 
                                className="form--control"
                                value={ password }
                                onChange={this.handlePasswordInput}
                            />
                            <span role="button" toggle="#password" tabIndex={0} className="fas fa-eye" onClick={this.togglePassword} onKeyPress={this.handleKeyPress}></span>
                        </div>
                        <p className="pwd-details">Let it include lowercase, uppercase and number</p>
                        <input type="button" onClick={this.handleSubmit} className="btn-reg btn-primary signUp-btn" value="Sign up"/>
                        <p className="sign-in">
                            Have an account already, <Link to="/login" className="login">login</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}