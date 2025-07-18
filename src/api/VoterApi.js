import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + '/voter',
});

export default {
  getVoteItems: () => api.get(''),
  addVote: (id, voter) => api.post(`/${id}`, { voter }),
};