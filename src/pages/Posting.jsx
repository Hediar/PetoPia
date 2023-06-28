import React, { useState, useEffect, useId } from 'react';
import { db } from '../firebase';
import { Firestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { styled } from 'styled-components';
import uuid from 'react';
import Header from '../components/Frame/Header';
import Footer from '../components/Frame/Footer';

function Posting() {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);

  console.log(newName, newAge);

  const [user, setUser] = useState([]);

  const userCollectionRef = collection(db, 'dapi');

  const uniqueId = useId();

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);

  const createUsers = async () => {
    await addDoc(userCollectionRef, { name: newName, age: newAge });
  };

  const showUser = user.map((value) => (
    <div key={uniqueId}>
      <h1>Name : {value.name}</h1>
      <h1>Age : {value.age}</h1>
      <h1>isDone : {value.isDone}</h1>
    </div>
  ));
  return (
    <div>
      <Header />
      <Tit>Posting</Tit>
      <InputForm>
        <input
          type="text"
          placeholder="name..."
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="age..."
          onChange={(e) => {
            setNewAge(e.target.value);
          }}
        />
        <button onClick={createUsers}>Create User</button>
      </InputForm>
      <Section>{showUser}</Section>
      <Footer />
    </div>
  );
}

export default Posting;

const Tit = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
`;
const InputForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  font-weight: bold;
`;
// import { async } from '@firebase/util';
// import { Firestore } from 'firebase/firestore';
// import React, { useState } from 'react';
// import { styled } from 'styled-components';

// function Posting() {
//   const [addName, setAddName] = useState('');
//   const [addAge, setAddAge] = useState('');
//   const addCollection = Firestore().colleticon('할 일2');

//   const addText = async () => {
//     try {
//       await addCollection.add({
//         name: addName,
//         age: addAge
//       });
//       setAddName('');
//       setAddAge('');
//       console.log('Creating !!!!');
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   return (
//     <div>
//       DetailPage
//       <TextInput placeholder="name" value={addName} onChange={(e) => setAddName(e.target.value)} />
//       <TextInput placeholder="age" value={addAge} onChange={(e) => setAddName(e.target.value)} />
//       <Button title="Add text" onPress={addText} />
//     </div>
//   );
// }

// const TextInput = styled.input`
//   width: 200px;
// `;
// const Button = styled.button`
//   padding: 10px;
// `;
// export default Posting;
