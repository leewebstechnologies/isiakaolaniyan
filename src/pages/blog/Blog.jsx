import "./blog.css";
import bloggers from "../../images/bloggers.jpg";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <img className="blogger" src={bloggers} alt="blogger" />
        <div className="contents">
          <h2 className="heading">How to Build a Blogging Business</h2>
          <p className="p">
            I launched my blog in 2019 and scaled it to a 7-figure business in
            under 2 years. I want to share everything I learned along the way.
            <b> Watch my blogging videos</b> on YouTube.
          </p>
          <button className="blog_btn">
            Join us at Blog Growth Engine
          </button>
        </div>
      </div>
    </>
  );
};
export default Blog;
