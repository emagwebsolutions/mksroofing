import Image from 'next/image';
import Link from 'next/link';
import Links from './Links';

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="text-white relative">

          <div className="flex justify-between py-5 top-bar">
            <div className="flex gap-10">
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

            <div className="flex gap-5">
              <Link href="/">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link href="/">
                <i className="fa fa-instagram"></i>
              </Link>
            </div>
          </div>

          <div className="flex justify-between py-4 sticky-nav">
            <Image width="110" alt="Logo" height="80" src="/logo.jpg" />
            <ul className="flex gap-10 items-center nav-links">
              <Links name="HOME" link="/" />
              <Links name="ABOUT" link="/" />
              <Links name="SERVICE" link="/" />
              <Links name="PRODUCTS" link="/" />
              <Links name="PROJECT" link="/" />
              <Links name="CONTACT" link="/" />
            </ul>
          </div>
        </div>
        <div className="nav-overlay"></div>
      </div>
    </nav>
  );
};

export default Nav;
