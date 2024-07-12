import "./services.css";
import one from "../../images/artificial-intelligence.png";
import two from "../../images/global-marketing.png";
import three from "../../images/blogging.png";
import four from "../../images/search.png";
import five from "../../images/b2b-marketing.png";
import six from "../../images/blogging.png";

const Services = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-5">
              What You’ll Learn in the FREE Masterclass
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src={one} alt="Icon" />
                  </div>
                  <h5 className="mb-3">Scale Content with AI</h5>
                  <p className="mb-0">
                    Learn to produce 3-5x the amount of content with the power
                    of AI writing tools. This will boost your rankings and
                    authority in months, not years.
                  </p>
                </div>
                {/* <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href>
                    Read More
                    <i className="bi bi-chevron-double-right ms-2" />
                  </a>
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src={two} alt="Icon" />
                  </div>
                  <h5 className="mb-3">Affiliate Marketing</h5>
                  <p className="mb-0">
                    The exact methods to turn your blog into a money-printing
                    machine. You'll learn how to get started making your first
                    dollar online with affiliate marketing.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src={three} alt="Icon" />
                  </div>
                  <h5 className="mb-3">Which Posts to Write</h5>
                  <p className="mb-0">
                    Blogging is a science (not an art). I'll teach you my exact
                    strategy to create your content. And it only requires 2
                    types of posts you'll ever need to write.
                  </p>
                </div>
                {/* <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href>
                    Read More
                    <i className="bi bi-chevron-double-right ms-2" />
                  </a>
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src={four} alt="Icon" />
                  </div>
                  <h5 className="mb-3">Keyword Research</h5>
                  <p className="mb-0">
                    Success with blogging comes down to getting organic traffic
                    from Google. I'll give you my unique method to unearthing
                    the best keywords in your niche.
                  </p>
                </div>
                {/* <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href>
                    Read More
                    <i className="bi bi-chevron-double-right ms-2" />
                  </a>
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src={five} alt="Icon" />
                  </div>
                  <h5 className="mb-3">B2B Marketing</h5>
                  <p className="mb-0">
                    Success with blogging comes down to getting organic traffic
                    from Google. I'll give you my unique method to unearthing
                    the best keywords in your niche.
                  </p>
                </div>
                {/* <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href>
                    Read More
                    <i className="bi bi-chevron-double-right ms-2" />
                  </a>
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src={six} alt="Icon" />
                  </div>
                  <h5 className="mb-3">E-mail Marketing</h5>
                  <p className="mb-0">
                    Success with blogging comes down to getting organic traffic
                    from Google. I'll give you my unique method to unearthing
                    the best keywords in your niche.
                  </p>
                </div>
                {/* <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href>
                    Read More
                    <i className="bi bi-chevron-double-right ms-2" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
