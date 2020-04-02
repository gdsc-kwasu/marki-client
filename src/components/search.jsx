import React, { Component } from "react";

class Search extends Component {
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
                    <div className="absolute-position">marki.io</div>
                    <div className="row vh-75 vh-90">
                        <div className="col-4 col-md-4 bg-white shadow px">
                            <h3 className="text-primary">marki.io</h3>
                            <div className="form--container justify-item-center">
                                <input
                                    type="text"
                                    className="form-control form-large"
                                    value={search}
                                    onChange={this.handleInput}
                                />
                                <i className="fas fa-microphone text-primary icon--brand"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Search;
