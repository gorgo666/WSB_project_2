/** @format */

import React, { useEffect, useRef, useState } from 'react';
import img1 from '../images/gory.jpg';
import img2 from '../images/koncerty.jpg';
import img3 from '../images/przyroda.jpg';
import img4 from '../images/programowanie.jpg';

const Hobby = () => {
  const counter = useRef(0);
  const [, forceUpdate] = useState({});

  const img = [
    { name: img1, description: 'lubię góry' },
    { name: img2, description: 'lubię koncerty' },
    { name: img3, description: 'lubię przyrodę' },
    { name: img4, description: 'lubię programować' },
  ];

  useEffect(() => {
    const slaider = setInterval(() => {
      if (counter.current >= img.length - 1) {
        counter.current = -1;
      }

      counter.current = counter.current + 1;
      forceUpdate({});
    }, 3000);
    return () => clearInterval(slaider);
  }, [img.length]);

  return (
    <div className='hobby-container'>
      <div>
        {img.map((pic) => {
          return (
            <img
              className='hobby-image'
              src={pic.name}
              key={pic.name}
              alt='obrazek'
            ></img>
          );
        })}
      </div>
      <h2>{img[counter.current].description}</h2>
      <img
        className='hobby-image-center'
        src={img[counter.current].name}
        alt='obrazek'
      />
    </div>
  );
};

export default Hobby;
