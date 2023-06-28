import React from 'react';
import { styled } from 'styled-components';

function Footer() {
  return (
    <>
      <div>
        <Fspan>PetoPia Copyright 2023, All Rights Reserved</Fspan>
        <br />
        <Fspan>서울시 성북구 82-9 | 페토피아</Fspan>
        <br />
        <Fspan>페토피아 비마이 러브</Fspan>
        <br />
        <Fspan>발행 : 5조 | 편집 : 5조</Fspan>
        <br />
        <BannerImg src="/PetoPia-Logo/text-Logo.png" width="180" alt="PetoPia 로고" />
        <ImgFooter>
          <img src="/imgs/icon-appstore-badge.png" width="200" alt="구글" />
          <img src="/imgs/icon-playstore.png" width="200" alt="구글" />
        </ImgFooter>
      </div>
    </>
  );
}

export default Footer;
const Fspan = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const BannerImg = styled.img`
  display: flex;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const ImgFooter = styled.div`
  width: 400px;
  margin: 0 auto;
`;
