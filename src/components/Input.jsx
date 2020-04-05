import React from "react";

const Input = ({ value, setValue }) => {
    return (
        <div className="justify-item-center">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control border-radius datalist"
                    list="names"
                    placeholder="Search Student"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <datalist id="names">
                    <option value="Strawberry">Strawberry</option>
                    <option value="Watermelon">Watermelon</option>
                </datalist>
                <button className="icon--brand" type="submit">
                    <i className="fas fa-microphone text-primary"></i>
                </button>
            </div>
        </div>
    );
};

export default Input;
