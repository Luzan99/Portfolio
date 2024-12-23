import React, { useState } from "react";
const Header = () => {
  const [activeLink, setactiveLink] = useState("home");
  const handleSetActiveLink = (link) => {
    setactiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a
          className="navbar-brand"
          href="home"
          onClick={() => handleSetActiveLink("home")}
        >
          My Protfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["home", "projects", "skills", "contact"].map((link) => (
              <li key={link} className="nav-item">
                <a
                  className={`nav-link ${activeLink === link ? "active" : ""}`}
                  href={`${link}`}
                  onClick={() => handleSetActiveLink(link)}
                >
                  {" "}
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
