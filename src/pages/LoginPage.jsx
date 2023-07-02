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
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

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
      navigate('/');
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

      handleLocation();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          setErrorMessageEmail('이메일이 일치하지 않습니다.');
          break;
        case 'auth/wrong-password':
          console.log('여기로들어옴');
          setErrorMessagePassword('비밀번호가 일치하지 않습니다.');
          break;
        default:
          console.log(error.code);
          setErrorMessageEmail('로그인에 실패했습니다.');
          break;
      }
    }
  };

  return (
    <Wrap>
      <HeaderTag>
        <LogoTag
          src="/PetoPia-Logo/circle-Logo.png"
          width="140"
          alt="PetoPia Logo"
          onClick={() => {
            navigate('/');
          }}
        />
        <Tit>
          <div>Join us</div>
          <Btn onClick={() => navigate('/')}>Home으로 가기</Btn>
        </Tit>
      </HeaderTag>
      <FormTag>
        <InputTag>
          <Sub>E-Mail </Sub>
          <Input type="email" value={email} name="email" onChange={onChange} required></Input>
        </InputTag>
        {errorMessageEmail && <ErrorMessageEmail>{errorMessageEmail}</ErrorMessageEmail>}
        <SubInputTag>
          <Sub>Password </Sub>
          <Input type="password" value={password} name="password" onChange={onChange} required></Input>
        </SubInputTag>
        {errorMessagePassword && <ErrorMessagePassword>{errorMessagePassword}</ErrorMessagePassword>}
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
const HeaderTag = styled.div`
  display: flex;
`;

const LogoTag = styled.img`
  width: 12%;
  margin: 0 auto;
`;
const Tit = styled.h2`
  width: 70%;
  font-size: 3rem;
  margin: 0 auto;
  margin-top: 20px;
  margin-left: -50px;
  text-align: left;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
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
  position: relative;
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

const ErrorMessageEmail = styled.p`
  color: red;
  margin-top: 5px;
  margin-left: 328px;
  text-align: left;
`;

const ErrorMessagePassword = styled.p`
  color: red;
  margin-top: 5px;
  margin-left: 328px;
  text-align: left;
`;
