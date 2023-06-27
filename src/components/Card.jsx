import { styled } from 'styled-components';
import React from 'react';

function Card() {
  return (
    <FidCardBox>
      <h2>Fid Cards</h2>
      <div>Card image</div>
      <Fidmainbox>
        <div>
          <h4
            style={{
              display: 'block',
              fontWeight: 'bold'
            }}
          >
            제목
          </h4>
          <Fidcontext>
            <p>내용 내용 내용 내용 내용 내용 내용</p>
          </Fidcontext>
        </div>
      </Fidmainbox>
      <Cardfooter>프로필사진, by 작성자</Cardfooter>
    </FidCardBox>
  );
}

export default Card;

const FidCardBox = styled.div`
  background-color: white;
  border: 3px solid rgb(221, 221, 221);
  margin: 1rem;
`;
const Fidmainbox = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;
const Fidcontext = styled.div`
  margin: 0px 0px 1.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Cardfooter = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid #f1f3f5;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
`;
