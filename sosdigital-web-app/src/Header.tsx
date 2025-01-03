import { NavLink } from "react-router-dom";


function Header() {
  return <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

        <span className="fs-4">Sos Digital</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"> <NavLink className="nav-link" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/testclock">Test</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/studentreport">Reports</NavLink></li>
      </ul>
    </header>
  </div>;

}



export default Header;