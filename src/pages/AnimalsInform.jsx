import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import styled from 'styled-components';
import CardList from '../components/CardList';

const AnimalsInform = ({ animal }) => {
  const initialAnimals = [];
  const [dog, setDog] = useState([{}]);
  const [cat, setCat] = useState([{}]);
  
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'animals'));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        initialAnimals.push({ id: doc.id, ...doc.data() });
      });

      setCat(initialAnimals[0]);
      setDog(initialAnimals[1]);
    };

    fetchData();
  }, [animal]);

  let about = '';
  let imageUrl = '';

  switch (animal) {
    case '강아지':
      about = dog.about;
      imageUrl = dog.imageUrl;

      break;
    case '고양이':
      about = cat.about;
      imageUrl = cat.imageUrl;
      break;
    default:
      console.log('알 수 없는 동물입니다.');
  }

  return (
    <Container>
      <Title>About: {about}</Title>
      <Image id="imgId" src={imageUrl} alt="Image" />
      <div>
        <CardList />
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
