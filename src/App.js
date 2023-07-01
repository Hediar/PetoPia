import { useEffect } from 'react';
import './reset.css';
import Router from './shared/Router';
import { fetchData } from './firebase';
import { useDispatch } from 'react-redux';
import { firstsetFids } from './redux/modules/fids';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getFidsdata = async () => {
      const fidsData = await fetchData();
      dispatch(firstsetFids(fidsData));
    };
    getFidsdata();
  }, []);
  return <Router />;
}

export default App;
