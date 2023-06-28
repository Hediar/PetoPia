// action value
const SETUSER = 'SET_USER';
const DELETEUSER = 'DELETE_USER';

// 초기값
const initialState = {
  email: 'test@mail.com',
  uid: 'uid',
  displayName: 'nikname',
  photoURL: 'photoURL'
};

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
      return action.payload;

    case DELETEUSER:
      return {};
    default:
      return state;
  }
};

export default currentuser;

// 생각해보기 https://vroomfan.tistory.com/7
