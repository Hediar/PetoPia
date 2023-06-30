import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import styled from 'styled-components';
import CardList from '../components/CardList';
import { db } from '../firebase';

const AnimalsInform = ({ animal }) => {
  const [cardData, setCardData] = useState(null);
  const [targetData, setTargetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'animals'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setCardData(data);
    };

    fetchData();
  }, []);
  console.log(cardData);
  useEffect(() => {
    if (cardData) {
      const animalData = cardData.find((data) => data.id === animal);

      if (animalData) {
        setTargetData(animalData);
        console.log(animalData.tips);
      }
    }
  }, [cardData, animal]);

  let about = '';
  let imageUrl = '';

  let tip1 = '';
  let tip2 = '';
  if (targetData) {
    about = targetData.about;
    imageUrl = targetData.imageUrl;
    tip1 = targetData.tips[0];
    tip2 = targetData.tips[1];
  }

  return (
    
    <Container>
      
      <PageTitle>대충 설명하는 영역</PageTitle>
      <Title>About: {about}</Title>
      <Image id="imgId" src={imageUrl} alt="Image" />
      <Title>- {tip1}</Title>
      <Title>- {tip2}</Title>

      <div>




        
      </div>
    </Container>
    
  );
};

export default AnimalsInform;

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  margin: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 20%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PageTitle = styled.h2`
  font-size: 24px;
`;
