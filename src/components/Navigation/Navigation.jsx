import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const isLogged = useSelector(selectLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}
