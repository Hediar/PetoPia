import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { FaAlignJustify } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { useRef } from 'react';

function Header() {
  const navigate = useNavigate();
  // 햄버거 버튼 제어변수
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  // 펫 종류 []
  const pets = ['dog', 'cat', 'fish', 'bird', 'amphibia', 'reptile', 'etc'];

  const handleButtonClick = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  const onClickAnimal = (pet) => {
    navigate(`/detailPage/${pet}`);
  };

  const cursorRef = useRef();
  useEffect(() => {
    cursorRef.current.focus();
  }, []);
  return (
    <>
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
          <div></div>
          <Hamburger>
            <LoginBtn
              onClick={() => {
                navigate('/login', { state: { preURL: '/' } });
              }}
            >
              Login / Join us
            </LoginBtn>
            <BtnHamburger onClick={handleButtonClick}>
              <FaAlignJustify size="40" color="#eb9307" />
            </BtnHamburger>
            <InnerHamburger>
              {isButtonVisible && (
                <NavUl>
                  {pets.map((pet) => {
                    return <NavLi onClick={() => onClickAnimal(pet)}>{pet}</NavLi>;
                  })}
                </NavUl>
              )}
            </InnerHamburger>
          </Hamburger>
        </HeaderTop>
        <FormTag>
          <Forminput type="text" placeholder="검색어를 입력해 주세요." ref={cursorRef} />
          <FormBtn type="submit">검색</FormBtn>
          <RegisterBtn
            type="submit"
            onClick={() => {
              navigate('/posting');
            }}
          >
            게시글 작성하기
          </RegisterBtn>
        </FormTag>
      </Headerarea>
    </>
  );
}

export default Header;
const Headerarea = styled.div`
  background-color: #ffe066;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;

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
const LoginBtn = styled.button`
  width: 140px;
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

const FormTag = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;
const Forminput = styled.input`
  width: 450px;
  height: 50px;
  margin: 20px 0 20px 0;
  border-radius: 14px;
  border: 4px solid #eb9307;
  padding-left: 20px;
  background-color: white;
  font-size: 20px;
`;
const FormBtn = styled.button`
  height: 50px;
  border-radius: 14px;
  border: none;
  background-color: transparent;
  font-weight: bold;
  position: absolute;
  margin-right: -270px;
  &:hover {
    cursor: pointer;
  }
`;
const RegisterBtn = styled.button`
  width: 130px;
  margin-left: 20px;
  height: 56px;
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
