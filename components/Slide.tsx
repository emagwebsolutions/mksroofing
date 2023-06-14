import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

const Slider = () => {
  const images = [
    { url: '/slider1.jpg' },
    { url: '/slider2.jpg' },
    { url: '/slider3.jpg' },
    { url: '/slider4.jpg' },
  ];

  return (
    <div className="slide-container">
      <Slide>
        {images.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <Image
              priority
              width={1300}
              height={400}
              alt=""
              src={fadeImage.url}
            />
          </div>
        ))}
      </Slide>

      <div className="header-title">
        <h1>
          <span></span>
          <span>MKS ROOFING SYSTEMS</span>
        </h1>
        <p>We are into all types of Roofing works</p>
      </div>
    </div>
  );
};

export default Slider;
