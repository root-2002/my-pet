import React, { Component } from 'react';
import './NotFoundBage.css'; // Make sure to import the CSS file

export class NotFoundBage extends Component {
  render() {
    return (
      <div className="not-found-container">
        <img src='./semrush-404-page-not-found.png' alt="Page Not Found" className="not-found-image" />
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-message">Oops! The page you are looking for doesn't exist.</p>
      </div>
    );
  }
}

export default NotFoundBage;
