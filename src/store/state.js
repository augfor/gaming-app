export const blankState = {
  user: {
    firstName: '',
    email: ''
  }
};

let initialState = blankState;

const storedState = localStorage.getItem('state');

if (storedState) {
  initialState = JSON.parse(storedState);
}

export default initialState;
