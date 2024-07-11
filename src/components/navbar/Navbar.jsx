import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-white sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
            <a href="index.html" className="anchor navbar-brand d-lg-none">
              <img className="logo" src={logo} alt="logo" />
              {/* <h1 className="name fw-bold m-2">Isiak Olaniyan</h1> */}
            </a>

            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <Link to="/" className="a nav-item nav-link active">
                  HOME
                </Link>
                <Link to="/blog" className="nav-item nav-link active">
                  START A BLOG
                </Link>
                <Link to="/youtube" className="nav-item nav-link">
                  START A YOUTUBE CHANNEL
                </Link>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    PRODUCTS
                  </a>
                  <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                    <Link to="/ai" className="dropdown-item">
                      AI Income Blueprint (New)
                    </Link>
                    <Link to="/income" className="dropdown-item">
                      Income University
                    </Link>
                  </div>
                </div>
                <Link to="/story" className="nav-item nav-link">
                  MY STORY
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  CONTACT
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
