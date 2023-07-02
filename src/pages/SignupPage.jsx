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
    <Wrap>
      <Tit>Join us</Tit>
      <FormTag>
        <InputTag>
          <Sub>E-Mail</Sub>
          <Input type="email" value={email} name="email" onChange={onChange} required />
        </InputTag>
        <InputTagP>
          <Sub>Password </Sub>
          <Input type="password" value={password} name="password" onChange={onChange} required />
        </InputTagP>
        <InputTagC>
          <Sub>Check Password </Sub>
          <Input type="password" value={confirmPassword} name="confirmPassword" onChange={onChange} required />
        </InputTagC>
        <InputTagN>
          <Sub>Nikname </Sub>
          <Input type="text" value={displayName} name="displayName" onChange={onChange} required />
        </InputTagN>
        <Btns>
          <Btn onClick={signUp}>회원가입</Btn>
          <Btn
            onClick={() => {
              navigate('/login');
            }}
          >
            뒤로가기
          </Btn>
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
const InputTagP = styled.div`
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
  margin-left: -42px;
`;
const InputTagC = styled.div`
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
  margin-left: -118px;
`;
const InputTagN = styled.div`
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
  margin-left: -30px;
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
