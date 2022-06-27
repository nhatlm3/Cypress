import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';
import {fetchWrapper }from '../helpers/fetch-wrapper'
const baseUrl = 'http://localhost:3000/api'
const data =  {
    username: 'nhatlm@icd-vn.com',
    password: 'Nhat.123456'
  }
const userService = {
  user:  {
    username: 'nhatlm@icd-vn.com',
    password: 'Nhat.123456'
  },
  userValue:  {
    username: 'nhatlm@icd-vn.com',
    password: 'Nhat.123456'
  },
  login 
}
async function login(username, password) {
  const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
  return user;
}
export default userService;