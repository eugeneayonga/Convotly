import React from "react";

function Header() { isDarkMode, onToggleDarkMode }) {
    return (
        <header>
            <h1>Convotly</h1>
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    name="dark-mode"
                    id="toggle-dark-mode"
                    checked={isDarkMode}
                    onChange={(event) => onToggleDarkMode(event.target.checked)}
                />
                <label htmlFor="toggle-dark-mode">Dark Mode</label>
            </div>
        </header>
    );
}

export default Header;