import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

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
    if (name === 'displayName') {
      setDisplayName(value);
    }
  };

  const signUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return; // 비밀번호 불일치 에러 처리 후 함수 종료
    } else if (displayName === '') {
      alert('닉네임을 입력해주세요');
      return;
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // displayName 업데이트
        await updateProfile(user, {
          displayName: displayName
        })
          .then(() => {
            alert('회원가입이 완료되었습니다.');
            navigate('/login');
          })
          .catch((error) => {
            console.error('displayName 업데이트 중 오류:', error);
          });
      } catch (error) {
        const errorCode = error.code;

        console.log(errorCode);
        switch (errorCode) {
          case 'auth/invalid-email':
            alert('이메일을 입력해주세요');
            break;
          case 'auth/missing-password':
            alert('비밀번호를 입력해주세요');
            break;
          default:
            alert('회원가입에 실패했습니다.');
            break;
        }
      }
    }
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
        <div>
          <label>닉네임:</label>
          <input type="text" value={displayName} name="displayName" onChange={onChange} required />
        </div>
        <button onClick={signUp}>회원가입</button>
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          뒤로가기
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
