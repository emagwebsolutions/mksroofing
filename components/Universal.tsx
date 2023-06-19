import Hamburger from './Hamburger';
import Nav from './Nav';
import Footer from './Footer';
import { useState } from 'react';

const Universal = ({ children }: { children: React.ReactNode }) => {
  const [showNav, setShowNav] = useState(false);

  const handleHamburger = () => {
    setShowNav(true);
  };

  const hideHamburger = () => {
    setShowNav(false);
  };

  return (
    <>
      <Hamburger handleHamburger={handleHamburger} />
      <Nav show={showNav} hide={hideHamburger} />
      {children}
      <Footer />
    </>
  );
};

export default Universal;
