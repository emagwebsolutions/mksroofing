import Image from 'next/image';
import React from 'react';

type Card = {
  img: string;
  title: string;
  text: string;
};

const Servicescard = ({ img, title, text }: Card) => {
  return (
    <div className="flex-1 bg-white service-bx">
      <div>
        <Image width="270" height="100" alt="" src={img} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Servicescard;
