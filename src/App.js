import { useEffect } from 'react';
import './reset.css';
import Router from './shared/Router';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase';

function App() {
  return <Router />;
}

export default App;

// const MainWrapper = styled.div`
//   width: 1400px;
//   margin: 0 auto;
// `;
