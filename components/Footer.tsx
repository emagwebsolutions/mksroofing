import Links from './Links';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div>
            <h1>About Us</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              tempore ullam inventore atque numquam est sint aliquid similique
              fugiat saepe libero quisquam consequatur commodi ea eveniet,
              itaque alias perferendis neque?
            </div>
          </div>

          <div>
            <h1>Contact Us</h1>
            <ul>
              <li>
                <i className="fa fa-map-marker"></i> &nbsp; Achimota Mile 7 near Ecobank
                Accra
              </li>

              <li>
                <i className="fa fa-phone"></i> &nbsp; +233 209 877 300
              </li>

              <li>
                <i className="fa fa-envelope"></i> &nbsp;  mksroofinggh@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h1>Services</h1>
            <ul>
              <Links icon="fa fa-angle-right" name="HOME" link="/" />
              <Links icon="fa fa-angle-right" name="ABOUT" link="/" />
              <Links icon="fa fa-angle-right" name="SERVICE" link="/" />
              <Links icon="fa fa-angle-right" name="PRODUCTS" link="/" />
              <Links icon="fa fa-angle-right" name="PROJECT" link="/" />
              <Links icon="fa fa-angle-right" name="CONTACT" link="/" />
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-gray-900 py-9">
        <div className="container text-center text-gray-400">
          &copy; Copyright MKS Roofing Systems. Designed by Emagweb Solutions
        </div>
      </div>
    </>
  );
};

export default Footer;
