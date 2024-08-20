import "./Footer.scss";

import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <NavLink to="/">
          <img src="/src/assets/icons/home.svg" alt="home-house" />
        </NavLink>
        <NavLink to="/addProject">
          <div className="project__add">
            <button type="button" className="project__add--button">
              +
            </button>
          </div>
        </NavLink>
        <NavLink to="/prompt">
          {/* <button type="button" className="auto-button"> */}
          <img src="/src/assets/icons/automation.svg" alt="automation-icon" />
        </NavLink>
        {/* </button> */}
      </footer>
    </>
  );
};
