import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async ({ action, item }) => {
  switch (action) {
    case 'GET':
      const getResponse = await axios.get(`/contacts`);
        return getResponse;
    case 'POST':
      const addResponse = await axios.post(`/contacts`, item);
      return addResponse;
    
    case 'DELETE':
      const deletedResponse = await axios.delete(`/contacts/${item}`);
      return deletedResponse;
    
    default:
      return;
  }
}
