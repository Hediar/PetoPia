import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from '../firebase';
import Footer from '../components/Frame/Footer';
import Headernav from '../components/Frame/Headernav';
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
      <Headernav />

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
          </>
        )}
      </MainWrapper>
      <Footer />
    </>
  );
};

export default DetailFeedPage;

const Button = styled(commonButton)``;

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
