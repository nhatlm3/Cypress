import getConfig from 'next/config';

import { userService } from '../service/login.service';

const { publicRuntimeConfig } = getConfig();
export const fetchWrapper = {
  post,
};
function post(url, body) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}
function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      
      if (!response.ok) {
          if ([401, 403].includes(response.status) && userService.userValue) {
              // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              userService.logout();
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}