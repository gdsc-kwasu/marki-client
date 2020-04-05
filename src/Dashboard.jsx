import React, { useState } from "react";
import Container from "./components/Container";
import AttendanceTable from "./components/AttendanceTable";
import Input from "./components/Input";
import UserProfile from './components/UserProfile'

const Dashboard = () => {
    const [studentName, setStudentName] = useState("");
    return (
        <Container>
            <Input value={studentName} setValue={setStudentName} />
            <UserProfile />
            <AttendanceTable />
        </Container>
    );
};

export default Dashboard;
