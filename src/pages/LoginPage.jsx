import React, { useEffect, useState } from 'react';
import { auth, loginCheck } from '../firebase';
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router';
import { styled } from 'styled-components';
import { commonButton } from '../stylecomponents/Button';
function LoginPage() {
  const navigate = useNavigate();
  const prelocation = useLocation();

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
    if (prelocation.state) {
      navigate(`${prelocation.state.preURL}`);
    } else {
      navigate('/');
    }
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

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
    <Wrap>
      <Tit>
        Login
        <SubTit>반갑습니다</SubTit>
      </Tit>
      <FormTag>
        <InputTag>
          <Sub>E-Mail </Sub>
          <Input type="email" value={email} name="email" onChange={onChange} required></Input>
        </InputTag>
        <SubInputTag>
          <Sub>Password </Sub>
          <Input type="password" value={password} name="password" onChange={onChange} required></Input>
        </SubInputTag>
        <Btns>
          <Btn onClick={signIn}>로그인</Btn>
          <Btn
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </Btn>
        </Btns>
      </FormTag>
    </Wrap>
  );
}

export default LoginPage;

const Wrap = styled.div`
  background-color: #fafcdc;
  width: 900px;
  margin: 0 auto;
  margin-top: 6rem;
  padding: 40px 10px 10px;
  border-radius: 20px;
  box-shadow: 10px 10px 30px gray;
`;
const Tit = styled.h2`
  width: 70%;
  font-size: 3rem;
  margin: 0 auto;
  text-align: left;
  font-weight: bold;
`;
const SubTit = styled.h2`
  font-size: 1rem;
  margin: 0 auto;
  text-align: right;
`;
const Sub = styled.label`
  font-size: 1.7rem;
  margin: 10px;
  text-align: left;
`;
const FormTag = styled.form`
  width: 100%;
  font-size: 1rem;
  margin: 60px 0;
  text-align: center;
`;
const InputTag = styled.div`
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
`;
const SubInputTag = styled.div`
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
  margin-left: -36px;
`;
const Input = styled.input`
  font-size: 1.7rem;
  width: 340px;
  margin: 20px;
  text-align: left;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 20px;
`;

const Btns = styled.div`
  width: 78.5%;
  margin: 20px 10px;
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled(commonButton)`
  margin: 20px 10px;
  padding: 10px;
  border-radius: 10px;
`;
