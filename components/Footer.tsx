import Links from './Links';
import {
  useGetcontactQuery,
  useGetpostsQuery,
} from '@/store/features/fetchQuerySlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactdetails } from '@/store/features/contactSlice';
import { getAllPosts } from '@/store/features/homeSlice';

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
            <h1>About Us</h1>
            <div>{about?.excerpt}</div>
          </div>

          <div>
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
