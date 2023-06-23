'use client';
import Button from '@/components/Button';
import Servicescard from '@/components/Servicescard';
import Slider from '@/components/Slide';
import Universal from '@/components/Universal';
import { useSelector } from 'react-redux';

export default function Home() {

  const about = useSelector((state: any) => state?.home?.about)[0];
  const serviceArr = useSelector((state: any) => state?.home?.services);

  const services = Object.values(serviceArr)
    .filter((v: any) => v.excerpt !== null)
    .map((v: any, k) => {
      return (
        <Servicescard key={k} img={v.image} title={v.title} text={v.excerpt} />
      );
    })
    .slice(0, 4);

  return (
    <Universal>
      <div className="home">
        <Slider />

        <section>
          <div>
            <h1>{about?.title}</h1>
            <div>{about?.excerpt}</div>
          </div>
          <div></div>
        </section>

        <section>
          <div className="heading-box">
            <h1>Our Services</h1>
            <p>We offer the following services</p>
          </div>

          <div className="container py-4">
            <div className="shadow-xl  p-10 bg-white">{services}</div>

            <Button cls="button mt-10 m-auto" url="">
              More Services
            </Button>
          </div>
        </section>

        <section>
          <div className="container">
            <div>
              <h1>Get a Free Quote!</h1>
              <p>
                Whether it a brand new installation, or work on an existing
                property, MKS Roofing Systems is a full service provider of
                roofing.
              </p>
            </div>

            <div className="flex gap-4">
              <Button cls="button" url="">
                REQUEST A FREE QUOTE
              </Button>

              <a href="tel:233209877300" className="button-outline">
                CALL +233 209 877 300
              </a>
            </div>
          </div>
        </section>
      </div>
    </Universal>
  );
}
