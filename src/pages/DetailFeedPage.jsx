import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from '../firebase';
import Footer from '../components/Frame/Footer';
import Headernav from '../components/Frame/Headernav';
import { useDispatch, useSelector } from 'react-redux';
import { MainWrapper } from '../stylecomponents/Wrapper';
import { deleteFids } from '../redux/modules/fids';

const DetailFeedPage = () => {
  const [curuser, setCuruser] = useState('');
  const [fid, setFid] = useState('');
  const [checkUser, setcheckUser] = useState(false);
  const user = auth.currentUser;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { uid } = useParams();

  const selectedFid = useSelector((fids) =>
    fids.fids.filter((fid) => {
      return fid.id === uid;
    })
  )[0];

  const deleteFid = () => {
    console.log('delete', uid);
    console.log('?', fid);

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
        <h1>{`${fid.title}`}</h1>
        <div>
          <h2>{`${fid.about}`}</h2>
          <p>작성자 {`${fid.createdBy}`}</p>
        </div>
        {checkUser && (
          <div>
            <button>수정</button>
            <button onClick={deleteFid}>삭제</button>
          </div>
        )}
        <div>
          <img src={`${fid.imgURL}`} alt="fid-img"></img>
          <p>{`${fid.contents}`}</p>
        </div>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default DetailFeedPage;

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
