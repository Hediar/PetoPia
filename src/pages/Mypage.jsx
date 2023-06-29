import React from 'react';
import Footer from '../components/Frame/Footer';

import { MainWrapper } from '../stylecomponents/Wrapper';
import Headernav from '../components/Frame/Headernav';
import { styled } from 'styled-components';

function MyPage() {
  return (
    <>
      <Headernav />
      <MainWrapper>
        <Mypagetitle>
          <h1>My Page</h1>
          <Updateprofilebtn>프로필 수정하기</Updateprofilebtn>
        </Mypagetitle>
        <Mypagetitle>
          <h2>내가 작성한 게시글</h2>
        </Mypagetitle>
        <Section></Section>
      </MainWrapper>
      <Footer />
    </>
  );
}

export default MyPage;

const Section = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  font-weight: bold;
`;

const Mypagetitle = styled.div`
  width: 65%;

  display: flex;
  margin: 0 auto;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;
`;

const Updateprofilebtn = styled.button`
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
