import { auth, loginCheck } from '../../firebase';

// action value
const SETUSER = 'SET_USER';
const DELETEUSER = 'DELETE_USER';

// 초기값
const initialState = {};

// action creator
export const setUser = (payload) => {
  return {
    type: SETUSER,
    payload
  };
};

export const deleteUser = (payload) => {
  return {
    type: DELETEUSER,
    payload
  };
};

// 리듀서
const currentuser = (state = initialState, action) => {
  switch (action.type) {
    case SETUSER:
      const userState = JSON.parse(loginCheck());
      // const userState = auth.currentUser;
      const newUser = {
        email: userState.email,
        uid: userState.uid,
        displayname: userState.displayName,
        photoURL: userState.photoURL
      };
      return newUser;

    case DELETEUSER:
      return {};
    default:
      return state;
  }
};

export default currentuser;

// 생각해보기 https://vroomfan.tistory.com/7
