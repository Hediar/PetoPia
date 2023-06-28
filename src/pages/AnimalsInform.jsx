import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query } from 'firebase/firestore';

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
    <>
      <h2>About: {about}</h2>

      <img id="imgId" src={imageUrl} alt="Image" />
      {/* <h2>Tips: {tips}</h2> */}
    </>
  );
};

export default AnimalsInform;
