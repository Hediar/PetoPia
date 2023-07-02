import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from '../firebase';
import Footer from '../components/Frame/Footer';
import Header from '../components/Frame/Header';
import { useDispatch, useSelector } from 'react-redux';
import { MainWrapper } from '../stylecomponents/Wrapper';
import { deleteFids, updateFids } from '../redux/modules/fids';
import { commonButton } from '../stylecomponents/Button';

const DetailFeedPage = () => {
  const [curuser, setCuruser] = useState('');
  const [fid, setFid] = useState({});
  const [checkUser, setcheckUser] = useState(false);
  const [updateState, setupdateState] = useState(false);

  const user = auth.currentUser;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { uid } = useParams();

  const selectedFid = useSelector((fids) =>
    fids.fids.filter((fid) => {
      return fid.id === uid;
    })
  )[0];

  // 수정 및 삭제
  const [newupdateTitle, setNewUpdateTitle] = useState('');
  const [newupdateContent, setNewUpdateContent] = useState('');

  const showUpdateFid = () => {
    setupdateState(!updateState);
  };

  const updateFid = () => {
    const newUpdateFid = {
      ...selectedFid,
      title: newupdateTitle,
      contents: newupdateContent
    };

    dispatch(updateFids(newUpdateFid));
    setFid(newUpdateFid); // 업데이트 한 내용 다시 set
    showUpdateFid();
  };

  const deleteFid = () => {
    navigate('/');
    alert('삭제되었습니다!');
    dispatch(deleteFids(uid));
  };

  // 회원인지 아닌지에 따른 변화
  useEffect(() => {
    setFid(selectedFid);
    if (!user) {
      setCuruser('nothing');
    } else {
      setCuruser(user.email);
      if (curuser === fid.createUser) {
        setcheckUser(true);
        // 수정을 위한 세팅
        setNewUpdateTitle(`${fid.title}`);
        setNewUpdateContent(`${fid.contents}`);
      }
    }
  }, [fid]);

  return (
    <>
      <Header />

      <MainWrapper>
        <MypageWrap>
          {!updateState && (
            <>
              <Tit>{`${fid.title}`}</Tit>
              <div>
                <h2>Our {`${fid.about}`}</h2>
                <Creator>Write by {`${fid.createdBy}`}</Creator>
              </div>

              <ImgTag>
                <Img src={`${fid.imgURL}`} alt="fid-img"></Img>
                <Content>{`${fid.contents}`}</Content>
              </ImgTag>
            </>
          )}
          <EditTag>
            {checkUser && (
              <Btns>
                <Button onClick={showUpdateFid}>수정</Button>
                <Button onClick={deleteFid}>삭제</Button>
              </Btns>
            )}
            {updateState && (
              <InputTag>
                <UpdateTextInput value={newupdateTitle} onChange={(e) => setNewUpdateTitle(e.target.value)} />
                <UpdateContentTextArea value={newupdateContent} onChange={(e) => setNewUpdateContent(e.target.value)} />
                <ButtonEdit onClick={updateFid}>수정완료</ButtonEdit>
              </InputTag>
            )}
          </EditTag>
        </MypageWrap>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default DetailFeedPage;

const Button = styled(commonButton)`
  padding: 4px 24px;
`;
const ButtonEdit = styled(commonButton)`
  float: right;
  padding: 10px 24px;
  margin-top: 20px;
  margin-right: -120px;
`;

const MypageWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 140px;
  padding: 0px 20px;
`;

const Tit = styled.h1`
  font-size: 3 rem;
`;
const Creator = styled.p`
  text-align: right;
  width: 100%;
  font-size: 1.4 rem;
  color: gray;
  margin-bottom: 20px;
`;
const Content = styled.p`
  width: 78%;
  height: 140px;
  font-size: 1.4 rem;
  color: gray;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;
`;
const Img = styled.img`
  width: 600px;
  border-radius: 18px;
  margin: 0 auto;
  display: flex;
  box-shadow: 10px 10px 20px rgb(221, 221, 221);
`;
const ImgTag = styled.div`
  margin: 0 auto;
`;
const EditTag = styled.div`
  width: 90%;
  margin: 0 auto;
  hight: 600px;
`;

const Btns = styled.div`
  float: right;
  margin-bottom: 20px;
`;
const InputTag = styled.div`
  width: 600px;
  margin: 0 auto;
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
  width: 680px;
  height: 200px;
  border: 4px solid #eb9307;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;
