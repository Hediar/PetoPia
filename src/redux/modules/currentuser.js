// action value
const SETUSER = 'SET_USER';

// 초기값
const initialState = [];

// action creator
export const setUser = (payload) => {
  return {
    type: SETUSER,
    payload
  };
};

// 리듀서
const currentuser = (state = initialState, action) => {
  switch (action.type) {
    case SETUSER:
      return [action.payload];
    default:
      return state;
  }
};

export default currentuser;

// 생각해보기 https://vroomfan.tistory.com/7