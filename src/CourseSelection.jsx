import React, { useState } from "react";
import Container from "./components/Container";

const CourseSelection = () => {
    const [value, setValue] = useState("");
    return (
        <Container>
            <div className="selection--container">
                <div className='form-group my'>
                    <select name="course" id="course" className="text-primary form-control form--large">
                        <option value="Select Course">Select Course</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className='form-group my'>
                    <input
                        type="text"
                        className="form-control form--large"
                        list="names"
                        placeholder="Search Student"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <i className="fas fa-microphone text-primary icon--brandname"></i>
                </div>
            </div>
        </Container>
    );
};

export default CourseSelection;
