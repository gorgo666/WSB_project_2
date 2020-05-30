/** @format */

import React from 'react';
import pwr from '../images/pwr_logo.jpg';
import wsb from '../images/wsb_logo.jpg';

const schools = [
  {
    img: pwr,
    alt: 'politechnoka wrocławska - logo',
    name: 'Politechnika Wrocławska',
    direction: 'Mechanika i Budowa Maszyn',
  },
  {
    img: wsb,
    alt: 'wyższa szkoła bankowa - logo',
    name: 'Wyższa Szkoła Bankowa Wrocław',
    direction: 'Informatyka w Nowoczesnej Logistyce',
  },
  {
    img: pwr,
    alt: 'politechnoka wrocławska - logo',
    name: 'Politechnika Wrocławska',
    direction: 'Zarządzanie Projektami',
  },
  {
    img: wsb,
    alt: 'wyższa szkoła bankowa - logo',
    name: 'Wyższa Szkoła Bankowa Wrocław',
    direction: 'Zintegrowany system informatyczny SAP ERP',
  },
  {
    img: wsb,
    alt: 'wyższa szkoła bankowa - logo',
    name: 'Wyższa Szkoła Bankowa Wrocław',
    direction: 'Programista Front-End z Angular',
  },
];

function Education() {
  return (
    <>
      <h2>Edukacja</h2>
      <div className='container'>
        {schools.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img} alt={item.alt} className='education-img' />
              <p>{item.name}</p>
              <p>{item.direction}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Education;
