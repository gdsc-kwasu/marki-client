import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/app.scss";
import CourseSelection from './CourseSelection'
import SearchPage from "./SearchPage";
import Dashboard from "./Dashboard";

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <Route exact path="/" component={CourseSelection} />
                <Route path="/search" component={SearchPage} />
                <Route path="/dashboard" component={Dashboard} />
            </React.Fragment>
        </Router>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
