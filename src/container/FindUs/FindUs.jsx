import React from 'react';

import { SubHeading } from '../../components';
// import { images } from '../../constants';
import findus from '../../assets/findus2.jpeg'

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Nongmeibung Road, chingakham colony near Ananda singh Higher secondary school. Imphal 795005</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">MON-SAT 10AM to 6PM</p>
        {/* <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p> */}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
