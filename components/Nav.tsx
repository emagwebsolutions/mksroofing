'use client';

import Image from 'next/image';
import Link from 'next/link';
import Links from './Links';

type sh = {
  show: boolean;
  hide: () => void;
};

const Nav = ({ show, hide }: sh) => {
  return (
    <nav>
      <div className="container">
        <div className={`${show ? 'show' : ''} relative navbx`}>
          <div>
            <div>
              <span>
                <i className="fa fa-phone"></i>&nbsp; +233 209 877 300
              </span>

              <span>
                <i className="fa fa-envelope"></i>&nbsp; mksroofinggh@gmail.com
              </span>

              <span>
                <i className="fa fa-clock-o"></i>&nbsp; Mon-Fri : 08am - 5.00 pm
                Sat 9am - 3pm
              </span>
            </div>

            <div>
              <Link href="/">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link href="/">
                <i className="fa fa-instagram"></i>
              </Link>
            </div>
          </div>

          <div>
            <Image width="110" alt="Logo" height="80" src="/logo.jpg" />
            <ul className="nav-links">
              <Links name="HOME" link="/" />
              <Links name="ABOUT" link="/about" />
              <Links name="SERVICE" link="/service" />
              <Links name="PRODUCTS" link="/products" />
              <Links name="CONTACT" link="/contact" />
            </ul>
          </div>
        </div>

        <div
          onClick={hide}
          className={`${show ? 'show' : ''} nav-overlay`}
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
