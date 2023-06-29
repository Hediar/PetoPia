import React, { useEffect, useState } from 'react';
import Footer from '../components/Frame/Footer';

import { MainWrapper } from '../stylecomponents/Wrapper';
import Headernav from '../components/Frame/Headernav';
import { styled } from 'styled-components';
import { Modal, ModalBackground } from '../stylecomponents/Modal';
import { commonButton } from '../stylecomponents/Button';
import { auth, loginCheck } from '../firebase';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function MyPage() {
  const user = useSelector((user) => user.currentuser);
  const [modalState, setModalState] = useState(false);
  const [nikname, setNikname] = useState('');

  const navigate = useNavigate();
  const openModal = () => {
    console.log(user);
    setNikname(`${user.displayname}`); // 닫았다가 다시 들어와도 기존 닉네임
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  // 프로필 업데이트
  const myupdateProfile = () => {};

  useEffect(() => {
    if (!loginCheck()) {
      alert('로그인 해주세요');
      navigate('/');
    }
  }, []);

  return (
    <>
      <Headernav />
      <MainWrapper>
        <Mypagetitle>
          <h1>My Page</h1>
          <Updateprofilebtn onClick={openModal}>프로필 수정하기</Updateprofilebtn>
        </Mypagetitle>
        <h2>내가 작성한 게시글</h2>
        <Section></Section>
      </MainWrapper>
      <Footer />
      {modalState && (
        <div>
          <ModalBackground />
          <Modal>
            <h2>프로필 사진</h2>
            <img src={`${user.photoURL}`} alt="profile"></img>
            <Findimgfile>파일 찾기</Findimgfile>
            <h2>닉네임</h2>
            <Input
              value={nikname}
              onChange={(e) => {
                setNikname(e.target.value);
              }}
            />
            <SaveMypagebtn onClick={myupdateProfile}>저장</SaveMypagebtn>
            <ModalClosebtn onClick={closeModal}>닫기</ModalClosebtn>
          </Modal>
        </div>
      )}
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
  display: flex;
  margin: 10px;
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

const ModalClosebtn = styled(commonButton)``;

const SaveMypagebtn = styled(commonButton)``;

const Findimgfile = styled(commonButton)``;

const Input = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;
