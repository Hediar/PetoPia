import React, { useCallback, useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import styled from 'styled-components';
import { db } from '../firebase';

const AnimalsInform = ({ animal }) => {
  const [cardData, setCardData] = useState(null);
  const [targetData, setTargetData] = useState(null);

  // const fetchData = async () => {
  //   const q = query(collection(db, 'animals'));
  //   const querySnapshot = await getDocs(q);
  //   const data = {
  //     dog: {
  //       about:
  //         '중형 동물이자 가장 널리 분포하며 개체 수가 가장 많은 지상 동물 중 하나이며 가축화한 회색늑대이다. 개는 인류가 최초로 가축으로 삼은 동물로 알려져 있으며, 역사적으로 반려견, 사냥견으로서 길러 왔다.'
  //     }
  //   };

  //   setCardData(data);
  // };

  useEffect(() => {
    // fetchData();
    // console.log(cardData);

    if (cardData) {
      console.log(cardData);
      const animalData = cardData.find((data) => data.id === animal);

      if (animalData) {
        setTargetData(animalData);
      }
    }
  }, []);

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
