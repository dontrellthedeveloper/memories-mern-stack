import axios from 'axios';

const url = 'http://localhost:3010/posts';

export const fetchPosts = () => axios.get(url);
