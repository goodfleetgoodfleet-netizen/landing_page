import React from "react";
import _nav from "./_nav";

const Navbar = () => {
  return (
    <header id="header" className="">
      <nav className="navbar navbar-expand-xl  fixed-top navbar-light bg-white ">
        <a
          className="navbar-brand logo"
          href="index.html"
          style={{ color: "#2481a7" }}
        >
          GPS
          <strong style={{ color: "#fab700", fontSize: "40px" }}>4</strong>
          WORLD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            {_nav.map((item) => (
              <li className="nav-item mr-3">
                <a className="nav-link" href={"#" + item.to}>
                  {item.name}
                </a>
              </li>
            ))}
            <li className="nav-item mr-4 mt-2">
              <a
                href="#appointment"
                className="bg-warning p-2 "
                style={{ borderRadius: "30px" }}
              >
                Demander Votre Devis
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
