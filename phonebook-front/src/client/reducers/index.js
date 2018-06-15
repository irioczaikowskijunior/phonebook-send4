import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import contactReducer from './contactReducer';
import messagesReducer from './messagesReducer';
import messageReducer from './messageReducer';

export default combineReducers({  
  contacts: contactsReducer,
  contact: contactReducer,
  messages: messagesReducer,
  message: messageReducer
});
