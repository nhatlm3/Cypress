import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';
import {fetchWrapper }from '../helpers/fetch-wrapper'
const baseUrl = 'http://localhost:3000/api'
const userService = { login }
function login(user) {
  return fetchWrapper.post(`${baseUrl}/login`, user);
}
export default userService;