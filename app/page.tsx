'use client';
import Animation from '@/components/Animation';
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
            <Animation>
              <h1>{about?.title}</h1>
              <div>{about?.excerpt}</div>
            </Animation>
          </div>

          <div></div>
        </section>

        <section>
          <div className="heading-box">
            <h1>
              <Animation>Our Services</Animation>
            </h1>

            <Animation>
              <p>We offer the following services</p>
            </Animation>
          </div>

          <div className="container py-4">
            <div className="shadow-xl  p-10 bg-white">{services}</div>

            <Button cls="button mt-10 m-auto" url="/service">
              More Services
            </Button>
          </div>
        </section>

        <section>
          <div className="container">
            <div>
              <Animation>
                <h1>Get a Free Quote!</h1>
                <p>
                  Whether it a brand new installation, or work on an existing
                  property, MKS Roofing Systems is a full service provider of
                  roofing.
                </p>
              </Animation>
            </div>

            <div className="flex gap-4">
              <Button cls="button" url="/contact">
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
