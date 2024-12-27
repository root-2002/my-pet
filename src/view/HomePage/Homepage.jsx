import React from 'react';
import { Card, Hero, Footer } from '../router/componentRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'; // Import the custom CSS file

function Homepage() {
  return (
    <div>
    
       
          <Hero/>
     
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 card-container">
            <Card
              title="Card 1"
              text="Some quick example text to build on the card title and mak"
              imageSrc="Catjpg.jpg"
              link="https://example.com"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 card-container">
            <Card
              title="Card 2"
              text="More example content for the second card."
              imageSrc="Catjpg.jpg"
              link="https://example.com"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 card-container">
            <Card
              title="Card 3"
              text="Even more content for the third card."
              imageSrc="Catjpg.jpg"
              link="https://example.com"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 card-container">
            <Card
              title="Card 4"
              text="Content for the fourth card."
              imageSrc="Catjpg.jpg"
              link="https://example.com"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 card-container">
            <Card
              title="Card 4"
              text="Content for the fourth card."
              imageSrc="Catjpg.jpg"
              link="https://example.com"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 card-container">
            <Card
              title="Card 4"
              text="Content for the fourth card."
              imageSrc="Catjpg.jpg"
              link="https://example.com"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 card-container">
            <Card
              title="Card 4"
              text="Content for the fourth card."
              imageSrc="Catjpg.jpg"
              link="https://example.com"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 card-container">
            <Card
              title="Card 4"
              text="Content for the fourth card."
              imageSrc="Catjpg.jpg"
              link="https://example.com"
            />
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div className='row'>
 

      </div>

    </div>
  );
}

export default Homepage;
