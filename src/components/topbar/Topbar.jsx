import "./topbar.css";
import logo from "../../images/logo.png";

const Topbar = () => {
  return (
    <>
      <div className="topbar container-fluid text-white d-none d-lg-flex">
        <div className="container  py-1">
          <div className="d-flex align-items-center">
            <a className="anchor" href="index.html">
              <img className="logo" src={logo} alt="logo" />
              {/* <h2 className="brandname text-white fw-bold">Isiak Olaniyan</h2> */}
            </a>
            <div className="ms-auto d-flex align-items-center">
              {/* <small className="ms-4">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </small> */}
              <small className="ms-4">
                <i className="fa fa-envelope me-3" />
                isiakolaniyan@gmail.com
              </small>
              <small className="ms-4">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </small>
              <div className="ms-3 d-flex">
                <a
                  className="btn btn-sm-square btn-light rounded-circle ms-2"
                  href
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-sm-square btn-light rounded-circle ms-2"
                  href
                >
                  <i class="fa-brands fa-x-twitter" />
                </a>
                <a
                  className="btn btn-sm-square btn-light rounded-circle ms-2"
                  href
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topbar;
