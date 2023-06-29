import { collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

const TodoItem = ({ todo, setTodos }) => {
  const updateTodo = async (event) => {
    const todoRef = doc(db, 'users', todo.id);
    await updateDoc(todoRef, { ...todo, isDone: !todo.isDone });

    setTodos((prev) => {
      return prev.map((element) => {
        if (element.id === todo.id) {
          return { ...element, isDone: !element.isDone };
        } else {
          return element;
        }
      });
    });
  };

  const deleteTodo = async (event) => {
    const todoRef = doc(db, 'users', todo.id);
    await deleteDoc(todoRef);

    setTodos((prev) => {
      return prev.filter((element) => element.id !== todo.id);
    });
  };

  return (
    <div key={todo.id}>
      <span>{todo.text}</span>
      {/* <button onClick={updateTodo}>{todo.isDone ? '취소' : '완료'}</button> */}
      <button onClick={deleteTodo}>삭제</button>
    </div>
  );
};

export default TodoItem;
