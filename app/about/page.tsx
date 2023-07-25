'use client';
import Animation from '@/components/Animation';
import Cover from '@/components/Cover';
import Servicescard from '@/components/Servicescard';
import Universal from '@/components/Universal';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const About = () => {
  const about = useSelector((state: any) => state?.home?.about)[0];
  const serviceArr = useSelector((state: any) => state?.home?.services);

  const services = Object.values(serviceArr)
    .filter((v: any) => v.excerpt !== null)
    .map((v: any, k) => {
      return <Servicescard key={k} img={v.image} title={v.title} text="" />;
    })
    .slice(0, 4);

  return (
    <Universal>
      <div className="about">
        
        <Cover name="About Us" />

        <section>
          <div>
            <PortableText value={about?.body} />
          </div>
          <div>
            <Image src={about?.image} width="700" height="500" alt="" />
          </div>
        </section>



        <section>
          <div className="container">
            <h2>
              {' '}
              <Animation>Our Services </Animation>
            </h2>

            <Animation>
            <p>
              Our customers are our top priority
            </p>
            </Animation>

            <div>{services}</div>
          </div>
        </section>

        <section></section>
      </div>
    </Universal>
  );
};

export default About;
