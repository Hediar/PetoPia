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
  // console.log(cardData);
  useEffect(() => {
    if (cardData) {
      const animalData = cardData.find((data) => data.id === animal);

      if (animalData) {
        setTargetData(animalData);
        // console.log(animalData.tips);
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
      <PageTitle>우리에게 필요한 기본 지식 !</PageTitle>
      <Title>About: {about}</Title>
      <InnerContent>
        <Image id="imgId" src={imageUrl} alt="Image" />
        <div>
          <h3>- {tip1}</h3>
          <h3>- {tip2}</h3>
        </div>
      </InnerContent>
    </Container>
  );
};

export default AnimalsInform;

const Container = styled.div`
  padding: 30px;
  margin: 20px;
`;
const PageTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;
const Title = styled.h2`
  font-size: 18px;
  margin-top: 10px;
  width: 100%;
  border-bottom: 3px dashed rgb(221, 221, 221);
  line-height: 20px;
  color: #333;
  margin-bottom: 20px;
`;

const InnerContent = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
  border: none;
  border-radius: 18px;
`;
