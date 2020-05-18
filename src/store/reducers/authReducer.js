import {produce} from 'immer';

const initialState = {
  token: null,
  signed: false,
  loading:false
}

const authReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
          draft.token = action.payload.token,
          draft.signed = true;
          draft.loading = false;
          break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        draft.signed = false;
        break;
      }
      case '@auth/CHANGE_TOKEN': {
        draft.token = action.payload.token;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null, 
        draft.signed =false;
        break;
      }
      default:
        return state;
    }
  })
};

export default authReducer;