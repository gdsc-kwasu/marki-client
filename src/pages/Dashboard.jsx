import React, { useState } from "react";
import DashboardContainer from "../components/DashboardContainer";
import AttendanceTable from "../components/AttendanceTable";
import Input from "../components/Input";
import UserProfile from '../components/UserProfile'

const Dashboard = () => {
    const [studentName, setStudentName] = useState("");
    return (
        <DashboardContainer>
            <Input value={studentName} setValue={setStudentName} />
            <UserProfile />
            <AttendanceTable />
        </DashboardContainer>
    );
};

export default Dashboard;
