import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ text }) => {
  return (
    <h1
      style={{
        fontFamily: "Montserrat",
        fontSize: "2.8rem",  
        marginBottom: "3rem",
      }}
    >{text}</h1>
  );
};

Headline.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Headline;