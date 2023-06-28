// action value
const SET_USER = 'SET_USER';
const DELETE_USER = 'DELETE_USER';

// 초기값
const initialState = {};

// action creator
export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

// 리듀서
const currentuser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    case DELETE_USER:
      return {};

    default:
      return state;
  }
};

export default currentuser;
