import "./hero.css";
import background from "../../images/background.jpg";
import one from "../../videos/personnel.mp4";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img
          className="hero_texture"
          src={background}
          alt="background"
        />
        <div className="contents">
          <h1 className="heading">
            Learn How to Start a Profitable $10k/Month Content Business
          </h1>
          <p className="paragraph">
            Join 100,000+ other bloggers and YouTubers and get access to my free
            masterclass. You'll learn exactly how to start a profitable content
            business and choose the right niche for YOU once and for all.
          </p>

          <video
            className="video1"
            src={one}
            alt="testimonial_video"
            controls
          />
          <button className="masterclass_btn">
            Get the Free 0-$10k Business Masterclass
          </button>
          {/* <h3 className="name">
            Isiak <span>Olaniyan</span>
          </h3> */}
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};
export default Hero;
