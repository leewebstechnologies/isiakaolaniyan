import Features from "./components/features/Features";
import Model from "./components/about/About";
// import Carousel from "./components/carousel/Carousel";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import logo from "./images/logo.png";
import Services from "./components/services/Services";
import Texture from "./components/texture/Texture";
import Testimonial from "./components/testimonial/Testimonial";
import Sumup from "./components/sumup/Sumup";
function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Model />
      {/* <Carousel /> */}
      <Features />
      <Services />
      <Texture />
      <Testimonial />
      <Sumup />

      {/* Carousel End */}
      {/* Features Start */}

      {/* Features End */}
      {/* About Start */}

      {/* About End */}
      {/* Video Modal Start */}

      {/* Video Modal End */}
      {/* Service Start */}

      {/* Service End */}
      {/* Project Start */}
      <div className="container-xxl pt-5">
        <div className="container">
          <div
            className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-medium text-primary">Our Projects</p>
            <h1 className="display-5 mb-5">
              We've Done Lot's of Awesome Projects
            </h1>
          </div>
          <div
            className="owl-carousel project-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-1.jpg" alt="" />
                <div className="project-overlay">
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href="img/project-1.jpg"
                    data-lightbox="project"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href>
                  Data Analytics &amp; Insights
                </a>
                <span>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem
                </span>
              </div>
            </div>
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-2.jpg" alt="" />
                <div className="project-overlay">
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href="img/project-2.jpg"
                    data-lightbox="project"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href>
                  Marketing Content Strategy
                </a>
                <span>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem
                </span>
              </div>
            </div>
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-3.jpg" alt="" />
                <div className="project-overlay">
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href="img/project-3.jpg"
                    data-lightbox="project"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href>
                  Business Target Market
                </a>
                <span>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem
                </span>
              </div>
            </div>
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-4.jpg" alt="" />
                <div className="project-overlay">
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href="img/project-4.jpg"
                    data-lightbox="project"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href>
                  Social Marketing Strategy
                </a>
                <span>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}
      {/* Quote Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="fs-5 fw-medium text-primary">Get A Quote</p>
              <h1 className="display-5 mb-4">
                Need Our Expert Help? We're Here!
              </h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <a
                className="d-inline-flex align-items-center rounded overflow-hidden border border-primary"
                href
              >
                <span
                  className="btn-lg-square bg-primary"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </span>
                <span className="fs-5 fw-medium mx-4">+012 345 6789</span>
              </a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <h2 className="mb-4">Get A Free Quote</h2>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="mail"
                      placeholder="Your Email"
                    />
                    <label htmlFor="mail">Your Email</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Your Mobile"
                    />
                    <label htmlFor="mobile">Your Mobile</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <select className="form-select" id="service">
                      <option selected>Digital Marketing</option>
                      <option value>Social Marketing</option>
                      <option value>Content Marketing</option>
                      <option value>E-mail Marketing</option>
                    </select>
                    <label htmlFor="service">Choose A Service</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "130px" }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Submit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote Start */}
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-medium text-primary">Our Team</p>
            <h1 className="display-5 mb-5">
              Our Expert People Ready to Help You
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/team-1.jpg" alt="" />
                <h5>Alex Robin</h5>
                <span className="text-primary">Founder &amp; CEO</span>
                <ul className="team-social">
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/team-2.jpg" alt="" />
                <h5>Adam Crew</h5>
                <span className="text-primary">Co Founder</span>
                <ul className="team-social">
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/team-3.jpg" alt="" />
                <h5>Boris Johnson</h5>
                <span className="text-primary">Executive Manager</span>
                <ul className="team-social">
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/team-4.jpg" alt="" />
                <h5>Robert Jordan</h5>
                <span className="text-primary">Digital Marketer</span>
                <ul className="team-social">
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-square" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Testimonial Start */}

      {/* Testimonial End */}
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
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
              <h6 className="text-light">09:00 am - 07:00 pm</h6>
              <p className="mb-1">Saturday</p>
              <h6 className="text-light">09:00 am - 12:00 pm</h6>
              <p className="mb-1">Sunday</p>
              <h6 className="text-light">Closed</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
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
              ©
              <a className="fw-medium text-light" href="#">
                Isiak Olaniyan
              </a>
              , All Right Reserved.
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
}

export default App;
