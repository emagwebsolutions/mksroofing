'use client';
import Button from '@/components/Button';
import Servicescard from '@/components/Servicescard';
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

        <div className="container py-4">
          <div className="shadow-xl flex gap-8 p-10 bg-white">
            <Servicescard
              img="/new-roofing.jpeg"
              title="New Roofing"
              text="Roofing for new buildings. Roofing of new structures is our Hallmark and we at Adepaye offer the best roofing systems and quality designs for our valued"
            />

            <Servicescard
              img="/re-roofing.jpg"
              title="Re Roofing"
              text="Re-roofing Services Do you have an outdated roofing system that needs to be replaced? Do you require a new high-quality roofing because your previous roofing"
            />

            <Servicescard
              img="/steel-truses.jpeg"
              title="Steel Truses"
              text="Metal Trusses We offer the industry's top metal trusses. It can survive all weather conditions, even severe ones, and is sturdy and long-lasting. Why Choose"
            />

            <Servicescard
              img="/wood-work.jpg"
              title="Wood Work"
              text="Roofing for new buildings. Roofing of new structures is our Hallmark and we at Adepaye offer the best roofing systems and quality designs for our valued"
            />
          </div>

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
  );
}
