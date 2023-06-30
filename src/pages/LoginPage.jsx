import React, { useEffect, useState } from 'react';
import { auth, loginCheck } from '../firebase';
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/modules/currentuser';

function LoginPage() {
  const navigate = useNavigate();
  const prelocation = useLocation();
  const user = useSelector((user) => user.currentuser);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  };

  useEffect(() => {
    if (loginCheck()) {
      alert('이미 로그인 상태입니다.');
      navigate(`${prelocation.state.preURL}`);
    }
  }, []);

  const handleLocation = () => {
    if (user) {
      if (prelocation.state) {
        navigate(`${prelocation.state.preURL}`);
      } else {
        navigate('/');
      }
    }
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      dispatch(setUser());
      handleLocation();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('이메일이 일치하지 않습니다.');
          break;
        case 'auth/wrong-password':
          alert('비밀번호가 일치하지 않습니다.');
          break;
        default:
          alert('로그인에 실패 했습니다.');
          break;
      }
    }
  };

  return (
    <div className="App">
      <h2>로그인 페이지</h2>
      <form>
        <div>
          <label>이메일 : </label>
          <input type="email" value={email} name="email" onChange={onChange} required></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input type="password" value={password} name="password" onChange={onChange} required></input>
        </div>

        <button onClick={signIn}>로그인</button>
      </form>
      <button
        onClick={() => {
          navigate('/signup');
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default LoginPage;
