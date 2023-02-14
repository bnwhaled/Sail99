import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import About from "../pages/About";
import Work from "../pages/Work";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:   id" element={<Work />} />
        {/* :id와같은 파라미터를 쓰면 무조건적으로 id가 있는 페이지로 이동 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
