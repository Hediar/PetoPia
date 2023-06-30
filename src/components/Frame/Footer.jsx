import React from 'react';
import { styled } from 'styled-components';
import { Footerarea } from '../../stylecomponents/Wrapper';

function Footer() {
  return (
    <>
      <Footerarea>
        <InnerFooter>
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
            <Astore src="/imgs/icon-appstore-badge.png" width="200" alt="구글" />
            <Gplay src="/imgs/icon-playstore.png" width="200" alt="구글" />
          </ImgFooter>
        </InnerFooter>
      </Footerarea>
    </>
  );
}

export default React.memo(Footer);

const InnerFooter = styled.div`
  width: 900px;
`;
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
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const Astore = styled.img`
  width: 280px;
  padding: 0 8px;
`;
const Gplay = styled.img`
  width: 280px;
  padding: 0 8px;
`;
