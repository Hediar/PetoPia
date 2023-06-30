import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Posting from '../pages/Posting';
import DetailPage from '../pages/DetailPage';
import DetailFeedPage from '../pages/DetailFeedPage';
import MyPage from '../pages/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="detailpage/:animal" element={<DetailPage />} />
        <Route path="detailFeedpage/:animal" element={<DetailFeedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
