import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/auth">Login</Link>
        {user.rol === "admin" && <Link to="admin-dashboard">Dashboard</Link>}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;