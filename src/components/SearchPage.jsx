import React, { Component } from "react";

class SearchPage extends Component {
    constructor (props) {
        super (props);
        this.state = {
            search: ""
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput (e) {
        this.setState({search: e.target.value})
    }

    render() {
        const {search} = this.state
        return (
            <React.Fragment>
                <div className="container bg-dark vh-100">
                    <div className="position--absolute">marki.io</div>
                    <div className="row vh-75 vh-sm-100">
                        <div className="col-4 col-sm-12 col-md-6 bg-white shadow shadow-sm-none px">
                            <h3 className="text-primary">marki.io</h3>
                            <div className="form--container justify-item-center">
                                <input
                                    type="text"
                                    className="form-control form--large datalist"
                                    list="names"
                                    placeholder="Search Student"
                                    value={search}
                                    onChange={this.handleInput}
                                />
                                <datalist id="names">
                                    <option value="Strawberry">Strawberry</option>
                                    <option value="Watermelon">Watermelon</option>
                                </datalist>
                                <i className="fas fa-microphone text-primary icon--brand"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchPage;
