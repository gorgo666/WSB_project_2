/** @format */

import React from 'react';

import accAdv from '../PDF/access advance.pdf';
import accBas from '../PDF/access basic.pdf';
import excExp from '../PDF/excel - expert.pdf';
import excMed from '../PDF/Excel medium.pdf';
import sql from '../PDF/MS SQL.pdf';
import power from '../PDF/power pivot, view, query.pdf';
import vbaBas from '../PDF/VBA przkrojowe.pdf';
import vbaAdv from '../PDF/VBA advance.pdf';
import python from '../PDF/python1.pdf';

import styled from 'styled-components';

const Color = styled.a`
  color: yellow;
  text-decoration: none;
  padding: 0px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 16px;
    padding: 16px;
    width: 170px;
    height: 170px;
    border: solid 2px yellow;
  }
`;

function Courses() {
  return (
    <>
      <h2 style={{ marginLeft: 'auto', marginRight: 'auto', padding: '32px' }}>
        Ukończone kursy - kliknij aby przeglądać certyfikat
      </h2>
      <Container>
        <div>
          <Color href={python} target='_blank'>
            "Naucz się Pythona z HackerSpace i CityLabem"
          </Color>
        </div>
        <div>
          <Color href={sql} target='_blank'>
            "SQL - język dostępu do bazy danych MS SQL Server"
          </Color>
        </div>

        <div>
          <Color href={vbaAdv} target='_blank'>
            "VBA kurs zaawansowany"
          </Color>
        </div>
        <div>
          <Color href={vbaBas} target='_blank'>
            "Programowanie Visual Basic for Applications (VBA) w MS Excel -
            przekrojowe"
          </Color>
        </div>
        <div>
          <Color href={power} target='_blank'>
            "Microsoft Excel 2010/2013 - analiza danych z wykorzystaniem
            dodatków Power Pivot, Power View, Power Query"
          </Color>
        </div>
        <div>
          <Color href={excMed} target='_blank'>
            "MS Excel - poziom średnio zaawansowany"
          </Color>
        </div>
        <div>
          <Color href={excExp} target='_blank'>
            "Microsoft Excel - kurs dla expertów z wykorzystaniem programowania
            w VBA"
          </Color>
        </div>
        <div>
          <Color href={accAdv} target='_blank'>
            "Microsoft Access - kurs zaawansowany"
          </Color>
        </div>
        <div>
          <Color href={accBas} target='_blank'>
            "Microsoft Access 2010 - kurs podstawowy"
          </Color>
        </div>
      </Container>
    </>
  );
}

export default Courses;
