import React, { Component } from "react";
import Avatar from "../images/avatar.png";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "",
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({ studentName: e.target.value });
    }

    render() {
        const { studentName } = this.state;
        return (
            <React.Fragment>
                <div className="container bg-dark vh-100">
                    
                    <div className="row vh-80 vh-sm-100 vh-md-90">
                        <div className="col-4 col-sm-12 col-md-6 bg-white shadow shadow-sm-none">
                            <h3 className="text-primary px">marki.io</h3>
                            <div className="form--container justify-item-center">
                                <input
                                    type="text"
                                    className="form-control border-radius form--large datalist"
                                    list="names"
                                    placeholder="Search Student"
                                    value={studentName}
                                    onChange={this.handleInput}
                                />
                                <datalist id="names">
                                    <option value="Strawberry">
                                        Strawberry
                                    </option>
                                    <option value="Watermelon">
                                        Watermelon
                                    </option>
                                </datalist>
                                <i className="fas fa-microphone text-primary icon--brand"></i>
                            </div>
                            <div className="user--profile mt">
                                <img
                                    src={Avatar}
                                    alt="User\'s Profile"
                                    className="user--avatar justify-item-center"
                                />
                                <h4 className="text-center user--name">
                                    Adewole Kemisola
                                </h4>
                                <p className="text-center">
                                    Computer Science <br />
                                    300L
                                </p>
                            </div>
                            <div className="horizontal-rule"></div>
                            <div className="section px">
                                <h4 className="user--name">Section</h4>
                                <p className="mt">Web Dev</p>
                            </div>
                            <div className="horizontal-rule"></div>
                            <button
                                className="btn btn-sm btn-secondary justify-item-center my"
                                type="submit"
                            >
                                Present
                            </button>
                            <table className="px">
                                <tr>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                    <td>
                                        <span className="checked"></span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
