import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className="footer">
        {/* Background Image Section */}
        <div className="footer-image">
          <img
            src="https://demos.layoutdivi.com/wp-content/uploads/2022/11/footer-bg.png"
            alt="Footer Background"
            className="footer-bg"
          />
        </div>

        {/* Footer Content */}
        <div className="footer-top">
          <div className="footer-row">
            {/* Important Links Section */}
            <div className="footer-column">
              <h4>Important Links</h4>
              <ul className="footer-links">
                <li><a href="#">Business Resources</a></li>
                <li><a href="#">Best Portfolio</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="footer-column">
              <h4>Subscribe to Our Newsletter</h4>
              <p>Stay ahead in a rapidly changing world. Subscribe to our monthly insights.</p>
            </div>

            {/* Contact Information Section */}
            <div className="footer-column">
              <h4>Connect With Us</h4>
              <p><i className="icon-location"></i> Street Address / Block</p>
              <p><i className="icon-phone"></i> 1-800-256-9876</p>
              <p><i className="icon-email"></i> support@layoutdivi.com</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>Copyright © 2022 Company. All rights reserved.</p>
          <div className="social-media">
            <a href="#" className="social-icon" title="Facebook">
              <i className="icon-facebook"><img src="fac.png" alt=""  /></i>
            </a>
            <a href="#" className="social-icon" title="Twitter">
              <i className="icon-twitter"><img src="twitter_.png" alt="" /></i>
            </a>
          
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
