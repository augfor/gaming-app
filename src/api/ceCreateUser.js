import axios from 'axios';
// api
import { CHATENGINE_PRIVATE_KEY } from './const';

// ce -> "chat engine"
export async function ceCreateUser(payload) {
  try {
    const body = {
      username: payload.firstName,
      first_name: payload.firstName,
      last_name: payload.lastName,
      secret: payload.password
    };

    const headers = {
      headers: {
        'PRIVATE-KEY': `${CHATENGINE_PRIVATE_KEY}`
      }
    };

    const { data: response } = await axios.post(
      'https://api.chatengine.io/users/',
      body,
      headers
    );

    return response;
  } catch (error) {
    return error;
  }
}
