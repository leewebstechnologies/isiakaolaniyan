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
              <h1 className="name fw-bold m-2">Isiak Olaniyan</h1>
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
                <a href="index.html" className="nav-item nav-link active">
                  HOME
                </a>
                <a href="index.html" className="nav-item nav-link active">
                  START A BLOG
                </a>
                <a href="about.html" className="nav-item nav-link">
                  START A YOUTUBE CHANNEL
                </a>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    PRODUCTS
                  </a>
                  <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                    <a href="feature.html" className="dropdown-item">
                      AI Income Blueprint (New)
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Income University
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  MY STORY
                </a>
                <a href="contact.html" className="nav-item nav-link">
                  CONTACT
                </a>
              </div>
              {/* <div className="ms-auto d-none d-lg-block">
                <a href className="btn btn-primary py-2 px-4">
                  FREE MASTERCLASS
                 </a>
              </div> */}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
