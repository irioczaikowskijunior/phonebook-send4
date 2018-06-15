import { FETCH_MESSAGE } from '../actions/messages';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MESSAGE:
      return action.payload.data;
    default:
      return state;
  }
};
