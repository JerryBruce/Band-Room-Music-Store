import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Fry23ciisDDDS6g2I-8bF2QT3YV_-N9uawfft7OUm00'
  }
});
