import Link from 'next/link';
import React from 'react';

const Hamburger = () => {
  return (
    <div className="hamburger">
      <Link href="#" className="strips">
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </div>
  );
};

export default Hamburger;
