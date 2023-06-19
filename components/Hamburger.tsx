'use client';

import Link from 'next/link';

type fn = {
  handleHamburger: (e: any) => void;
};

const Hamburger = ({ handleHamburger }: fn) => {
  return (
    <div className="hamburger">
      <Link href="#" className="strips" onClick={handleHamburger}>
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </div>
  );
};

export default Hamburger;
