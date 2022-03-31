import React from 'react';

import { SubHeading } from '../../components';
// import { images } from '../../constants';
import welcome from '../../assets/welcome2.jpeg'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The taste of ecstasy</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to Richstaurant, you have come to the right place for an unforgettable culinary experience.</p>
    </div>

    <div className="app__wrapper_img">
      <img src={welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
