import "./about.css";

const Model = () => {
  return (
    <>
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src
                  id="video"
                  allowFullScreen
                  allowscriptaccess="always"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl about my-0">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div
                className="h-100 d-flex align-items-center justify-content-center"
                style={{ minHeight: "300px" }}
              >
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span />
                </button>
                <h3 className="brand">Isiak Olaniyan</h3>
              </div>
            </div>
            <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white rounded-top p-5 mt-lg-5">
                <h1 className="display-6 mb-4">
                  Learn How to Start a Profitable $10k/Month Content Business
                </h1>
                <p className="mb-4">
                  Join 100,000+ other bloggers and YouTubers and get access to
                  my free masterclass. You'll learn exactly how to start a
                  profitable content business and choose the right niche for YOU
                  once and for all.
                </p>
                <div className="row g-5 pt-2 mb-5">
                  <div className="col-sm-6">
                    <img
                      className="img-fluid mb-4"
                      src="img/icon/icon-5.png"
                      alt=""
                    />
                    <h5 className="mb-3">Managed Services</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                  <div className="col-sm-6">
                    <img
                      className="img-fluid mb-4"
                      src="img/icon/icon-2.png"
                      alt=""
                    />
                    <h5 className="mb-3">Dedicated Experts</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                </div>
                {/* <a className="hero_btn rounded-pill py-3 px-5" href>
                  Explore
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Model;
