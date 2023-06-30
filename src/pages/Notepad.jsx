import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, query, setDoc } from 'firebase/firestore';

const Notepad = () => {
  useEffect(() => {
    //const collectionRef = doc(db, 'animals',);
    const citiesRef = collection(db, 'test');

    async function fetchData() {
      // 등록
      await setDoc(doc(citiesRef, 'SF'), {
        name: 'San Francisco',
        state: 'CA',
        country: 'USA',
        capital: false,
        population: 860000,
        regions: ['west_coast', 'norcal']
      });
    }

    fetchData();
  }, []);

  async function getData() {
    // 가져오기
    const docRef = doc(db, 'test', 'JcmHMHBkpIxN3sIR4P4B'); //
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
    }
  }
  getData();

  //   async function getMultipleData() {

  //     const q = query(collection(db, "test2"));

  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {    //doc.id  --> dog or cat
  //       // doc.data() is never undefined for query doc snapshots
  //       if(doc.id=== 'dog'){      // dog만 뽑아옴.
  //         console.log(doc.id, ' => ', doc.data());
  //       }

  //     });
  //   }
  //   getMultipleData();

  async function getMultipleData() {
    const q = query(collection(db, 'test2'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  }
  getMultipleData();

  return (
    <div>
      Notepad
      <InputForm></InputForm>
    </div>
  );
};

export default Notepad;

const InputForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;
`;
