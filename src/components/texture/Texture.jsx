import "./texture.css";
import texture from "../../images/texture.jpg";

const Texture = () => {
  return (
    <>
      <div className="texture">
        <img className="texture_image" src={texture} alt="texture" />
        <div className="contents">
          <h5>THE PROCESS JUST WORKS.</h5>
          <h2>
            Free 0-$10k Online Business Masterclass Taught By Isiak Olaniyan
          </h2>
        </div>
      </div>
    </>
  );
};
export default Texture;
