import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.scss";
import Search from "./components/search";

const App = () => {
    return (
        <React.Fragment>
            <Search />
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
