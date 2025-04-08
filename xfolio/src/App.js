import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './navbar/navbar.jsx';
import Home from './home/home.jsx';
import Contact from './contact/contact.jsx';
import Footer from './footer/footer.jsx';
import Blog from './blog/blog.jsx';
import Projects from './Projects/projects.jsx';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
