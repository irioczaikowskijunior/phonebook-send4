export const FETCH_CONTACTS = 'fetch_contacts';
export const fetchContacts = () => async (dispatch, getState, conn) => {
  const res = await conn.get('/api/contacts');

  dispatch({
    type: FETCH_CONTACTS,
    payload: res
  });

};

export const FETCH_CONTACT = 'fetch_contact';
export const fetchContact = (id) => async (dispatch, getState, conn) => {
  const res = await conn.get(`/api/contacts/${id}`);

  dispatch({
    type: FETCH_CONTACT,
    payload: res
  });
};