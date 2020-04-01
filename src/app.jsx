import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.scss";

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h1>
                    Marki{" "}
                    <span role="img" aria-label="check emoji">
                        &#9989;
                    </span>{" "}
                    is ready for design!!!
                </h1>
                <h3>Let's keep the dice rolling</h3>
                <h5>Oooo kana &#129322;</h5>
            </div>
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
