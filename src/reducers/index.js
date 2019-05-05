import { combineReducers } from 'redux';

const notifier = (state = { message: '' }, action) => {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION':
      return { message: action.message };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ notifier });

export default rootReducer;
