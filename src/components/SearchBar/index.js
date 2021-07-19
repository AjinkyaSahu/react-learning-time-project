import React, { useState, useEffect, useRef } from "react";
import { Content, Wrapper } from "./SearchBar.styles";

import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearchTerm }) => {
    const [state, setstate] = useState("");

    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="Search-Bar" />
                <input
                    type="text"
                    placeholder="Search Movies Here"
                    onChange={(e) => setstate(e.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
