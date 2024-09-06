import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './navbar/navbar.jsx';
import Home from './home/home.jsx';
import Services from './services/services.jsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
