import { FETCH_MESSAGES } from '../actions/messages';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.data;
    default:
      return state;
  }
};
