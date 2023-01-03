import http from 'k6/http';

const baseUrl = 'https://api.star-pre.astra.co.id'

export const postAPI = (token, data) => http.post(`${baseUrl}/graphql`, JSON.stringify(data),{
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
  });