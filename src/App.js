import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Youtube from "./pages/youtube/Youtube";
import Ai from "./pages/ai/Ai";
import Income from "./pages/income/Income";
import Story from "./pages/story/Story";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="youtube" element={<Youtube />} />
            <Route path="ai" element={<Ai />} />
            <Route path="income" element={<Income />} />
            <Route path="story" element={<Story />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
