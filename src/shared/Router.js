import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
