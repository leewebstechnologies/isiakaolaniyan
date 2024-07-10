import "./testimonial.css";
import testimonial_one from "../../images/testimonial-1.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="container-xxl pt-5">
        <div className="container">
          <div
            className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="testimonial">
              <p>Testimonial</p>
              <h3 className="students">See What Our Students Are Saying 👇</h3>
              <h6>IMPORTANT: Earnings and Results Disclaimer</h6>
              <p>
                *The results you see on this page are not typical, Adam Enfroy
                and the following students are hard working marketers. Their
                experiences do not guarantee similar results. Individual results
                may vary based on your skills, experience, motivation, work
                ethic, as well as other unforeseen factors. The Company has yet
                to perform studies of the results of its typical clients. Your
                results may vary.
              </p>
            </div>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
              <img className="mb-4" src={testimonial_one} alt="testimonial" />
              <p className="mb-4">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </p>
              <h5>Client Name</h5>
              <span className="text-primary">Profession</span>
            </div>
            <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
              <img className="mb-4" src="img/testimonial-2.jpg" alt="" />
              <p className="mb-4">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </p>
              <h5>Client Name</h5>
              <span className="text-primary">Profession</span>
            </div>
            <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
              <img className="mb-4" src="img/testimonial-3.jpg" alt="" />
              <p className="mb-4">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </p>
              <h5>Client Name</h5>
              <span className="text-primary">Profession</span>
            </div>
            <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
              <img className="mb-4" src="img/testimonial-4.jpg" alt="" />
              <p className="mb-4">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </p>
              <h5>Client Name</h5>
              <span className="text-primary">Profession</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
