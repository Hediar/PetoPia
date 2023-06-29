import React, { useState } from 'react';
import Footer from '../components/Frame/Footer';

import { MainWrapper } from '../stylecomponents/Wrapper';
import Headernav from '../components/Frame/Headernav';
import { styled } from 'styled-components';
import { Modal, ModalBackground } from '../stylecomponents/Modal';
import { commonButton } from '../stylecomponents/Button';

function MyPage() {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

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
            <SaveMypagebtn>저장</SaveMypagebtn>
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
