import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import AnimalsInform from './AnimalsInform';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const DetailPage = () => {
  const navigate = useNavigate();
  const { animal } = useParams();
  const [cardData, setCardData] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    async function getData() {
      try {
        const docRef = doc(db, 'test2', animal);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCardData([docSnap.data()]);
          console.log('Document data:', docSnap.data());
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
        <Form onSubmit={onSubmitHandler}>
          {cardData.map((card) => (
            <div key={card.id}>
              <p>작성자: {card.createdBy}</p>
              <p>제목: {card.title}</p>
              <p>내용: {card.contents}</p>
              <Image src={card.imageUrl} alt="이미지" />
              <br />
            </div>
          ))}
        </Form>
      </ContentWrapper>
      <PageTitle>Detail PAGE</PageTitle>
      <AnimalsInform animal={animal} />
    </Wrapper>
  );
};

export default DetailPage;

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
