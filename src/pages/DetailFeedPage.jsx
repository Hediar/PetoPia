import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import AnimalsInform from './AnimalsInform';
import { Firestore, collection, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useSelector } from 'react-redux';

const DetailFeedPage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const user = useSelector((user) => user.currentuser);
  // console.log(user);

  const navigate = useNavigate();
  const { animal } = useParams();
  const [cardData, setCardData] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert('clicked');
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

  const updateHandler = () => {
    useEffect(() => {
      // bucket이라는 변수로 firestore의 collection인 test2 접근

      const citiesRef = collection(db, 'test2');
      // bucket 콜렉션의 bucket_item 문서의 name 필드 duck2로 바꾸기
      citiesRef.doc(animal).update({ contents: 'duck2' });
    });
  };

  useEffect(() => {
    async function getData() {
      try {
        const docRef = doc(db, 'test2', animal);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // 해당 키 값에 해당하는 정보 가져옴(animal)
          setCardData([docSnap.data()]);

          // 유저가 로그인했고 글 주인의 이메일이 유저 이메일과 같을 시
          if (docSnap.data().createdBy === user.email && Object.keys(user).length !== 0) {
            console.log(docSnap.data().createdBy + '----' + user.email);
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
    }

    getData();
  }, [animal]);

  return (
    <Wrapper>
      <Button onClick={() => navigate('/')}>Home으로 가기</Button>

      <ContentWrapper>
        {isEditing && (
          <Form onSubmit={onSubmitHandler}>
            {cardData.map((card) => (
              <div key={card.id}>
                <p>작성자: {card.author}</p>
                <p>제목: {card.title}</p>
                <p>내용: {card.contents}</p>
                <Image src={card.imageUrl} alt="이미지" />
                <br />
                <Input placeholder="제목" />
                <Input placeholder="내용" />
                <br />
                <Button onClick={updateHandler}>수정</Button>
                <Button onClick={deleteHandler}>삭제</Button>
                <br />
                <Button>작성완료</Button>
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
