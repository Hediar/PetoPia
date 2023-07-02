import React, { useState, useEffect, useCallback } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import AnimalsInform from './AnimalsInform';
import CardList from '../components/CardList';
import Header from '../components/Frame/Header';
import Footer from '../components/Frame/Footer';
import { useSelector } from 'react-redux';
import { commonButton } from '../stylecomponents/Button';

const DetailPage = () => {
  const navigate = useNavigate();
  const { animal } = useParams();

  const fids = useSelector((fids) =>
    fids.fids.filter((fid) => {
      return fid.about === animal;
    })
  );

  // 필터링 한 값이 변경될 때 렌더링
  const settingFids = useCallback(() => {
    setAnimalfids(fids);
  }, [fids]);

  const [animalfids, setAnimalfids] = useState([]);

  //  주소값이 변경될 때 렌더링
  useEffect(() => {
    settingFids();
  }, [animal]);

  return (
    <>
      <Header />
      <Wrapper>
        <Button onClick={() => navigate('/')}>Home으로 가기</Button>
        <ContentWrapper></ContentWrapper>

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
  margin: 40px 40px 0 0;
`;

const Wrapper = styled.div`
  width: 50%;
  background-color: white;
  border: 3px solid rgb(221, 221, 221);
  border-radius: 18px;
  margin: 0 auto;
  margin-top: 2.5rem;
`;

const ContentWrapper = styled.div`
  margin-bottom: 1rem;
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
