// Pages and Components
import Landing from '../pages/';
import Navbar from '../components/Navbar';
import Single from '../pages/blog/Single';
import Footer from '../pages/Footer';
import Blog from '../pages/blog/Blog';
import FactoryAutomation from '../pages/blog/FactoryAutomation'

// ------------------

/**
 * Render Navigation bar when rendering a component and isLanding to check
 * if the component to be rendered is the landing page or not.
 *
 * In landing page case: nav links works as scrollable links
 * other case(such as : blog): nav links works as router links
 *
 * @param component the component to be rendered
 * @param isLanding check for a component if its the landingpage
 * @returns the given component with the Navbar
 */
const renderWithNav = (
  component: JSX.Element,
  isLanding: boolean
): JSX.Element => {
  return (
    <>
      <Navbar isLanding={isLanding} />
      {component}
      <Footer />
    </>
  );
};

type RoutesType = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
};

// Routes we will visit
const routes: RoutesType[] = [
  {
    path: '/',
    element: renderWithNav(<Landing />, true),
  },
  {
    path: '/single',
    element: renderWithNav(<Single />, false),
  },
  {
    path: '/blog',
    element: renderWithNav(<Blog />, false),
  },
  {
    path: '/factory-automation',
    element: renderWithNav(<FactoryAutomation />, false),
  },
];

export default routes;

// ---------------
