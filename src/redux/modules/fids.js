// action value
const FIRST_SET_FIDS = 'FIRSTSET_FIDS';
const DELETE_FIDS = 'DELETE_FIDS';
const FILTER_SHOW_FIDS = 'FILTER_SHOW_FIDS';
const MYPAGE_SHOW_FIDS = 'MYPAGE_SHOW_FIDS';

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

    case DELETE_FIDS:
      return {};
    default:
      return state;
  }
};

export default fids;
