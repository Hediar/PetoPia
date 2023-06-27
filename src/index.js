import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import { Provider } from 'react-redux';
import Main from './pages/Main';
// import store from './redux/config/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>

  // </Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
