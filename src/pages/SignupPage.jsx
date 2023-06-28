import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const signUp = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error("비밀번호가 일치하지 않습니다.");
      // 비밀번호 불일치 에러 처리
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 회원가입 성공시
        console.log(userCredential);
        // 회원가입 성공 후 원하는 동작 수행
      })
      .catch((error) => {
        // 회원가입 실패시
        console.error(error);
        // 회원가입 실패 후 원하는 동작 수행
      });
  };

  return (
    <div className="App">
      <h2>회원가입 페이지</h2>
      <form>
        <div>
          <label>이메일:</label>
          <input type="email" value={email} name="email" onChange={onChange} required />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" value={password} name="password" onChange={onChange} required />
        </div>
        <div>
          <label>비밀번호 확인:</label>
          <input type="password" value={confirmPassword} name="confirmPassword" onChange={onChange} required />
        </div>
        <button onClick={signUp}>회원가입</button>
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
