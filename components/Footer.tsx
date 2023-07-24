import Links from './Links';
import {
  useGetcontactQuery,
  useGetpostsQuery,
} from '@/store/features/fetchQuerySlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactdetails } from '@/store/features/contactSlice';
import { getAllPosts } from '@/store/features/homeSlice';
import Animation from './Animation';

const Footer = () => {
  const { data: posts } = useGetpostsQuery('');
  const { data } = useGetcontactQuery('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(contactdetails(data));
      dispatch(getAllPosts(posts));
    }
  }, [data, dispatch, posts]);

  const about = useSelector((state: any) => state?.home?.about)[0];

  const cont = useSelector((state: any) => state?.contact?.contactdetails);

  const ob = cont[0];




  return (
    <>
      <footer>
        <div className="container">
          <div>
            <Animation>
            <h1>About Us</h1>
            <div>{about?.excerpt}</div>
            </Animation>
          </div>

          <div>
          <Animation>
            <h1>Contact Us</h1>
            <ul>
           
              <li>
                <i className="fa fa-map-marker"></i> &nbsp; {ob?.location}
              </li>

              <li>
                <i className="fa fa-phone"></i> &nbsp; {ob?.phone}
              </li>

              <li>
                <i className="fa fa-envelope"></i> &nbsp; {ob?.email}
              </li>
           
            </ul>
            </Animation>
          </div>

          <div>
          <Animation>
            <h1>Services</h1>
            <ul>
              <Links icon="fa fa-angle-right" name="HOME" link="/" />
              <Links icon="fa fa-angle-right" name="ABOUT" link="/about" />
              <Links icon="fa fa-angle-right" name="SERVICE" link="/service" />
              <Links icon="fa fa-angle-right" name="PRODUCTS" link="/products" />
              <Links icon="fa fa-angle-right" name="CONTACT" link="/contact" />
            </ul>
            </Animation>
          </div>
        </div>
      </footer>

      <div className="bg-gray-900 py-9">
        <div className="container text-center text-gray-400 copy-right">
        <Animation>
          &copy; Copyright MKS Roofing Systems. Designed by Emagweb Solutions
          </Animation>
        </div>
      </div>
    </>
  );


  
};

export default Footer;
