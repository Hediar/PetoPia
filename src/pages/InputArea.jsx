import React from 'react';
import { db } from '../firebase';
import { useState, useEffect } from 'react';
import 'firebase/firestore';
import { collection, getDocs, addDoc, query } from 'firebase/firestore';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import FileUpload from './FileUpload';
import TodoItem from './TodoItem';

// const [newTitle, setNewTitle] = useState('');
// const [newContent, setNewContent] = useState('');
// console.log(newTitle, newContent);

// const [user, setUser] = useState([]);

// const userCollectionRef = collection(db, 'users');

// // const uniqueId = useId();
// // console.log(uniqueId);

// useEffect(() => {
//   const getUser = async () => {
//     const data = await getDocs(userCollectionRef);
//     setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };
//   getUser();
// }, []);

// const createUsers = async () => {
//   console.log(newTitle, newContent);
//   await addDoc(userCollectionRef, { title: newTitle, content: newContent });
// };

// const showUser = user.map((value) => (
//   <Tabs key={uuid()}>
//     <h1>{value.title}</h1>
//     <p>{value.content}</p>
//     <div>
//       <img src={value.profileImg} width="100" alt="Profile Image"></img>
//     </div>
//   </Tabs>
// ));
function InputArea() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'users'));
      const querySanpshot = await getDocs(q);

      const initialTodos = [];

      querySanpshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };
        // console.log(data);
        initialTodos.push(data);
      });
      setTodos(initialTodos);
    };
    fetchData();
  }, []);

  const [text, setText] = useState('');

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event;
    if (name === 'text') {
      setText(value);
    }
  };

  const addTodo = async (event) => {
    event.preventDefault();
    const newTodo = { text: text, isDone: false };
    setTodos((prev) => {
      return [...todos, newTodo];
    });
    setText('');

    const collectionRef = collection(db, 'users');
    await addDoc(collectionRef, newTodo);
  };
  return (
    <div>
      <Tit>회원님의 소중한 이야기를 적어주세요.</Tit>
      <InputForm>
        <InputBody>
          <TagI>
            <TextareaT
              type="text"
              placeholder="제목을 입력해 주세요."
              value={text}
              name="text"
              onChange={onChange}
              required
            />
          </TagI>
          {/* <TagI>
            <TextareaC
              type="text"
              placeholder="제목을 입력해 주세요."
              value={text}
              name="text"
              onChange={onChange}
              required
            />
          </TagI> */}
          <TagTab>
            <FileUpload />
            <RegisterBtn onClick={addTodo}>추가</RegisterBtn>
          </TagTab>
        </InputBody>
      </InputForm>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => {
          return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
        })}
      {/* <h3>Done</h3>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => {
          return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
        })} */}
    </div>
  );
}
//   return (
//     <>
//       <Tit>회원님의 소중한 이야기를 적어주세요.</Tit>

//       <InputForm>
//         <InputBody>
//           <TagI>
//             <TextareaT
//               type="text"
//               placeholder="제목을 입력해주세요."
//               value={newTitle}
//               onChange={(e) => {
//                 setNewTitle(e.target.value);
//               }}
//             />
//           </TagI>
//           <TagI>
//             <TextareaC
//               type="text"
//               placeholder="회원님의 소중한 글을 남겨주세요."
//               value={newContent}
//               onChange={(e) => {
//                 setNewContent(e.target.value);
//               }}
//             />
//           </TagI>
//           <TagTab>
//             <FileUpload />
//             <RegisterBtn onClick={createUsers}>글 등록하기</RegisterBtn>
//           </TagTab>
//         </InputBody>
//       </InputForm>

//       <Section>
//         <Post>{showUser}</Post>
//       </Section>
//     </>
//   );
// }

export default InputArea;

const Tit = styled.h2`
  display: flex;
  justify-content: center;
  margin: 100px 0 60px;
  font-size: 2rem;
`;
const InputBody = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
`;

const TagI = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
`;
const TagTab = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
`;
const InputForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;
`;

const TextareaT = styled.input`
  width: 730px;
  height: 30px;
  border: 4px solid #eb9307;
  border-radius: 16px;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;
const TextareaC = styled.textarea`
  width: 730px;
  height: 200px;
  border: 4px solid #eb9307;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;

const RegisterBtn = styled.button`
  width: 120px;
  height: 56px;
  margin: 0 20px;
  border-radius: 14px;
  border: none;
  background-color: #eb9307;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 10px 5px 20px gray;
  &:hover {
    cursor: pointer;
    background-color: #ff8f05;

    color: black;
  }
`;

// const Section = styled.div`
//   // display: flex;

//   // justify-content: center;
//   // text-align: center;
//   margin: 0 auto;
//   margin: 80px 0 100px;
//   font-weight: bold;
// `;

// const Post = styled.div`
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   box-shadow: 10px 5px 20px gray;
//   border-radius: 20px;
//   padding: 10px;
// `;

// const Tabs = styled.div`
//   width: 230px;
//   height: 200px;
//   border: 4px solid #f1f3f5;
//   border-radius: 20px;
//   padding: 10px;
//   overflow: hidden;
// `;