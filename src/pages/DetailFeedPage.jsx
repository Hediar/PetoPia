import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import AnimalsInform from './AnimalsInform';
import { Firestore, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useSelector } from 'react-redux';

const DetailFeedPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [contents, setContents] = useState('');
  const [title, setTitle] = useState('');

  const user = useSelector((user) => user.currentuser);
  // console.log(user);

  const navigate = useNavigate();
  const { animal } = useParams();
  const [cardData, setCardData] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  async function deleteHandler() {
    try {
      await deleteDoc(doc(db, 'test2', animal));
      navigate('/');
      alert('삭제완료');
    } catch {
      alert('삭제실패');
    }
  }

  const updateHandler = async () => {
    try {
      const citiesRef = collection(db, 'test2');
      const docRef = doc(citiesRef, animal);
      await updateDoc(docRef, { title, contents });
      setTitle('');
      setContents('');
      alert('수정이 완료되었습니다! ');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  // 회원인지 아닌지에 따른 변화
  useEffect(() => {
    const getData = async () => {
      try {
        const docRef = doc(db, 'test2', animal);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCardData([docSnap.data()]);
          if (docSnap.data().createdBy === user.email && Object.keys(user).length !== 0) {
            setIsEditing(true);
          } else {
            setIsEditing(false);
          }
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    getData();
  }, [animal, user]);

  return (
    <Wrapper>
      <Button onClick={() => navigate('/')}>Home으로 가기</Button>

      <ContentWrapper>
        {isEditing && (
          <Form onSubmit={onSubmitHandler}>
            {cardData.map((card) => (
              <div key={card.id}>
                <p>작성자: {card.createdBy}</p>
                <p>제목: {card.title}</p>
                <p>내용: {card.contents}</p>
                <Image src={card.imageUrl} alt="이미지" />
                <br />
                <Input
                  placeholder="제목"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <Input
                  placeholder="내용"
                  value={contents}
                  onChange={(e) => {
                    setContents(e.target.value);
                  }}
                ></Input>
                <br />
                <Button onClick={updateHandler}>수정</Button>
                <Button onClick={deleteHandler}>삭제</Button>
                <br />
     
              </div>
            ))}
          </Form>
        )}
      </ContentWrapper>
      <PageTitle>Detail PAGE</PageTitle>
      <AnimalsInform animal={animal} />
    </Wrapper>
  );
};

export default DetailFeedPage;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  border: 3px solid rgb(221, 221, 221);
  margin: 1rem;
`;

const Form = styled.form`
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 50;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PageTitle = styled.h3`
  margin-top: 2rem;
  font-size: 24px;
`;
