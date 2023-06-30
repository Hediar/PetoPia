// action value
const FIRST_SET_FIDS = 'FIRSTSET_FIDS';
const ADD_FIDS = 'ADD_FIDS';
const DELETE_FIDS = 'DELETE_FIDS';

// 인기글, 최신글

// 초기값
const initialState = [{}]; //새로고침 오류 방지

// action creator
export const firstsetFids = (payload) => {
  return {
    type: FIRST_SET_FIDS,
    payload
  };
};

export const addFids = (payload) => {
  return {
    type: ADD_FIDS,
    payload
  };
};

export const deleteFids = (payload) => {
  return {
    type: DELETE_FIDS,
    payload
  };
};

// 리듀서
const fids = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_SET_FIDS:
      console.log('action', action.payload);
      return action.payload;
    case ADD_FIDS:
      return [...state, action.payload];

    case DELETE_FIDS:
      return state.filter((fid) => {
        return fid.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export default fids;
