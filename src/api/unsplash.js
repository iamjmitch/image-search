import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0Ue7Re9X-UJ3UANmjFNm7ctuVVhxRyJntUmaDetV8ZM'
  }
});
