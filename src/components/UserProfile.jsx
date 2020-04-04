import React from "react";
import Avatar from "../images/avatar.png";

const UserProfile = () => {
    return (
        <React.Fragment>
            <div className="user--profile mt">
                <img
                    src={Avatar}
                    alt="User\'s Profile"
                    className="user--avatar justify-item-center"
                />
                <h4 className="text-center user--name">Adewole Kemisola</h4>
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
        </React.Fragment>
    );
};

export default UserProfile;
