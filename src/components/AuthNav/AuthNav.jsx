import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className="authNav">
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
