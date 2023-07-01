import 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';
import Header from '../components/Frame/Header';
import Footer from '../components/Frame/Footer';
import FileUpload from './FileUpload';
import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';

import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { addFids } from '../redux/modules/fids';

function Posting() {
  const [newAbout, setNewAbout] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newImgURL, setnewImgURL] = useState('');

  const userCollectionRef = collection(db, 'fids');
  const dispatch = useDispatch();

  const fidId = shortid.generate(); // 등록할 fid id

  const createUsers = async (event, newImgURL) => {
    event.preventDefault();
    if (newImgURL === undefined) return;

    if (newTitle.trim() === '' || newContent.trim() === '') {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const newFid = {
      id: fidId,
      about: newAbout,
      title: newTitle,
      contents: newContent,
      createdBy: auth.currentUser.displayName,
      createUser: auth.currentUser.email,
      imgURL: newImgURL
    };

    await addDoc(userCollectionRef, newFid);

    // 글 등록 후 입력 폼 초기화
    setNewAbout('');
    setNewTitle('');
    setNewContent('');
    setnewImgURL('');

    dispatch(addFids(newFid));

    alert('피드가 등록되었습니다!');
  };

  // 카테고리 옵션 값 정의
  const categoryOptions = [
    'dog',
    'cat',
    'fish',
    'bird',
    'amphibia',
    'reptile',
    'etc',

    ''
    // ... 추가적인 카테고리 옵션들
  ];

  return (
    <>
      <Header />
      <Body>
        <Tit>회원님의 소중한 이야기를 적어주세요.</Tit>
        {/* <Board>{showUsers}</Board> */}
        <InputForm onSubmit={createUsers}>
          <InputBody>
            <TagI>
              <Select value={newAbout} onChange={(e) => setNewAbout(e.target.value)}>
                <option value="">카테고리를 선택해주세요.</option>
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
              <TextareaT
                type="text"
                placeholder="제목을 입력해주세요."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </TagI>
            <TagI>
              <TextareaC
                type="text"
                placeholder="회원님의 소중한 글을 남겨주세요."
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
            </TagI>
            <TagTab>
              <FileUpload onImageUpload={createUsers} newFidId={fidId} />
            </TagTab>
          </InputBody>
        </InputForm>
      </Body>
      <Footer />
    </>
  );
}

export default Posting;

const Body = styled.div`
  width: 1200px;
  margin: 0 auto;
  // height: 619px;
  min-height: 619px; /* 최소 높이를 지정합니다 */
`;
const Tit = styled.h2`
  display: flex;
  justify-content: center;
  margin: 90px 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const InputBody = styled.div`
  width: 100%;
  margin: 0 0 40px;
`;
const TagI = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const TagTab = styled.div`
  margin-top: 20px;
`;
const InputForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Select = styled.select`
  width: 350px;
  height: 60px;
  border: 4px solid #eb9307;
  border-radius: 16px;
  margin: 10px 10px 0 0;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;
const TextareaT = styled.input`
  width: 350px;
  height: 30px;
  border: 4px solid #eb9307;
  border-radius: 16px;
  margin: 10px 0 0 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;

const TextareaC = styled.textarea`
  width: 730px;
  height: 200px;
  border: 4px solid #eb9307;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;
const Tabs = styled.div`
  width: 230px;
  height: 200px;
  border: 4px solid #f1f3f5;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 10px;
  overflow: hidden;
  display: inline-block; /* 가로로 배치되도록 설정 */
  margin-right: 10px; /* 각 탭 사이의 간격 설정 */
`;
const DeleteButton = styled.button`
  width: 80px;
  height: 32px;
  float: right;
  border-radius: 8px;
  border: none;
  background-color: red;
  color: white;
  font-size: 0.9rem;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: darkred;
  }
`;

const TabsTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
const TabsP = styled.h1`
  font-size: 16px;
`;
const ImgTag = styled.img`
  width: 140px;
  height: auto;
`;
