import React from 'react';
import './css/Card.css'

const Card = ({ src, title, url }) => {
  return (
    <a href={url}>
       <div className='tc grow br3 pa2 ma4 dib bw2 shadow-5 cardColor'>
         <h1 style={{color:'white'}}>{title}</h1>
         <img className="siteImage" alt='site' src={src} />
       </div>
    </a>
  );
}

export default Card;
