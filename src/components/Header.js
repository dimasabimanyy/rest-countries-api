import React from "react";

const Header = ({ darkMode, modeChanger }) => {
  return (
    <header className={`${darkMode ? `charcoal` : `light`}`}>
      <div className="header-wrapper container">
        <h2>Where in the world ?</h2>
        <button
          className={`${darkMode ? `charcoal` : `light`}`}
          onClick={modeChanger}
        >
          {darkMode ? (
            <span>
              <i className="fas fa-moon"></i> Light Mode
            </span>
          ) : (
            <span>
              <i className="far fa-moon"></i> Dark Mode
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
