import { FC } from 'react';
import Navbar from '../components/Navbar';
import Services from '../layout/Services/index'; // New Services component
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import '../layout/Services/index.css'; // Import dedicated Services styles

const ServicesPage: FC = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;