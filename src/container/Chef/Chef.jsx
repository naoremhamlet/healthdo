import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import chef from '../../assets/chef2.jpeg'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">To create a healthy community through real food</p>
        </div>
        <p className="p__opensans"> In the past, this has meant being able to recreate my mom's favourite recipes cent per cent, without having to ask her or, as in my case, when I was studying abroad.</p>
      </div>

      <div className="app__chef-sign">
        <p>frichette Melange</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
