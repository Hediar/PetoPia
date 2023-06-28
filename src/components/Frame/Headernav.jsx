import React, { useEffect, useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { Headerarea } from '../../stylecomponents/Wrapper';

function Headernav() {
  const navigate = useNavigate();
  const [myPageButtonVisible, setmyPageButtonVisible] = useState(false);
  const user = useSelector((user) => user.currentuser);

  // 햄버거 버튼 제어변수
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleButtonClick = () => {
    setIsButtonVisible(!isButtonVisible);

    // 펫 종류 []
    // const pets = ['강아지', '고양이', '물고기', '조류', '파충류', '양서류', '기타'];
  };
  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      setmyPageButtonVisible(true);
    }
  }, []);
  return (
    <Headerarea>
      <HeaderTop>
        <ImgHeader>
          <img
            src="/PetoPia-Logo/merge-Logo.png"
            width="140"
            alt="PetoPia 로고"
            onClick={() => {
              navigate('/');
            }}
          />
        </ImgHeader>

        <Hamburger>
          <LoginBtn
            onClick={() => {
              navigate('/login', { state: { preURL: '/' } });
            }}
          >
            Login / Join us
          </LoginBtn>
          {myPageButtonVisible && (
            <MyPagebtn
              onClick={() => {
                navigate('/mypage');
              }}
            >
              마이페이지
            </MyPagebtn>
          )}

          <BtnHamburger onClick={handleButtonClick}>
            <FaAlignJustify size="40" color="#eb9307" />
          </BtnHamburger>
          <InnerHamburger>
            {isButtonVisible && (
              <NavUl>
                <NavLi>강아지</NavLi>
                <NavLi>고양이</NavLi>
                <NavLi>물고기</NavLi>
                <NavLi>조류</NavLi>
                <NavLi>파충류</NavLi>
                <NavLi>양서류</NavLi>
                <NavLi>기타</NavLi>
              </NavUl>
            )}
          </InnerHamburger>
        </Hamburger>
      </HeaderTop>
    </Headerarea>
  );
}

export default Headernav;

const HeaderTop = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgHeader = styled.div`
  width: 400px;
  text-align: center;
`;

const Hamburger = styled.div`
  display: flex;
  margin: -70px 20px 0 0;
  position: relative;
`;
const commonButton = styled.button`
  background-color: #eb9307;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 14px;
  border: none;
  padding: 10px;
  margin: 3px;
  height: 40px;
  &:hover {
    cursor: pointer;
    background-color: #ff8f05;
    color: black;
  }
`;

const LoginBtn = styled(commonButton)`
  width: 140px;
`;
const MyPagebtn = styled(commonButton)`
  width: 100px;
`;
const BtnHamburger = styled.button`
  width: 50px;
  border: none;
  background-color: transparent;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
const NavUl = styled.ul`
  position: absolute;
  width: 220px;
  top: 50px;
  right: 20px;
  border: none;
  border-radius: 18px 0 18px 18px;
  background-color: white;
  padding: 10px;
  box-shadow: 4px 10px 20px gray;
`;
const NavLi = styled.li`
  // width: 100%;
  margin: 10px 0 10px 0;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    background-color: #ff8f05;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const InnerHamburger = styled.div`
  font-size: 20px;
  padding: 4px;
  z-index: 999;
`;
