import React from "react";

function Search({ search, onSearchChange}) {
    return (
        <nav>
            <input
                type="text"
                name="search"
                placeholder="Search Conversation"
                autoComplete="on"
                value={search}
                onChange={event => onSearchChange(event.target.value)}
            />
        </nav>
    );
}

export default Search;