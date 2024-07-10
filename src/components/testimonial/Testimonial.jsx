import "./testimonial.css";
import one from "../../videos/lab.mp4";
import two from "../../videos/personnel.mp4";

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

          <div className="testimonial_cards">
            <div className="card">
              <video
                className="video1"
                src={one}
                alt="testimonial_video"
                controls
              />
              <p>
                Joining Blog Growth Engine changed my life. I was able to create
                an income from home that allowed me to earn 5x more per hour
                than I was making at my 9-5. *Eddy is now our Blog Growth Engine
                head coach and is employed by Blog Growth Engine.
              </p>
              <h5>Eddy Ballasteros</h5>
              <h6>$15,000+/MONTH BLOGGER</h6>
            </div>
            <div className="card">
              <video
                className="video1"
                src={two}
                alt="testimonial_video"
                controls
              />
              <p>
                Joining Blog Growth Engine changed my life. I was able to create
                an income from home that allowed me to earn 5x more per hour
                than I was making at my 9-5. *Eddy is now our Blog Growth Engine
                head coach and is employed by Blog Growth Engine.
              </p>
              <h5>Eddy Ballasteros</h5>
              <h6>$10,000+/MONTH BLOGGER</h6>
            </div>
            <div className="card">
              <video
                className="video1"
                src={one}
                alt="testimonial_video"
                controls
              />
              <p>
                Joining Blog Growth Engine changed my life. I was able to create
                an income from home that allowed me to earn 5x more per hour
                than I was making at my 9-5. *Eddy is now our Blog Growth Engine
                head coach and is employed by Blog Growth Engine.
              </p>
              <h5>Eddy Ballasteros</h5>
              <h6>$12,000+/MONTH BLOGGER</h6>
            </div>
          </div>
        </div>
        <button className="masterclass_btn">Get the Free 0-$10k Business Masterclass</button>
      </div>
    </>
  );
};
export default Testimonial;
