import axios from 'axios';

axios.defaults.baseURL = 'https://64b5a692f3dbab5a95c78fba.mockapi.io/contacts/';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts/');
  console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await axios.post('/contacts/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
