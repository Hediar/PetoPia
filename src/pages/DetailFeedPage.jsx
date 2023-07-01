import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from '../firebase';
import Footer from '../components/Frame/Footer';
import Header from '../components/Frame/Header';
import { useDispatch, useSelector } from 'react-redux';
import { MainWrapper } from '../stylecomponents/Wrapper';
import { deleteFids } from '../redux/modules/fids';
import { commonButton } from '../stylecomponents/Button';

const DetailFeedPage = () => {
  const [curuser, setCuruser] = useState('');
  const [fid, setFid] = useState('');
  const [checkUser, setcheckUser] = useState(false);
  const [updateState, setupdateState] = useState(false);

  const [newupdateTitle, setNewUpdateTitle] = useState('');
  const [newupdateContent, setNewUpdateContent] = useState('');

  const user = auth.currentUser;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { uid } = useParams();

  const selectedFid = useSelector((fids) =>
    fids.fids.filter((fid) => {
      return fid.id === uid;
    })
  )[0];

  const updateFid = () => {};

  const deleteFid = () => {
    navigate('/');
    alert('삭제되었습니다!');
    dispatch(deleteFids(uid));
  };

  // 회원인지 아닌지에 따른 변화
  useEffect(() => {
    setFid(selectedFid);
    setCuruser(user.email);
    console.log('게시글 상세', selectedFid);
    if (user.email === fid.createUser) {
      setcheckUser(true);
    }
  }, [fid]);

  return (
    <>
      <Header />

      <MainWrapper>
        {!updateState && (
          <>
            <h1>{`${fid.title}`}</h1>
            <div>
              <h2>{`${fid.about}`}</h2>
              <p>작성자: {`${fid.createdBy}`}</p>
            </div>
            {checkUser && (
              <div>
                <Button onClick={updateFid}>수정</Button>
                <Button onClick={deleteFid}>삭제</Button>
              </div>
            )}
            <div>
              <img src={`${fid.imgURL}`} alt="fid-img"></img>
              <p>{`${fid.contents}`}</p>
            </div>
          </>
        )}
        {!updateState && (
          <>
            <UpdateTextInput />
            <UpdateContentTextArea />
            <Button>수정완료</Button>
          </>
        )}
      </MainWrapper>
      <Footer />
    </>
  );
};

export default DetailFeedPage;

// const Button = styled.button`

// `;
const Button = styled(commonButton)`
  float: right;
  margin: 20px 20px 0 0;
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
`;

const Wrapper = styled.div`
  width: 50%;
  mix-height: 800px;
  height: 500px;
  background-color: white;
  border: 3px solid rgb(221, 221, 221);
  border-radius: 18px;
  margin: 0 auto;
  margin-top: 6.5rem;
  margin-bottom: 6.5rem;
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

// const SubTitle = styled.p`
//   margin: 0 auto;
//   margin-top: 2rem;
//   width: 10%;
//   font-size: 24px;
//   font-weight: bold;
// `;
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
const UpdateTextInput = styled.input`
  width: 360px;
  height: 30px;
  border: 4px solid #eb9307;
  border-radius: 16px;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;

const UpdateContentTextArea = styled.textarea`
  width: 730px;
  height: 200px;
  border: 4px solid #eb9307;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;
