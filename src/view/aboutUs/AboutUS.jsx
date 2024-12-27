import React from 'react';
import './AboutUs.css';
import { Carousel } from "../router/componentRouter";

function AboutUS() {
  const slides = [
    {
      image: 'border-collie-easiest-dogs-to-train-BP5399-2000-83ca1cf2f47244479caad6e6857a5a42.webp',
      alt: 'Slide 1',
      caption: 'This is the first slide.'
    },
    {
      image: 'two-people-walking-dog-1246207272-2000-417c23ff92f84b978da4749e81143be0.webp',
      alt: 'Slide 2',
      caption: 'This is the second slide.'
    },
    {
      image: 'group-of-dogs-with-owners-at-obedience-class-491765830-4ddc8ddac7f141ce93030914b8bf3b8e.webp',
      alt: 'Slide 3',
      caption: 'This is the third slide.'
    }
  ];

  return (
    <div className="about-us-container">
      {/* Carousel Section */}
    

      {/* About Us Content Section */}
      <section className="about-us-content">
        <div className='test'>

        <h1>About Us</h1>
        <p>
          We are a passionate team committed to delivering high-quality products that make a positive impact on society.
          Our goal is to provide exceptional service, innovation, and customer satisfaction.
        </p>
        </div>
      </section>
      <Carousel slides={slides} />

      {/* Owners Information Section */}
      <section className="owners-section">
        <h2>Meet the Owners</h2>
        <div className="owners-info">
          {/* Owner 1 */}
          <div className="owner">
            <img 
              src="me.jpg" 
              alt="Owner 1" 
              className="owner-image"
            />
            <div className="owner-details">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Role:</strong> Founder & CEO</p>
              <p>
                John Doe is the visionary behind our company. With years of experience in the industry, he leads the team with a passion for innovation and excellence. His dedication and leadership have driven the company to success.
              </p>
            </div>
          </div>

          {/* Owner 2 */}
          <div className="owner">
            <img 
              src="me.jpg" 
              alt="Owner 2" 
              className="owner-image"
            />
            <div className="owner-details">
              <p><strong>Name:</strong> Jane Smith</p>
              <p><strong>Role:</strong> Co-Founder & CTO</p>
              <p>
                Jane Smith brings a wealth of technical expertise to the team. She is responsible for overseeing the company's technology strategy and development, ensuring that we are always ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUS;
