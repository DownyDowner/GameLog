import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../router/Routes";
import Icon from "@mdi/react";
import { mdiHome, mdiLogout } from "@mdi/js";
import { useAuthContext } from "../context/AuthContext";

function AdminNavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  const navItems = [{ path: ROUTES.HOME, icon: mdiHome, label: "Home" }];

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      {/* Sidebar for md and more */}
      <div className="d-none d-md-flex flex-column bg-dark text-white postion-fixed p-4 vh-100">
        <div className="text-center mb-4 d-none d-lg-block">
          <h5 className="text-white">GameLog</h5>
        </div>

        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className={`text-white text-decoration-none d-flex align-items-center mb-3 ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <Icon path={item.icon} size={1} />
            <span className="ms-2 d-none d-lg-inline">{item.label}</span>
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="btn btn-outline-light mt-auto d-flex align-items-center"
        >
          <Icon path={mdiLogout} size={1} />
          <span className="ms-2 d-none d-lg-inline">Logout</span>
        </button>
      </div>

      {/* Bottom nav mobile */}
      <div className="mobile-nav d-flex d-md-none justify-content-around bg-dark text-white py-2 fixed-bottom border-top">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <Icon path={item.icon} size={1} />
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="btn text-white p-0"
          style={{ background: "none", border: "none" }}
        >
          <Icon path={mdiLogout} size={1} />
        </button>
      </div>
    </>
  );
}

export default AdminNavBar;
