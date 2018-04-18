import React from 'react';
import Headline from './Headline';
import './Education.css';

const Education = () => {
  return (
    <section className="Education">
      <div className="Education-container">
        <Headline text="EDUCATION" />
        <div className="Education-item">
          <div>
            <h2>NICOLAUS COPERNICUS UNIVERSITY IN TORUN</h2>
            <h5>TERMINATED</h5>
            <br/>
            <div>
              Informatics
            </div>
          </div>
          <h6>2016 - 2018</h6>
        </div>

        <div className="Education-item">
          <div>
            <h2>FREE CODE CAMP</h2>
            <h5>ONGOING</h5>
            <br/>            
            <div>
              Web Development
            </div>
          </div>
          <h6>2017 - 2018</h6>
        </div>
      </div>
    </section>
  );
};

export default Education;