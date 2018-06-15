import { FETCH_CONTACTS } from '../actions/contacts';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return action.payload.data;
    default:
      return state;
  }
};
