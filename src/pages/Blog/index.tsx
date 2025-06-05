
import Navbar from '../../components/Navbar';
import Blog from '../../layout/Blog/index';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import '../../layout/Blog/index.css';

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default BlogPage;