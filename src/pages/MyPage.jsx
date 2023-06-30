import React, { useEffect, useState } from 'react';
import Footer from '../components/Frame/Footer';
import { MainWrapper } from '../stylecomponents/Wrapper';
import Headernav from '../components/Frame/Headernav';
import { styled } from 'styled-components';
import { Modal, ModalBackground } from '../stylecomponents/Modal';
import { commonButton } from '../stylecomponents/Button';
import { auth, loginCheck, storage } from '../firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { onAuthStateChanged, updateProfile } from '@firebase/auth';
import { setUser } from '../redux/modules/currentuser';

function MyPage() {
  const DEFAULT_PHOTO =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541';
  const user = useSelector((user) => user.currentuser);
  const [modalState, setModalState] = useState(false);
  const [nikname, setNikname] = useState('');
  const [photo, setPhoto] = useState(DEFAULT_PHOTO); // 보여지는 사진
  const [selectefFile, setselectefFile] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // state set 함수
  const openModal = () => {
    setNikname(`${user.displayname}`); // 닫았다가 다시 들어와도 기존 닉네임
    if (user.photoURL === undefined) {
      setPhoto(DEFAULT_PHOTO);
    } else {
      setPhoto(user.photoURL);
    }
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const handleFileSelect = (event) => {
    setselectefFile(event.target.files[0]);
  };

  const handleFileSelectName = () => {
    if (selectefFile === null) {
      return '이미지 없음';
    } else {
      return selectefFile.name;
    }
  };

  // 사진 업로드
  const handleUpload = async () => {
    const profileimgRef = ref(storage, `profile/${user.uid}/profilePhoto`);

    if (selectefFile === null && user.photoURL === DEFAULT_PHOTO) {
      myupdateProfile(nikname, DEFAULT_PHOTO);
    } else {
      await uploadBytes(profileimgRef, selectefFile); // 파일 업로드

      const downloadURL = await getDownloadURL(profileimgRef);

      myupdateProfile(nikname, downloadURL);
    }
  };

  // 프로필 업데이트
  const myupdateProfile = async (newName, newPhoto) => {
    await updateProfile(auth.currentUser, {
      displayName: newName,
      photoURL: newPhoto
    })
      .then(() => {
        dispatch(setUser());
      })
      .then(() => {
        setNikname(user.displayName);
        setPhoto(user.photoURL);
        alert('프로필이 업데이트 되었습니다!');
        closeModal();
      })
      .catch((error) => {
        alert('프로필 업데이트에 실패했습니다.');
      });
  };

  useEffect(() => {
    dispatch(setUser());
    if (!loginCheck()) {
      // alert('로그인 해주세요');
      navigate('/');
    } else {
      console.log('change user', user);
      onAuthStateChanged(auth, (user) => {
        setPhoto(user.photoURL);
        setNikname(user.displayName);
      }); // 사용자 인증정보가 바뀔 때 마다
    }
  }, [user.photoURL]);

  return (
    <>
      <Headernav />
      <MainWrapper>
        <MypageWrap>
          <h1>My Page</h1>
          <Updateprofilebtn onClick={openModal}>프로필 수정하기</Updateprofilebtn>
        </MypageWrap>
        <MypageWrap>
          <h2>내가 작성한 게시글</h2>
        </MypageWrap>
        <Section></Section>
      </MainWrapper>
      <Footer />
      {modalState && (
        <div>
          <ModalBackground />
          <Modal>
            <h2>프로필 사진</h2>
            <Myprofileimg src={photo} alt="avatar" />

            <Findimgfile>
              <label htmlFor="ex_file">파일 선택</label>
              <input
                type="file"
                id="ex_file"
                onChange={(e) => {
                  handleFileSelect(e);
                }}
                accept="image/*"
              />
              {handleFileSelectName()}
            </Findimgfile>

            <h2>닉네임</h2>
            <Input
              value={nikname}
              onChange={(e) => {
                setNikname(e.target.value);
              }}
            />
            <SaveMypagebtn onClick={handleUpload}>저장</SaveMypagebtn>
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

const MypageWrap = styled.div`
  display: flex;
  width: 90%;
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

// 파일 선택 style

const Findimgfile = styled.div`
  margin: 25px 8px 30px 5px;
  img {
    max-width: 325px;
  }
  label {
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

    &:active {
      background-color: #0d3f8f;
      color: white;
    }
  }
  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const Input = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

const Myprofileimg = styled.img`
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-width: 5px;
  border-color: gray;
  border-style: outset;
`;
