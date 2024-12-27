import React from 'react';
import { Link } from 'react-router-dom'; // Ensure correct import for routing

function Card({ title, text, imageSrc, link, button = "Add to Cart" }) {
  return (
    <div className="card" style={{ width: '15rem', margin: '10px' }}>
      {/* Card Image */}
      <img src={imageSrc} className="card-img-top" alt={title} style={{ maxHeight: '150px', objectFit: 'cover' }} />
      
      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        
        {/* Button with Link */}
        {link ? (
          <Link to={link} className="btn btn-primary">
            {button}
          </Link>
        ) : (
          <button className="btn btn-primary" disabled>
            {button}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
