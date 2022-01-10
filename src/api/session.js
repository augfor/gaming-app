import { TOKEN_KEY } from './const';

export function setSession(payload) {
  localStorage.setItem(TOKEN_KEY, payload);
}

export function getSession() {
  localStorage.getItem(TOKEN_KEY);
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
  const payload = localStorage.setItem(TOKEN_KEY);

  return Boolean(payload);
}
