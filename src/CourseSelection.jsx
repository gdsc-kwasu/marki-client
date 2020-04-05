import React, { useState } from "react";
import Container from "./components/Container";

const CourseSelection = () => {
    const [course, setCourse] = useState("");
    const [student, setStudent] = useState("");

    return (
        <Container>
            <div className="selection--container z-index">
                <div className="form-group my">
                    <select
                        name="course"
                        id="course"
                        className="text-primary form-control form--large"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        onBlur={(e) => setCourse(e.target.value)}
                    >
                        <option value="Select Course">Select Course</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className="form-group my">
                    <input
                        type="text"
                        className="form-control form--large"
                        list="names"
                        placeholder="Search Student"
                        value={student}
                        onChange={(e) => setStudent(e.target.value)}
                    />
                    <button type='submit' className='icon--brandname'>
                        <i className="fas fa-microphone text-primary "></i>
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default CourseSelection;
