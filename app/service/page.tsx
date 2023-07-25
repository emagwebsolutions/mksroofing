'use client';
import Cover from '@/components/Cover';
import Universal from '@/components/Universal';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const Service = () => {
  const serviceArr = useSelector((state: any) => state?.home?.services);

  const services = Object.values(serviceArr)
    .filter((v: any) => v.excerpt !== null)
    .map((v: any, k) => v)
    .slice(0, 4);

  return (
    <Universal>
      <Cover name="Service" />
      <div className="service">
        <div className="container">
          <div className="wrapper">
            <div>
              <Image src={services[0]?.image} alt="" width={2000} height={300} />
            </div>
            <div className="para-txt">
              <h1>{services[0]?.title.toUpperCase()}</h1>
              <div>{services[0]?.excerpt}</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="wrapper">
            <div className="para-txt">
              <h1>{services[1]?.title.toUpperCase()}</h1>
              <div>{services[1]?.excerpt}</div>
            </div>

            <div>
              <Image src={services[1]?.image} alt="" width={2000} height={300} />
            </div>
          </div>
        </div>

        <div className="container">
        <div className="wrapper">
            <div>
              <Image src={services[2]?.image} alt="" width={2000} height={300} />
            </div>
            <div className="para-txt">
              <h1>{services[2]?.title.toUpperCase()}</h1>
              <div>{services[2]?.excerpt}</div>
            </div>
          </div>
        </div>

        <div className="container">
        <div className="wrapper">
            <div className="para-txt">
              <h1>{services[3]?.title.toUpperCase()}</h1>
              <div>{services[3]?.excerpt}</div>
            </div>
            <div>
              <Image src={services[3]?.image} alt="" width={2000} height={300} />
            </div>
          </div>
        </div>
      </div>
    </Universal>
  );
};

export default Service;
