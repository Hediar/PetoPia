import React from 'react';
import styled from 'styled-components';

function BottomCardTab() {
  return (
    <MainDrop>
      <BCTitle>최신 정보 & 소식</BCTitle>
      <Dum>
        <CoreImg>
          <CImg src="/imgs/pxfuel.jpg" alt="Image1" />
          <TaxtTag>
            강아지들의 행복 표현방법
            <br />
            <InnerText>흔하게 우리 주변에 가까이 사는 강아지들은 보호자의 사랑을 받는...</InnerText>
          </TaxtTag>
        </CoreImg>
        <SideImg>
          <InnerSide>
            <Img src="/imgs/cuteCat.png" width="240" alt="Image1" />
            <Ptext>
              <BottomTitle>초밥이였던 고양이</BottomTitle>
              <br />
              <Conternts>근육이 없는 고양이는 대부분 ...</Conternts>
              <Btn>더 보기</Btn>
            </Ptext>
          </InnerSide>
          <InnerSide>
            <Img src="/imgs/cuteLizzard.jpg" width="240" alt="Image1" />
            <Ptext>
              <BottomTitle>따뜻한 파충류</BottomTitle>
              <br />
              <Conternts>가끔 도마뱀을 만져보았을 때 ... </Conternts>
              <Btn>더 보기</Btn>
            </Ptext>
          </InnerSide>
        </SideImg>
      </Dum>
    </MainDrop>
  );
}

export default BottomCardTab;

const BCTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;
  padding-top: 10px;

  justify-content: center;
  margin: 40px 0;
`;
const MainDrop = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const Dum = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  justify-content: center;
  margin: 40px 0;
`;
const CoreImg = styled.div`
  border: none;
  border-radius: 30px;
  margin: 10px;
  position: relative;
`;
const CImg = styled.img`
  width: 100%;
  height: 93%;
  object-fit: cover;
  border-radius: 18px;
`;
const TaxtTag = styled.p`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 1.15rem;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  font-size: 1.5rem;
  padding-left: 10px;
  padding-top: 10px;
  background-color: white;
  opacity: 0.75;
  font-weight: bold;
`;
const InnerText = styled.p`
  font-size: 0.85rem;
  margin-top: 10px;
`;
const SideImg = styled.div`
  border: none;
  border-radius: 30px;
  margin: 10px;
`;
const Img = styled.img`
  width: 30%;
  height: 170px;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  object-fit: cover;
`;
const InnerSide = styled.div`
  box-sizing: border-box;
  border: 3px solid rgb(221, 221, 221);
  border-radius: 20px;
  width: 100%;
  display: flex;
  margin: 0 0 10px;
`;
const Ptext = styled.div`
  width: 70%;
  margin: 20px 20px 0 20px;
  line-height: 20px;
  font-size: 16px;
`;

const BottomTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Conternts = styled.div`
  height: 20%;
  overflow: hidden;
`;
const Btn = styled.button`
  float: right;
  margin-top: 30px;
  width: 80px;
  height: 40px;
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
