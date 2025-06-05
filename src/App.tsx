import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services'; 
import BlogPage from './pages/Blog/index';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </BrowserRouter>
  );
};

export default App;