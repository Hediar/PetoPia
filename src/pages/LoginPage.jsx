import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setUser } from '../redux/modules/currentuser';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
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
  // useEffect(() => {
  //   console.log(location);
  // }, []);

  const handleLocation = () => {
    if (user) {
      if (location.state) {
        navigate(`${location.state.preURL}`);
      } else {
        navigate('/');
      }
    }
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      const newUser = {
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        displayname: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL
      };

      dispatch(setUser(newUser));
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found' || 'auth/wrong-password':
          return alert('이메일 혹은 비밀번호가 일치하지 않습니다.');
        default:
          return alert('로그인에 실패 했습니다.');
      }
    }

    handleLocation();
  };
  const logOut = async (event) => {
    event.preventDefault();
    alert('로그아웃 되었습니다.').then(dispatch(deleteUser));

    await signOut(auth);
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
        <button onClick={logOut}>로그아웃</button>
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
