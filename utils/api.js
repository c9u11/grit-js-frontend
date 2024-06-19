const API_URL = '/api';

const reqLogin = (email, password) => {
  const req = new XMLHttpRequest();
  req.open('POST', API_URL + '/login', false);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({ email, password }));
  return JSON.parse(req.responseText);
}

const reqSignup = (username, email, password) => {
  const req = new XMLHttpRequest();
  req.open('POST', API_URL + '/signup', false);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({ username, email, password }));
  return JSON.parse(req.responseText);
}
const reqGetCategories = () => {
  const req = new XMLHttpRequest();
  req.open('GET', API_URL + '/categories', false);
  req.setRequestHeader('authorization', localStorage.getItem('token'));
  req.send();
  return JSON.parse(req.responseText);
}

const reqGetSelectedCategories = () => {
  const req = new XMLHttpRequest();
  req.open('GET', API_URL + '/categories/selected', false);
  req.setRequestHeader('authorization', localStorage.getItem('token'));
  req.send();
  return JSON.parse(req.responseText);
}

const reqPostSelectedCategories = (selectedCategories) => {
  const req = new XMLHttpRequest();
  req.open('POST', API_URL + '/categories/selected', false);
  req.setRequestHeader('Content-Type', 'application/json');
  req.setRequestHeader('authorization', localStorage.getItem('token'));
  req.send(JSON.stringify({ selectedCategories }));
  return JSON.parse(req.responseText);
}

const reqGetArticle = (articleId) => {
  const req = new XMLHttpRequest();
  req.open('GET', API_URL + '/articles?articleId=' + articleId, false);
  req.setRequestHeader('authorization', localStorage.getItem('token'));
  req.send();
  return JSON.parse(req.responseText);
}

const reqGetTodayArticles = () => {
  const req = new XMLHttpRequest();
  req.open('GET', API_URL + '/articles/today', false);
  req.setRequestHeader('authorization', localStorage.getItem('token'));
  req.send();
  return JSON.parse(req.responseText);
}

const reqGetSolvedArticles = (articleIds) => {
  const req = new XMLHttpRequest();
  req.open('GET', API_URL + '/articles/solved?articleIds=' + articleIds.join(','), false);
  req.setRequestHeader('authorization', localStorage.getItem('token'));
  req.send();
  return JSON.parse(req.responseText);
}

const reqGetQuestion = (articleId) => {
  const req = new XMLHttpRequest();
  req.open('GET', API_URL + '/question?articleId=' + articleId, false);
  req.setRequestHeader('authorization', localStorage.getItem('token'));
  req.send();
  return JSON.parse(req.responseText);
}

const reqGetHistory = (questionId) => {
  const req = new XMLHttpRequest();
  req.open('GET', API_URL + '/history?question_id=' + questionId, false);
  req.setRequestHeader('authorization', localStorage.getItem('token'));
  req.send();
  return JSON.parse(req.responseText);
}

const reqPostAnswer = (questionId, answer) => {
  const req = new XMLHttpRequest();
  req.open('POST', API_URL + '/history', false);
  req.setRequestHeader('Content-Type', 'application/json');
  req.setRequestHeader('authorization', localStorage.getItem('token'));
  req.send(JSON.stringify({ questionId, answer }));
  return JSON.parse(req.responseText);
}