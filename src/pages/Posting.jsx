import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import 'firebase/firestore';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import Header from '../components/Frame/Header';
import Footer from '../components/Frame/Footer';
function Posting() {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  console.log(newTitle, newContent);
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, 'users');
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  const createUsers = async () => {
    await addDoc(userCollectionRef, { title: newTitle, content: newContent });
  };
  const showUser = user.map((value) => (
    <Tabs key={uuid()}>
      <h1>{value.title}</h1>
      <p>{value.content}</p>
      <div>
        <img src={value.profileImg} width="100" alt="Profile Image"></img>
      </div>
    </Tabs>
  ));
  return (
    <>
      <Header />
      <Body>
        <Tit>회원님의 소중한 이야기를 적어주세요.</Tit>
        <InputForm>
          <InputBody>
            <TagI>
              <TextareaT
                type="text"
                placeholder="제목을 입력해주세요."
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              />
            </TagI>
            <TagI>
              <TextareaC
                type="text"
                placeholder="회원님의 소중한 글을 남겨주세요."
                onChange={(e) => {
                  setNewContent(e.target.value);
                }}
              />
            </TagI>
            <TagTab>
              <Te
                type="file"
                placeholder="제목을 입력해주세요."
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              />
              <RegisterBtn onClick={createUsers}>글 등록하기</RegisterBtn>
            </TagTab>
          </InputBody>
        </InputForm>
        {/* <Section>
          <Post>{showUser}</Post>
        </Section> */}
      </Body>
      <Footer />
    </>
  );
}
export default Posting;
const Body = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 619px;
`;
const Tit = styled.h2`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  font-size: 2rem;
`;
const InputBody = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
`;
const TagI = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
`;
const TagTab = styled.div`
  width: 680px;
  float: right;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
`;
const InputForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;
`;
const TextareaT = styled.input`
  width: 730px;
  height: 30px;
  border: 4px solid #eb9307;
  border-radius: 16px;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;
const Te = styled.input`
  width: 300px;
  height: 30px;
  border: 4px solid #eb9307;
  border-radius: 14px;
  margin: 0 10px 0 0;
  font-size: 20px;
  padding: 10px 10px 10px 14px;
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
const RegisterBtn = styled.button`
  width: 120px;
  height: 56px;
  border-radius: 14px;
  border: none;
  background-color: #eb9307;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 10px 5px 20px gray;
  &:hover {
    cursor: pointer;
    background-color: #ff8f05;
    color: black;
  }
`;
// const Section = styled.div`
//   // display: flex;
//   // justify-content: center;
//   // text-align: center;
//   margin: 0 auto;
//   margin: 80px 0 100px;
//   font-weight: bold;
// `;
// const Post = styled.div`
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   box-shadow: 10px 5px 20px gray;
//   border-radius: 20px;
//   padding: 10px;
// `;
const Tabs = styled.div`
  width: 230px;
  height: 200px;
  border: 4px solid #f1f3f5;
  border-radius: 20px;
  padding: 10px;
  overflow: hidden;
`;
