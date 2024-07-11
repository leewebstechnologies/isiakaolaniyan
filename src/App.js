import Features from "./components/features/Features";
import Model from "./components/about/About";
// import Carousel from "./components/carousel/Carousel";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import logo from "./images/logo.png";
import Services from "./components/services/Services";
import Texture from "./components/texture/Texture";
import Testimonial from "./components/testimonial/Testimonial";
import Sumup from "./components/sumup/Sumup";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Model />
      <Features />
      <Services />
      <Texture />
      <Testimonial />
      <Sumup />
      <Footer />
    </>
  );
}

export default App;
