import React from 'react';
import { styled } from 'styled-components';

import Card from '../components/Card';
import Footer from '../components/Frame/Footer';
import Header from '../components/Frame/Header';
import { Footerarea, MainWrapper } from '../stylecomponents/Wrapper';
import BottomCardTab from '../components/BottomCardTab';
// import { Link } from 'react-router-dom';
function Main() {
  return (
    <>
      <MainWrapper>
        <Headerarea>
          <Header />
        </Headerarea>
        <MainBox>
          <div
            style={{
              margin: '30px'
            }}
          >
            <BtnBest>인기글</BtnBest>
            <BtnBest>최신글</BtnBest>
            <BCTitle>사랑스런 친구들의 이야기</BCTitle>
          </div>
          <Cardsarea>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Cardsarea>
          <BottomCardTab />
        </MainBox>

        <Footerarea>
          <div>
            <Footer />
          </div>
        </Footerarea>
      </MainWrapper>
    </>
  );
}

export default Main;

const Headerarea = styled.div`
  background-color: #ffe066;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;
const MainBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px;
`;

const Cardsarea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

const BtnBest = styled.button`
  width: 80px;
  height: 40px;
  margin: 0 4px 0 0;
  border-radius: 14px;
  border: none;
  background-color: #eb9307;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  &: hover {
    cursor: pointer;
    background-color: #ff8f05;
    color: black;
  }
`;
const BCTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;

  justify-content: center;
`;
