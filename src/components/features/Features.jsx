import "./features.css";
import growth from "../../images/growth.png";
import collaboration from "../../images/collaboration.png";
import dollar from "../../images/dollar.png";

const Features = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 feature-row">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="feature-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={collaboration} alt="Icon" />
                </div>
                <h5 className="mb-3">130,000+</h5>
                <p className="mb-0">
                  People have gone through our masterclass.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="feature-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={growth} alt="Icon" />
                </div>
                <h5 className="mb-3">6,000+ Students</h5>
                <p className="mb-0">In our courses and coaching programs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="feature-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={collaboration} alt="Icon" />
                </div>
                <h5 className="mb-3">Multiple Blog Coaches</h5>
                <p className="mb-0">
                  For unlimited support and accountability.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="feature-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={dollar} alt="Icon" />
                </div>
                <h5 className="mb-4">Accountability</h5>
                <p className="mb-0">
                  Coaching calls, live Q and As, and a thriving community of
                  entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
