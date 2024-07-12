import "./blog.css";
import bloggers from "../../images/bloggers.jpg";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <img className="blogger" src={bloggers} alt="blogger" />
        <h2>How to Build a Blogging Business</h2>
        <p>
          I launched my blog in 2019 and scaled it to a 7-figure business in
          under 2 years. I want to share everything I learned along the way.
          <b> Watch my blogging videos</b> on YouTube.
        </p>
        <button className="masterclass_btn">
          Get the Free 0-$10k Business Masterclass
        </button>
      </div>
    </>
  );
};
export default Blog;
