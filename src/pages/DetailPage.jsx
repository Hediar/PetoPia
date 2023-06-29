import React from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import AnimalsInform from './AnimalsInform';
import Header from '../components/Frame/Header';
import Footer from '../components/Frame/Footer';
import { MainWrapper } from '../stylecomponents/Wrapper';

function DetailPage() {
  const { animal } = useParams();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert('clicked');
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <DetailBox>
          <AnimalsInform animal={animal} />

          <div>귀여운 {animal} 페이지입니다!</div>

          <div>
            <br />
            <br />
            <br />
            <h3>Detail PAGE</h3>
            <br />
            <form onSubmit={onSubmitHandler}>
              <p>작성자:</p>
              <p>제목:</p>
              <p>내용:</p>
              <p>이미지 파일:</p>
              <input placeholder="수정할 영역"></input>
              <EveryButton>작성완료</EveryButton>
            </form>
          </div>

          <div>
            <br />
            <button>수정</button>
            <button>삭제</button>
          </div>
        </DetailBox>
      </MainWrapper>
      <Footer />
    </>
  );
}

export default DetailPage;

const EveryButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const DetailBox = styled.div`
  background-color: white;
  border: 3px solid rgb(221, 221, 221);
  margin: 1rem;
`;
