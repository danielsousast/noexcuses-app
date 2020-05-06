import {produce} from 'immer';

const initialState = {
  id:0,
  profile: {},
  favorites: [],
};

const userReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/ADD_FAVORITE': {
        draft.favorites.push(action.payload.notification);
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.favorites = [],
        draft.profile = {};
        break;
      }
      default:
        return state;
    }
  });
};

export default userReducer;
