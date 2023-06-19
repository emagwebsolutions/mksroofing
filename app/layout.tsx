'use client'
import Nav from '@/components/Nav';
import './globals.scss';
import Footer from '@/components/Footer';
import Hamburger from '@/components/Hamburger';
import { useState } from 'react';

export const metadata = {
  title: 'MKS Roofing Systems',
  description: 'Roofing company in Accra Ghana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState(false);

  const handleHamburger = () => {
    setShowNav(true)
  };

  const hideHamburger = () => {
    setShowNav(false)
  };

  return (
    <html lang="en">
      <body>
        <Hamburger handleHamburger={handleHamburger} />
        <Nav show={showNav} hide={hideHamburger} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
