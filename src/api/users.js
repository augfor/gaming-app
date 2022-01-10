import axios from 'axios';
// API
import { BASE_URL } from './const';
import { clearSession, setSession } from './session';

export async function logIn(payload) {
  try {
    const { data: response } = await axios.post(
      `${BASE_URL}/users/login`,
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
