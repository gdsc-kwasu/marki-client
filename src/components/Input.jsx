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
                <i className="fas fa-microphone text-primary icon--brand"></i>
            </div>
        </div>
    );
};

export default Input;
