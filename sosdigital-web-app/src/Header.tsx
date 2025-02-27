
import { NavLink, useNavigate } from "react-router-dom";

import UserAuthcompoenent from "./UserAuthcompoenent";
import { app_base_path } from "./App";


function Header({
  manageUserId,
  userid,
}: {
  manageUserId: (_userid: number | undefined) => void;
  userid: number | undefined,
}) {

  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Sos Digital</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to={`${app_base_path}/`}>
              Home
            </NavLink>
          </li>

          {userid && <li className="nav-item">
            <NavLink className="nav-link" to={`${app_base_path}/testclock`}>
              Test
            </NavLink>
          </li>}
          {userid && <li className="nav-item">
            <NavLink className="nav-link" to={`${app_base_path}/studentreport`}>
              Reports
            </NavLink>
          </li>}

          {userid === undefined && <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
          </li>}
          {userid && <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              onClick={() => {
                manageUserId(undefined);
                navigate(`${app_base_path}/`);
              }}
            >
              Logout
            </button>
          </li>}

        </ul>
      </header>
      <UserAuthcompoenent manageUserId={manageUserId} />
    </div>
  );
}

export default Header;
