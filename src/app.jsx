import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./styles/app.scss";
import CourseSelection from './CourseSelection'
import SearchPage from "./SearchPage";
import Dashboard from "./Dashboard";
import Index from './components/Index';
import Notfound from './components/404';
import Register from './components/Register'
import Login from './components/Login';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/courses" component={CourseSelection} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/404" component={Notfound} />
                    <Redirect to="/404" />
                </Switch>
            </Router>        
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
