import React from 'react';
import './css/Card.css'

const Card = ({ src }) => {
  return (
    <div className='tc grow br3 pa3 ma4 dib bw2 shadow-5 cardColor'>
      <img className="siteImage" alt='site' src={src} />
    </div>
  );
}

export default Card;
