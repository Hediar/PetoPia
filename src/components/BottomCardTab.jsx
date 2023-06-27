import React from 'react';
import styled from 'styled-components';

function BottomCardTab() {
  return (
    <div>
      <BCTitle>최신 정보 & 소식</BCTitle>
      <Dum>
        <CoreImg>
          <CImg src="/imgs/pxfuel.jpg" width="570" alt="Image1" />
        </CoreImg>
        <SideImg>
          <InnerSide>
            <Img src="/imgs/cuteCat.png" width="240" alt="Image1" />
            <Ptext>
              <BottomTitle>초밥이였던 고양이</BottomTitle>
              <br />
              <div>근육이 없는 고양이는 대부분 ...</div>
              <Btn>더 보기</Btn>
            </Ptext>
          </InnerSide>
          <InnerSide>
            <Img src="/imgs/cuteLizzard.jpg" width="240" alt="Image1" />
            <Ptext>
              <BottomTitle>따뜻한 파충류</BottomTitle>
              <br />
              <div>가끔 도마뱀을 만져보았을 때 ... </div>
              <Btn>더 보기</Btn>
            </Ptext>
          </InnerSide>
        </SideImg>
      </Dum>
    </div>
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
const Dum = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));

  justify-content: center;
  margin: 40px 0;
`;
const CoreImg = styled.div`
  width: 95%;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 0 auto;
`;
const CImg = styled.img`
  height: 97%;
  border-radius: 18px;
  object-fit: cover;
`;
const SideImg = styled.div`
  width: 95%;
  height: 100%;
  border: none;
  border-radius: 30px;
  margin: 0 auto;
`;
const Img = styled.img`
  height: 170px;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  object-fit: cover;
`;
const InnerSide = styled.div`
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 20px;
  width: 100%;
  display: flex;
  margin: 0 0 10px;
`;
const Ptext = styled.div`
  width: 50%;
  margin: 20px 20px 0 20px;
  line-height: 20px;
  font-size: 16px;
`;

const BottomTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
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
  &: hover {
    cursor: pointer;
    background-color: #ff8f05;
    color: black;
  }
`;
