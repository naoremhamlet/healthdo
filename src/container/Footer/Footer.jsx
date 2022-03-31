import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images, links } from '../../constants';
import './Footer.css';

console.log(links);

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay />
    <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Nongmeibung Road, chingakham colony near Ananda singh Higher secondary school. Imphal 795005.</p>
        <p className="p__opensans">+91 9774430099</p>
        <p className="p__opensans">+91 9366126935</p>
      </div>

      <div className="app__footer-links_logo">
        <img className="myLogo" src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon_image_here"/>
        <div className="app__footer-links_icons">
          <a href={links.links.facebook} target={"_blank"}>
            <FiFacebook />
          </a>
          <a href={links.links.instagram} target={"_blank"}>
            <FiInstagram />
          </a>
          {/* <a href={links.facebook}>
            <FiFacebook />
          </a> */}
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Saturday:</p>
        <p className="p__opensans">10:00AM- 06:00PM</p>
        {/* <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p> */}
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Richard Nkulu. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
