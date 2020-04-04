import React, { useState } from "react";
import Container from "./components/Container";
import Input from "./components/Input";

const SearchPage = () => {
    const [search, setSearch] = useState("");

    return (
        <Container>
            <Input value={search} setValue={setSearch} />
        </Container>
    );
};

export default SearchPage;
