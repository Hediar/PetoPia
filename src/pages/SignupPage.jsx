import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
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

  const signUp = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return; // 비밀번호 불일치 에러 처리 후 함수 종료
    }

    // 이미 있는 이메일인지 확인
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('이미 사용 중인 이메일입니다.');
        return; // 이미 있는 이메일 에러 처리 후 함수 종료
      })
      .catch((error) => {
        // 회원가입 처리
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // 회원가입 성공시
            const user = userCredential.user;
            const uid = user.uid;

            // displayName 업데이트
            updateProfile(user, {
              displayName: displayName
            })
              .then(() => {
                console.log('displayName이 업데이트되었습니다.');
              })
              .catch((error) => {
                console.error('displayName 업데이트 중 오류:', error);
              });

            console.log(userCredential);
            // 회원가입 성공 후 원하는 동작 수행
          })
          .catch((error) => {
            // 회원가입 실패시
            console.error(error);
            // 회원가입 실패 후 원하는 동작 수행
          });
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
