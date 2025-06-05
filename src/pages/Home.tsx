import { FC } from 'react';
import Hero from '../components/Hero';
import Services from '../layout/Home/Services';
import About from '../layout/Home/About';
import Benefit from '../layout/Home/Benefit';
import Features from '../layout/Home/Features';
import Testimonials from '../layout/Home/Testimonials';
import Blog from '../layout/Home/Blog';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Benefit />
      <Features />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;