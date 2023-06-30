import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Footer from '../components/Frame/Footer';
import Header from '../components/Frame/Header';
import { MainBox, MainWrapper } from '../stylecomponents/Wrapper';
import BottomCardTab from '../components/BottomCardTab';
// import CardList from '../components/CardList';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import CardList from '../components/CardList';

function Main() {
  const fids = useSelector((fids) => fids.fids);

  useEffect(() => {
    // dispatch(firstsetFids);
    console.log('유저정보:', auth.currentUser);
  }, []);

  return (
    <>
      <MainWrapper>
        <Header />

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
            <CardList fids={fids} />
          </Cardsarea>
          <BottomCardTab />
        </MainBox>

        <Footer />
      </MainWrapper>
    </>
  );
}

export default Main;

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
  &:hover {
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
