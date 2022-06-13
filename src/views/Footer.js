import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/footer.css';
import Facebook from '../assets/facebook.jpg';
import Insta from '../assets/ig-logo-email.jpg';
import Skype from '../assets/skype.jpg';
import Youtube from '../assets/utube.jpg';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <hr />
        <div className="row">
          <div className="col">
            <div className="item1">
              <img src={Facebook} alt="" />
            </div>
            <div className="item1">
              <img src={Insta} alt="" />
            </div>
            <div className="item1">
              <img src={Skype} alt="" />
            </div>
            <div className="item1">
              <img src={Youtube} alt="" />
            </div>
          </div>
          <br />

          <div className="col">
            <div className="item">
              <p>
                Icons made by <b>Kiranshastry</b> from{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.flaticon.com/"
                >
                  www.flaticon.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
