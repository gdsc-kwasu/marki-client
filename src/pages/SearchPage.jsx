import React, { useState } from "react";
import DashboardContainer from "../components/DashboardContainer";
import Input from "../components/Input";

const SearchPage = () => {
    const [search, setSearch] = useState("");

    return (
        <DashboardContainer>
            <Input value={search} setValue={setSearch} />
        </DashboardContainer>
    );
};

export default SearchPage;
