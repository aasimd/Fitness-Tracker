import { NavLink } from "react-router-dom";
import "./NavBar.css";

const getActiveStyles = ({ isActive }) =>
  isActive ? { color: "red" } : { color: "black" };
export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div>
        <h2>My Fitness Tracker</h2>
      </div>
      <div>
        <ul>
          <li>
            <NavLink style={getActiveStyles} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={getActiveStyles} to="/exercises">
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink style={getActiveStyles} to="/goals">
              Goals
            </NavLink>
          </li>
          <li>
            <NavLink style={getActiveStyles} to="/foods">
              Foods
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
