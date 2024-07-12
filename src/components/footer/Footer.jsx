import "./footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div
        className="container-fluid footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-3">
                <a
                  className="btn btn-square btn-light rounded-circle me-2"
                  href
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-light rounded-circle me-2"
                  href
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-light rounded-circle me-2"
                  href
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  className="btn btn-square btn-light rounded-circle me-2"
                  href
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Quick Links</h4>
              <a className="btn btn-link" href>
                Home
              </a>
              <a className="btn btn-link" href>
                Start A Blog
              </a>
              <a className="btn btn-link" href>
                Start A Youtube Channel
              </a>
              <a className="btn btn-link" href>
                AI Income Blueprint (New)
              </a>
              <a className="btn btn-link" href>
                Income University
              </a>
              <a className="btn btn-link" href>
                My Story
              </a>
              <a className="btn btn-link" href>
                Contact
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Friday</p>
              <p className="mb-1">09:00 am - 07:00 pm</p>
              <br />

              <p className="mb-1">Saturday</p>
              <p className="mb-1">09:00 am - 07:00 pm</p>
              <br />
              <p className="mb-1">Sunday</p>
              <p className="mb-1">Closed</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p>Sign Up For the FREE 0-$10k Online Business Masterclass</p>
              <div className="position-relative w-100">
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="a fw-medium text-light">
                © Copyright {year} | All Rights Reserved By Isiak Olaniyan
              </p>
              {/* <a className="fw-medium text-light">© Isiak Olaniyan</a>, All
              Right Reserved. */}
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By Isiak Olaniyan
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
};
export default Footer;
