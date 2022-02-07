import axios from 'axios';
import jwtDecode from 'jwt-decode';
// api
import { HEROKU_URL } from './const';
import { ceCreateUser } from './ceCreateUser';
import { clearSession, setSession } from './session';

export async function signUp(payload) {
  try {
    const { data: response } = await axios.post(
      `${HEROKU_URL}/users/signup`,
      payload
    );
    const { meta } = response;
    const { token } = meta;

    const password = jwtDecode(token).password;

    ceCreateUser({ ...payload, password });

    setSession(token);

    return response;
  } catch (error) {
    return error;
  }
}

export async function logIn(payload) {
  try {
    const { data: response } = await axios.post(
      `${HEROKU_URL}/users/login`,
      payload
    );
    const { meta } = response;
    const { token } = meta;

    setSession(token);

    return response;
  } catch (error) {
    return error;
  }
}

export async function logOut() {
  return await clearSession();
}
