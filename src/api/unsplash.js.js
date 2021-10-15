import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FMxSGzL3SXqRsrWTtv3cHoI-wQ3HInQRSMW-59GkSyw'
  }
});