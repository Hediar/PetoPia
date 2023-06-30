import 'firebase/firestore';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import styled from 'styled-components';
import Header from '../components/Frame/Header';
import Footer from '../components/Frame/Footer';
import FileUpload from './FileUpload';
import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { v4 as uuid } from 'uuid';

function Posting() {
  const [newAbout, setNewAbout] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newImgURL, setnewImgURL] = useState('');
  const [users, setUsers] = useState([]);

  const userCollectionRef = collection(db, 'fids');

  useEffect(() => {
    // 실시간 업데이트를 위한 onSnapshot 사용
    const unsubscribe = onSnapshot(userCollectionRef, (querySnapshot) => {
      const updatedUsers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setUsers(updatedUsers);
    });

    return () => {
      // 컴포넌트 언마운트 시에 unsubscribe
      unsubscribe();
    };
  }, []);

  const createUsers = async (event, newImgURL) => {
    event.preventDefault();
    if (newImgURL === undefined) return;

    if (newTitle.trim() === '' || newContent.trim() === '') {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    await addDoc(userCollectionRef, {
      id: uuid(),
      about: newAbout,
      title: newTitle,
      contents: newContent,
      createdBy: auth.currentUser.displayName,
      createUser: auth.currentUser.email,
      imgURL: newImgURL
    });

    // 글 등록 후 입력 폼 초기화
    setNewAbout('');
    setNewTitle('');
    setNewContent('');
    setnewImgURL('');
  };

  const showUsers = users.map((value) => (
    <Tabs key={value.id}>
      <h1>{value.title}</h1>
      <p>{value.contents}</p>
      <div>
        <img src={value.imgURL} width="100" alt="프로필 이미지" />
      </div>
      <DeleteButton onClick={() => deleteUserData(value.id)}>삭제</DeleteButton>
    </Tabs>
  ));
  const deleteUserData = async (id) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      try {
        await deleteDoc(doc(db, 'fids', id));
        console.log('성공적으로 삭제되었습니다.');
      } catch (error) {
        console.error('사용자 삭제 중 오류 발생: ', error);
      }
    }
  };

  // 카테고리 옵션 값 정의
  const categoryOptions = [
    '강아지',
    '고양이',
    '물고기',
    '조류',
    '파충류',
    '양서류',
    '기타',

    ''
    // ... 추가적인 카테고리 옵션들
  ];

  return (
    <>
      <Header />
      <Body>
        <Tit>회원님의 소중한 이야기를 적어주세요.</Tit>
        <Board>{showUsers}</Board>
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
            </TagI>
            <TagI>
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
              <FileUpload onImageUpload={createUsers} />
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
  margin: 100px 0;
  font-size: 2rem;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
const TextareaT = styled.input`
  width: 360px;
  height: 30px;
  border: 4px solid #eb9307;
  border-radius: 16px;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;
const Select = styled.select`
  width: 360px;
  height: 60px;
  border: 4px solid #eb9307;
  border-radius: 16px;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;
// const Te = styled.input`
//   width: 300px;
//   height: 30px;
//   border: 4px solid #eb9307;
//   border-radius: 14px;
//   margin: 0 10px 0 0;
//   font-size: 20px;
//   padding: 10px 10px 10px 14px;
//   box-shadow: 10px 5px 20px gray;
// `;
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
// const RegisterBtn = styled.button`
//   width: 120px;
//   height: 56px;
//   border-radius: 14px;
//   border: none;
//   background-color: #eb9307;
//   color: white;
//   font-weight: 600;
//   font-size: 0.9rem;
//   box-shadow: 10px 5px 20px gray;
//   &:hover {
//     cursor: pointer;
//     background-color: #ff8f05;
//     color: black;
//   }
// `;

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
