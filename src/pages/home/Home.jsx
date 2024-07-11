import Model from "../../components/about/About";
import Features from "../../components/features/Features";
import Services from "../../components/services/Services";
import Sumup from "../../components/sumup/Sumup";
import Testimonial from "../../components/testimonial/Testimonial";
import Texture from "../../components/texture/Texture";
import "./home.css";

const Home = () => {
  return (
    <>
      <Model />
      <Features />
      <Features />
      <Services />
      <Texture />
      <Testimonial />
      <Sumup />
    </>
  );
};
export default Home;
