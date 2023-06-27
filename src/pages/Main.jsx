import React from 'react';
import { styled } from 'styled-components';

import Card from '../components/Card';
import Footer from '../components/Frame/Footer';
import Header from '../components/Frame/Header';
import { Footerarea, MainWrapper } from '../stylecomponents/Wrapper';

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
            <button>인기글</button>
            <button>최신글</button>
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
          <ImageContainer>
            <img src="/imgs/pxfuel.jpg" width="600" alt="Image1" />
          </ImageContainer>
          <TextContainer>
            <TextContent>강아지 최고.</TextContent>
          </TextContainer>
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
  margin: 0 auto;
  padding: 10px;
`;
const MainBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Cardsarea = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
`;
const ImageContainer = styled.div`
  display: flex;

  justify-content: center;
  margin-top: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TextContent = styled.p`
  width: 600px;
  text-align: center;
`;
