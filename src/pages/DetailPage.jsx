import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import AnimalsInform from './AnimalsInform';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import CardList from '../components/CardList';
import Header from '../components/Frame/Header';
import Footer from '../components/Frame/Footer';
import { useSelector } from 'react-redux';
import { commonButton } from '../stylecomponents/Button';
import { MainBox } from '../stylecomponents/Wrapper';

const DetailPage = () => {
  const navigate = useNavigate();

  const [cardData, setCardData] = useState([]);
  const { animal } = useParams();

  const fids = useSelector((fids) =>
    fids.fids.filter((fid) => {
      return fid.about === animal;
    })
  );
  const [animalfids, setAnimalfids] = useState([]);
  console.log('fids필터링', fids);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    setAnimalfids(fids);
  }, [animal, fids]);

  return (
    <>
      <Header />
      <Wrapper>
        <Button onClick={() => navigate('/')}>Home으로 가기</Button>
        <ContentWrapper>
          <Form onSubmit={onSubmitHandler}>
            {cardData.map((card) => (
              <div key={card.id}>
                <p>작성자: {card.createdBy}</p>
                <p>제목: {card.title}</p>
                <p>내용: {card.contents}</p>
                <Image src={card.imageUrl} alt="이미지" />
                <br />
              </div>
            ))}
          </Form>
        </ContentWrapper>

        <AnimalsInform animal={animal} />
      </Wrapper>
      <SubTitle>연관 게시글</SubTitle>
      <PageTitle>
        <CardList fids={animalfids} />
      </PageTitle>
      <Footer />
    </>
  );
};

export default DetailPage;

const Button = styled(commonButton)`
  float: right;
  margin: 20px 20px 0 0;
`;

const Wrapper = styled.div`
  width: 50%;
  background-color: white;
  border: 3px solid rgb(221, 221, 221);
  border-radius: 18px;
  margin: 0 auto;
  margin-top: 2.5rem;
`;

const Form = styled.form`
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 50;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubTitle = styled.p`
  margin: 0 auto;
  margin-top: 2rem;
  width: 10%;
  font-size: 24px;
  font-weight: bold;
`;
const PageTitle = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: bold;
`;
