/** @format */
import React from 'react';
import styled from 'styled-components';
import img1 from '../images/img1.png';

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60vh;
  width: 50vh;
`;

function Home() {
  return (
    <div className='home'>
      <h3>
        Hej. <br /> Nazywam się Grzegorz Więcek. <br /> Zapraszam Cię do
        poznania mojej strony. <br /> Dzięki niej dowiesz się o mojej edukacji,
        zdobytych kursach, hobby oraz{' '}
        <strong className='home-strong'>pracach webdeveloper'a.</strong> <br />
        <br />
        Potrzebujesz strony? Wyślij mi wiadomość!
      </h3>
      <Image src={img1} alt='moje zdjęcie' className='home-img'></Image>
    </div>
  );
}

export default Home;
