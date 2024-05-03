import NavBar from "./components/common/NavBar/NavBar";
import NavLinks from "./components/common/NavBar/NavLinks";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import BlogPostForm from "./components/BlogPostForm";
import Footer from "./components/common/Footer";
import NotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto max-h-max max-w-[1024px]  flex flex-col font-serif">
        <NavBar />
        <NavLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-form" element={<BlogPostForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
