import type { FC } from 'react';
import Navbar from '../components/Navbar';
import About from '../layout/About';
import Footer from '../components/Footer';
import '../layout/About/index.css';

const AboutPage: FC = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;