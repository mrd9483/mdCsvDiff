import { combineReducers } from 'redux';

const notifier = (state = { message: '' }, action) => {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION':
      clearTimeout(state.id);
      return { message: action.message, open: true, id: null };
    case 'HIDE_NOTIFICATION':
      clearTimeout(state.id);
      return { message: '', open: false, id: null };
    case 'SET_TIMEOUT_ID':
      return { ...state, id: action.id };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ notifier });

export default rootReducer;
