import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Render nested routes here */}
      <Footer />
    </div>
  );
};

export default MainLayout;