import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import Headernav from './Headernav';
import { Headerarea } from '../../stylecomponents/Wrapper';
import { loginCheck } from '../../firebase';

function Header() {
  const navigate = useNavigate();
  const cursorRef = useRef();
  const movePostingPage = () => {
    if (loginCheck()) {
      navigate('/posting');
    } else {
      alert('로그인 해주세요!');
    }
  };
  useEffect(() => {
    cursorRef.current.focus();
  }, []);
  return (
    <>
      <Headerarea>
        <Headernav />

        <FormTag>
          <Forminput type="text" placeholder="검색어를 입력해 주세요." ref={cursorRef} />
          <FormBtn type="submit">검색</FormBtn>
          <RegisterBtn type="submit" onClick={movePostingPage}>
            게시글 작성하기
          </RegisterBtn>
        </FormTag>
      </Headerarea>
    </>
  );
}

export default Header;
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
