import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Footer from '../components/Frame/Footer';
import Header from '../components/Frame/Header';
import { MainWrapper } from '../stylecomponents/Wrapper';
import BottomCardTab from '../components/BottomCardTab';
// import CardList from '../components/CardList';
import { useSelector } from 'react-redux';
import CardList from '../components/CardList';

function Main() {
  const fids = useSelector((fids) => fids.fids);

  useEffect(() => {}, [fids]);

  return (
    <>
      <Header />
      <MainWrapper>
        <CoreBox>
          <MypageWrap>
            <BtnBest>인기글</BtnBest>
            <BtnBest>최신글</BtnBest>
            <BCTitle>사랑스런 친구들의 이야기</BCTitle>
          </MypageWrap>
          <SectionDiv>
            <Section>
              <CardList fids={fids} />
            </Section>
          </SectionDiv>
          <BottomCardTab />
        </CoreBox>
      </MainWrapper>
      <Footer />
    </>
  );
}

export default Main;

const CoreBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px;
`;

const MypageWrap = styled.div`
  width: 72%;
  display: flex;
  margin: 0 auto;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;
`;

const SectionDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Section = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  font-weight: bold;
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
  margin-left: -10rem;
  justify-content: center;
  z-index: -99;
`;
