import React from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';
import Card from '../stylecomponents/Card';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
function Main() {
  // 햄버거 버튼 제어변수
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleButtonClick = () => {
    setIsButtonVisible(!isButtonVisible);

    // 펫 종류 []
    // const pets = ['강아지', '고양이', '물고기', '조류', '파충류', '양서류', '기타'];
  };
  return (
    <MainWrapper>
      <Header>
        <HeaderTop>
          <ImgHeader>
            <img src="/PetoPia-Logo/merge-Logo.png" width="100" alt="PetoPia 로고" />
          </ImgHeader>
          <Hamburger>
            <LoginBtn>Login / Join us</LoginBtn>
            <BtnHamburger onClick={handleButtonClick}>햄버거 버튼</BtnHamburger>
            <InnerHamburger>
              {isButtonVisible && (
                <ul>
                  <li>강아지</li>
                  <li>고양이</li>
                  <li>물고기</li>
                  <li>조류</li>
                  <li>파충류</li>
                  <li>양서류</li>
                  <li>기타</li>
                </ul>
              )}
            </InnerHamburger>
          </Hamburger>
        </HeaderTop>

        <FormTag>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="검색어를 입력해 주세요."
              ariaLabel="Recipient's username"
              ariaDescribedby="basic-addon2"
              style={{
                width: '500px',
                height: '50px',
                borderRadius: '14px',
                border: 'none',
                paddingLeft: '20px'
              }}
            />
            <FormBtn id="button-addon2">
              {/* variant="outline-secondary" 여기 props 안써서 오류나는 거네요 */}
              검색
            </FormBtn>
          </InputGroup>

          <button>게시글 작성하기</button>
        </FormTag>
      </Header>

      <MainBox
        style={{
          margin: '30px'
        }}
      >
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

      <Footer>
        <div>
          <Fspan>PetoPia Copyright 2023, All Rights Reserved</Fspan>
          <br />
          <Fspan>서울시 성북구 82-9 | 페토피아</Fspan>
          <br />
          <Fspan>페토피아 비마이 러브</Fspan>
          <br />
          <Fspan>발행 : 5조 | 편집 : 5조</Fspan>
          <br />
          <ImgFooter>
            <AppStoreIcon src="/imgs/icon-appstore-badge.png" width="200" alt="구글" />
            <PlayStoreIcon src="/imgs/icon-playstore.png" width="200" alt="구글" />
          </ImgFooter>
        </div>
      </Footer>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
const Header = styled.div`
  background-color: #ffe066;
  margin: 0 auto;
  padding: 10px;
`;
const MainBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const HeaderTop = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormTag = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;
const FormBtn = styled.button`
  //   width: 500px;
  height: 50px;
  border-radius: 14px;
  border: none;
  background-color: white;
  position: absolute;
  margin-left: -60px;
`;
const Hamburger = styled.div`
  border: none;
`;
const LoginBtn = styled.button`
  width: 140px;
  height: 20px;
`;
const BtnHamburger = styled.button`
  border: none;
`;

const ImgHeader = styled.div`
  border: none;
`;

const InnerHamburger = styled.div`
  border: none;
`;

const Footer = styled.div`
  background-color: #ffe066;

  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Fspan = styled.p`
  margin: 10px, 0, 10px, 0;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
const ImgFooter = styled.div`
  width: 400px;
  margin: 0 auto;
`;
const AppStoreIcon = styled.img`
  /* 우리님 수정 */
`;

const PlayStoreIcon = styled.img`
  /* 우리님 수정 */
`;

// Card
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
