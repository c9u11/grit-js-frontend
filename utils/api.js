const API_URL = 'http://localhost:8080/api';

const reqLogin = (email, password) => {
  const req = new XMLHttpRequest();
  req.open('POST', API_URL + '/login', false);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({ email, password }));
  return JSON.parse(req.responseText);
}