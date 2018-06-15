export const FETCH_MESSAGES = 'fetch_messages';
export const fetchMessages = (contact_id) => async (dispatch, getState, conn) => {
  const res = await conn.get(`/api/messages/contact/${contact_id}`);

  dispatch({
    type: FETCH_MESSAGES,
    payload: res
  });

};


export const FETCH_MESSAGE = 'fetch_message';
export const fetchMessage = (message_id) => async (dispatch, getState, conn) => {
  const res = await conn.get(`/api/messages/${message_id}`);

  dispatch({
    type: FETCH_MESSAGE,
    payload: res
  });

};