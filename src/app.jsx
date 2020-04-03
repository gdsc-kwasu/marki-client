import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import "./styles/app.scss";
import SearchPage from "./components/SearchPage";
import Dashboard from './components/Dashboard'

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <Route exact path='/' component={SearchPage} />
                <Route path='/dashboard' component={Dashboard} />
            </React.Fragment>
        </Router>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
