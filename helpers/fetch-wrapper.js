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
  return fetch(url, requestOptions);
}