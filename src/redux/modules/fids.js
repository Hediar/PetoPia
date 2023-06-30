import { auth, loginCheck } from '../../firebase';

// action value

const DELETEFIDS = 'DELETE_USER';

// 초기값
const initialState = {};

// action creator

export const deleteFids = (payload) => {
  return {
    type: DELETEFIDS,
    payload
  };
};

// 리듀서
const fids = (state = initialState, action) => {
  switch (action.type) {
    case DELETEFIDS:
      return {};
    default:
      return state;
  }
};

export default fids;
