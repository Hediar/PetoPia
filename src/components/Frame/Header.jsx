import React, { useState } from 'react';
import { styled } from 'styled-components';

function Header() {
  // 햄버거 버튼 제어변수
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleButtonClick = () => {
    setIsButtonVisible(!isButtonVisible);

    // 펫 종류 []
    // const pets = ['강아지', '고양이', '물고기', '조류', '파충류', '양서류', '기타'];
  };
  return (
    <>
      <HeaderTop>
        <ImgHeader>
          <img src="/PetoPia-Logo/merge-Logo.png" width="100" alt="PetoPia 로고" />
        </ImgHeader>
        <div></div>
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
    </>
  );
}

export default Header;

const HeaderTop = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgHeader = styled.div`
  border: none;
  margin-left: 40px;
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

const InnerHamburger = styled.div`
  border: none;
`;
