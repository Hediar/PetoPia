import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardList = ({ fids }) => {
  const navigate = useNavigate();
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
            <img src={card.imgURL} alt="fids-img"></img>
            <div>
              <h4 style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 10px 0' }}>{card.title}</h4>
              <Fidcontext>
                <p>{card.contents}</p>
              </Fidcontext>
            </div>
          </Fidmainbox>
          <Cardfooter>
            by {card.createdBy}
            <div>#{card.about}</div>
          </Cardfooter>
        </FidCardBox>
      ))}
    </>
  );
};

export default CardList;

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

const PageTitle = styled.h3`
  margin-top: 2rem;
  font-size: 24px;
`;
