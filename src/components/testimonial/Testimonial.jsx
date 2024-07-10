import "./testimonial.css";
import one from "../../videos/lab.mp4";

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
            <div className="wrapper">
              <p>Testimonial</p>
              <h3>See What Our Students Are Saying 👇</h3>
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
          <div className="card">
            <video src={one} alt="testimonial_video" loop muted />
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
