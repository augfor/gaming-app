import axios from 'axios';
// API
import { BASE_URL } from '.';

export async function logIn(payload) {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, payload);

    return response;
  } catch (error) {
    return error;
  }
}
