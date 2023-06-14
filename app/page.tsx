'use client';
import Slider from '@/components/Slide';

export default function Home() {
  return (
    <div className="home">
      <Slider />

      <section className="flex">
        <div className="flex-1">
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            molestias tempore sequi mollitia perspiciatis, repellat corporis,
            obcaecati, commodi reprehenderit debitis quo repudiandae magnam
            impedit. Perspiciatis, totam ipsa. Earum, temporibus tempore?
          </p>
        </div>
        <div className="flex-1"></div>
      </section>

      <section>
        <div className="heading-box">
          <h1>Our Services</h1>
          <p>We offer the following services</p>
        </div>

        <div className="container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
