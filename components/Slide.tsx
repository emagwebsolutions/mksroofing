import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import { useGetslidesQuery } from '@/store/features/fetchQuerySlice';
import { useState, useEffect } from 'react';
import Animation from './Animation';

const Slider = () => {
  const [getData, setData] = useState([{ url: '' }]);
  const { data } = useGetslidesQuery('');

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  const ar = Object.values(getData).map((v) => v.url);

  const images = [
    {
      url: ar[0],
    },
    {
      url: ar[1],
    },
    {
      url: ar[2],
    },
    {
      url: ar[3],
    },
    {
      url: ar[4],
    },
  ];



  return (
    <div className="slide-container">
      <Slide>
        {images.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <Image
              priority
              width={3000}
              height={400}
              alt=""
              src={fadeImage.url}
            />
          </div>
        ))}
      </Slide>

      <div className="header-title">

      <Animation>
        <h1>
          <span></span>
          <span>MKS ROOFING SYSTEMS  </span>
        </h1>
        </Animation>
        <Animation>
        <p>We are into all types of Roofing works</p>
        </Animation>
      </div>
    </div>
  );
};

export default Slider;
