import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.scss";
import SearchPage from "./components/SearchPage";

const App = () => {
    return (
        <React.Fragment>
            <SearchPage />
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
