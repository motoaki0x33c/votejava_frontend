import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + '/manage-vote',
});

export default {
  getVoteItems: () => api.get(''),
  getVoteItem: (id) => api.get(`/${id}`),
  addVoteItem: (name) => api.post('', { name }),
  updateVoteItem: (id, name) => api.put(`/${id}`, { name }),
  deleteVoteItem: (id) => api.delete(`/${id}`),
};