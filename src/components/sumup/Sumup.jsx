import "./sum.css";
import one from "../../images/laptop.png";
import two from "../../images/economic.png";
import three from "../../images/equity.png";

const Sumup = () => {
  return (
    <>
      <div className="sumup">
        <h5>
          I CAN SUM UP EVERYTHING I’VE EVER LEARNED ABOUT BLOGGING IN ONE
          SENTENCE:
        </h5>
        <h1>Create Content Like a Startup, Not a Writer.</h1>
        <p>
          If you want to learn how to start a blog to make life-changing money,
          you need to stop writing and start developing systems to scale your
          blog like a business, not a hobby.
          <br />
          I launched this blog in January 2019 and as you can see from my Blog
          Income Reports, I now make over $250k/month. <br />
          Two years ago, I was at a corporate job, building my blog on the side.
          <br />
          I took what I learned in the startup world and started to scale my
          personal brand like a startup. <br />
          By treating my blog like a real business from day one, I stopped being
          the tortured writer and became the CEO. <br />
          <b>First, let’s face it – most blogging advice is outdated.</b>
          <br />
          You’re sold the dream of "passive income" (which doesn't exist), all
          while 99% of bloggers are still failing, and the same old school
          “influencers” who started 5-10 years ago are the ones making money
          online. <br />
          I hate to break it to you, but you’ve been lied to. <br />
          These old-school influencers tell you to write about your passions,
          stay consistent, form good writing habits, and create fantastic
          content. Then, a few years from now, you’ll finally have enough
          traffic to monetize your blog with affiliate links, ads, online
          courses, or other digital products. <br />
          To grow your blog in the 2020s, you need new tactics. <br />
          <b>
            The entire reason I created this blog was to abandon this old advice
            and update your blogging tactics.
          </b>
          <br />
          <b>Our community is built to help you:</b>
          <br />
        </p>
        <div className="sumup_cards">
          <div className="card">
            <img className="laptop" src={one} alt="laptop" />
            <h6>Step 1: Launch Your Blog</h6>
            <p>
              I’ve launched hundreds of websites and will help you discover your
              unique niche and value proposition, expertly plan your content
              strategy, choose the best web hosting, email marketing software,
              and even podcast hosting to start your online business.
            </p>
          </div>
          <div className="card">
            <img className="growth" src={two} alt="growth" />
            <h6>Step 2: Scale Your Growth</h6>
            <p>
              I’ve launched hundreds of websites and will help you discover your
              unique niche and value proposition, expertly plan your content
              strategy, choose the best web hosting, email marketing software,
              and even podcast hosting to start your online business.
            </p>
          </div>
          <div className="card">
            <img className="equity" src={three} alt="equity" />
            <h6>Step 3: Monetize Faster</h6>
            <p>
              I’ve launched hundreds of websites and will help you discover your
              unique niche and value proposition, expertly plan your content
              strategy, choose the best web hosting, email marketing software,
              and even podcast hosting to start your online business.
            </p>
          </div>
        </div>
        <p className="final">
          Finally, I want to stop and say I’m glad you’re here. I deeply value
          every single person I’ve met through this blog. <br />
          <b>And above all, it’s my personal mission to help you succeed.</b>
          <br /> As long as you’re willing to put in the effort, I’ll do
          whatever it takes to help get you there. <br />
        </p>
      </div>
      <div className="signup">
        <h3>Sign Up For the FREE 0-$10k Online Business Masterclass</h3>
        <button className="masterclass_btn">Watch the FREE Masterclass</button>
        <h5>It's FREE and your information is 100% secure. 🔒 </h5>
      </div>
    </>
  );
};
export default Sumup;
