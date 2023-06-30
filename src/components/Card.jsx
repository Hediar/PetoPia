import { styled } from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card() {
  const navigate = useNavigate();
  return (
    <FidCardBox
      onClick={function () {
        navigate('/detailPage');
      }}
    >
      <Fidmainbox>
        <h2>Fid Cards</h2>
        <div>Card image</div>
        <div>
          <h4
            style={{
              display: 'block',
              fontWeight: 'bold',
              margin: '10px 0 10px 0'
            }}
          >
            제목
          </h4>
          <Fidcontext>
            <p>내용 내용 내용 내용 내용 내용 내용</p>
          </Fidcontext>
        </div>
      </Fidmainbox>
      <Cardfooter>프로필사진, by 작성자

        <div>about: # 강아지</div>
      </Cardfooter>
    </FidCardBox>
  );
}

export default Card;

const FidCardBox = styled.div`
  background-color: white;
  border: 3px solid rgb(221, 221, 221);
  border-radius: 10px;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
const Fidmainbox = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;
const Fidcontext = styled.div`
  margin: 0 0 8px 0;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Cardfooter = styled.div`
  padding: 0.625rem 1rem;
  border-top: 4px dashed #f1f3f5;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
`;
