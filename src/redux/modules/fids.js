// action value
const FIRST_SET_FIDS = 'FIRSTSET_FIDS';
const ADD_FIDS = 'ADD_FIDS';
const DELETE_FIDS = 'DELETE_FIDS';
const UPDATE_FIDS = 'UPDATE_FIDS';

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
export const updateFids = (payload) => {
  return {
    type: UPDATE_FIDS,
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
      return action.payload;

    case ADD_FIDS:
      return [...state, action.payload];

    case UPDATE_FIDS:
      console.log('update', action.payload);
      return state.map((fid) => {
        if (fid.id === action.payload.id) {
          return action.payload;
        } else {
          return fid;
        }
      });

    case DELETE_FIDS:
      return state.filter((fid) => {
        return fid.id !== action.payload;
      });

    default:
      return state;
  }
};

export default fids;
