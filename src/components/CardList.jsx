import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardList = ({ fids }) => {
  const navigate = useNavigate();
  useEffect(() => {}, [fids]);
  return (
    <>
      {fids.map((card) => (
        <FidCardBox
          key={card.id}
          onClick={() => {
            navigate('/detailFeedPage/' + card.id);
          }}
        >
          <Fidmainbox>
            <InnerFid>
              <ImgTag src={card.imgURL} alt="fids-img"></ImgTag>
              <TitleContent>
                <TitleTag style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 10px 0' }}>
                  {card.title}
                </TitleTag>
                <Fidcontext>
                  <TextTag>{card.contents}</TextTag>
                </Fidcontext>
              </TitleContent>
            </InnerFid>
          </Fidmainbox>
          <Cardfooter>
            <div>by {card.createdBy}</div>
            <div>#{card.about}</div>
          </Cardfooter>
        </FidCardBox>
      ))}
    </>
  );
};

export default React.memo(CardList);

const FidCardBox = styled.div`
  background-color: white;
  height: 300px;
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
  height: 110px;
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  text-overflow: ellipsis;
`;

const Cardfooter = styled.div`
  padding: 0.64rem 1rem 0;
  border-top: 4px dashed #f1f3f5;
  display: flex;
  font-size: 1.2rem;
  line-height: 1.5;
  justify-content: space-between;
  color: gray;
`;

const PageTitle = styled.h3`
  margin-top: 2rem;
  font-size: 24px;
`;
const InnerFid = styled.div`
  display: flex;
`;
const TitleContent = styled.div`
  width: 55%;
  padding: 0px 8px 0 14px;
`;
const ImgTag = styled.img`
  width: 45%;
  height: 210px;
  object-fit: cover;
  border-radius: 10px;
`;
const TitleTag = styled.h4`
  font-size: 24px;
  height: 26px;
  overflow: hidden;
  text-align: left;
  padding: 0 4px;
`;
const TextTag = styled.p`
  line-height: 1.5;
  overflow: hidden;
  text-align: left;
  padding: 0 4px;
  overflow: hidden;
`;
const DeleteButton = styled.button`
  width: 80px;
  height: 32px;
  float: right;
  border-radius: 8px;
  border: none;
  background-color: red;
  color: white;
  font-size: 0.9rem;
  margin: 5px;
  &:hover {
    cursor: pointer;
    background-color: darkred;
  }
`;
