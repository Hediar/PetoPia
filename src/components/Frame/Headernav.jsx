import React, { useEffect, useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { styled } from 'styled-components';
import { Headerarea } from '../../stylecomponents/Wrapper';
import { auth, loginCheck } from '../../firebase';
import { deleteUser, setUser } from '../../redux/modules/currentuser';
import { commonButton } from '../../stylecomponents/Button';
import { signOut } from '@firebase/auth';

function Headernav() {
  const navigate = useNavigate();
  const user = useSelector((user) => user.currentuser);
  const dispatch = useDispatch();
  const prelocation = useLocation();

  // 로그인 상태에 따라 활성화 버튼
  const [ButtonVisible, setButtonVisible] = useState(false);

  // 로그아웃
  const logOut = async (event) => {
    alert('로그아웃 되었습니다.');

    await signOut(auth);
    dispatch(deleteUser());
    window.location.reload();
  };

  // 햄버거 버튼 제어변수
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleButtonClick = () => {
    setIsButtonVisible(!isButtonVisible);
  };
  // 펫 종류 []
  const pets = ['강아지', '고양이', '물고기', '조류', '파충류', '양서류', '기타'];

  const onClickAnimal = (pet) => {
    navigate(`/detailPage/${pet}`);
  };

  useEffect(() => {
    if (loginCheck()) {
      dispatch(setUser());
      setButtonVisible(true);
    }
  }, []);

  return (
    <Headerarea>
      <HeaderTop>
        <ImgHeader>
          <img
            src="/PetoPia-Logo/merge-Logo.png"
            width="140"
            alt="PetoPia 로고"
            onClick={() => {
              navigate('/');
            }}
          />
        </ImgHeader>

        <Hamburger>
          {!ButtonVisible && (
            <LoginBtn
              onClick={() => {
                navigate('/login', { state: { preURL: `${prelocation.pathname}` } });
              }}
            >
              Login
            </LoginBtn>
          )}
          {ButtonVisible && (
            <>
              <LogoutBtn onClick={logOut}>Logout</LogoutBtn>
              <MyPagebtn
                onClick={() => {
                  navigate('/mypage');
                }}
              >
                마이페이지
              </MyPagebtn>
            </>
          )}

          <BtnHamburger onClick={handleButtonClick}>
            <FaAlignJustify size="40" color="#eb9307" />
          </BtnHamburger>
          <InnerHamburger>
            {isButtonVisible && (
              <NavUl>
                {pets.map((pet) => {
                  return <NavLi onClick={() => onClickAnimal(pet)}>{pet}</NavLi>;
                })}
              </NavUl>
            )}
          </InnerHamburger>
        </Hamburger>
      </HeaderTop>
    </Headerarea>
  );
}

export default Headernav;

const HeaderTop = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgHeader = styled.div`
  width: 400px;
  text-align: center;
`;

const Hamburger = styled.div`
  display: flex;
  margin: -70px 20px 0 0;
  position: relative;
`;

const LoginBtn = styled(commonButton)`
  width: 90px;
`;
const LogoutBtn = styled(commonButton)`
  width: 100px;
`;
const MyPagebtn = styled(commonButton)`
  width: 100px;
`;
const BtnHamburger = styled.button`
  width: 50px;
  border: none;
  background-color: transparent;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
const NavUl = styled.ul`
  position: absolute;
  width: 220px;
  top: 50px;
  right: 20px;
  border: none;
  border-radius: 18px 0 18px 18px;
  background-color: white;
  padding: 10px;
  box-shadow: 4px 10px 20px gray;
`;
const NavLi = styled.li`
  // width: 100%;
  margin: 10px 0 10px 0;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    background-color: #ff8f05;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const InnerHamburger = styled.div`
  font-size: 20px;
  padding: 4px;
  z-index: 999;
`;
