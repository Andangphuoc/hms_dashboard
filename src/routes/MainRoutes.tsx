
import BlogPage from '@/pages/Blog';
import Home from '@/pages/Home';
import ServicesPage from '@/pages/Services';
import { lazy } from 'react';


// const BlogDetailsPage = Loadable(lazy(() => import('pages/BlogDetails')));
// const Contact = Loadable(lazy(() => import('pages/Contact')));
// const PrivacyPolicy = Loadable(lazy(() => import('pages/PrivacyPolicy')));
// const Changelog = Loadable(lazy(() => import('pages/Changelog')));
// const SuccessfulStories = Loadable(lazy(() => import('pages/SuccessfulStories')));
// const License = Loadable(lazy(() => import('pages/License')));
// const NotFound = Loadable(lazy(() => import('pages/NotFound')));
// const StyleGuide = Loadable(lazy(() => import('pages/StyleGuide')));
// const TermsAndConditions = Loadable(lazy(() => import('pages/TermsAndConditions')));
// const ServicesDetails = Loadable(lazy(() => import('pages/ServicesDetails')));
// const StoryDetails = Loadable(lazy(() => import('pages/StoryDetails')));
// const Faq = Loadable(lazy(() => import('pages/Faq')));

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'about',
      element: <Home />,
    },
    {
      path: 'services',
      element: <ServicesPage />,
    },
    {
      path: 'blog',
      element: <BlogPage />,
    }
    // {
    //   path: 'blog/:id',
    //   element: <BlogDetailsPage />,
    // },
    // {
    //   path: 'contact',
    //   element: <Contact />,
    // },
    // {
    //   path: 'privacy-policy',
    //   element: <PrivacyPolicy />,
    // },
    // {
    //   path: 'changelog',
    //   element: <Changelog />,
    // },
    // {
    //   path: 'successful-stories',
    //   element: <SuccessfulStories />,
    // },
    // {
    //   path: 'license',
    //   element: <License />,
    // },
    // {
    //   path: 'style-guide',
    //   element: <StyleGuide />,
    // },
    // {
    //   path: 'terms-and-conditions',
    //   element: <TermsAndConditions />,
    // },
    // {
    //   path: 'services/:id',
    //   element: <ServicesDetails />,
    // },
    // {
    //   path: 'case-study/:id',
    //   element: <StoryDetails />,
    // },
    // {
    //   path: 'faq',
    //   element: <Faq />,
    // },
    // {
    //   path: '404',
    //   element: <NotFound />,
    // },
    // {
    //   path: '*',
    //   element: <NotFound />,
    // },
  ],
};

export default MainRoutes;