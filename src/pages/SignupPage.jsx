import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { commonButton } from '../stylecomponents/Button';

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
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
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
    if (name === 'displayName') {
      setDisplayName(value);
    }
  };

  const signUp = async (event) => {
    event.preventDefault();
    setErrorMessageEmail('');
    setErrorMessagePassword('');

    if (password !== confirmPassword) {
      setErrorMessagePassword('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // displayName 업데이트
      await updateProfile(user, {
        displayName: displayName
      })
        .then(() => {
          sessionStorage.clear();
          alert('회원가입이 완료되었습니다.');
          navigate('/login');
        })
        .catch((error) => {
          alert('회원가입에 실패했습니다.');
        });
    } catch (error) {
      const errorCode = error.code;

      switch (errorCode) {
        case 'auth/invalid-email':
          setErrorMessageEmail('유효한 이메일을 입력해주세요.');
          break;
        case 'auth/missing-password':
          setErrorMessagePassword('비밀번호를 입력해주세요.');
          break;
        case 'auth/email-already-in-use':
          setErrorMessageEmail('이미 가입된 이메일입니다.');
          break;
        default:
          setErrorMessageEmail('회원가입에 실패했습니다.');
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
        <InputWithError>
          <Sub>E-Mail</Sub> <Input type="email" value={email} name="email" onChange={onChange} required />
          {errorMessageEmail && <InputErroremail>{errorMessageEmail}</InputErroremail>}
        </InputWithError>

        <InputWithError>
          <Sub>Password</Sub> <Input type="password" value={password} name="password" onChange={onChange} required />
        </InputWithError>

        <InputWithError>
          <Sub>Check Password</Sub>
          <Input type="password" value={confirmPassword} name="confirmPassword" onChange={onChange} required />
          {errorMessagePassword && <InputError>{errorMessagePassword}</InputError>}
        </InputWithError>
        <InputWithError>
          <Sub>Nickname</Sub> <Input type="text" value={displayName} name="displayName" onChange={onChange} required />
        </InputWithError>
        <Btns>
          <Btn onClick={signUp}>회원가입</Btn>
          <Btn onClick={() => navigate('/login')}>뒤로가기</Btn>
        </Btns>
      </FormTag>
    </Wrap>
  );
}

export default SignupPage;
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
  color: gray;
`;

const FormTag = styled.form`
  width: 100%;
  font-size: 1rem;
  margin: 60px 0;
  text-align: center;
`;

const InputWithError = styled.div`
  position: relative;
  float: right;
  margin-right: 12rem;
`;

const InputErroremail = styled.p`
  color: red;
  margin-top: 5px;
  margin-left: 105px;
  text-align: left;
  position: absolute;
  bottom: -20px;
  left: 0;
`;
const InputError = styled.p`
  color: red;
  margin-top: 5px;
  margin-left: 220px;
  text-align: left;
  position: absolute;
  bottom: -20px;
  left: 0;
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
