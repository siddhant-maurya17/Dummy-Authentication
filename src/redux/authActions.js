import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com/auth';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });

    if (response.status === 200) {
      const user = response.data;
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      return user;
    } else {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Invalid username or password' });
      return null;
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', payload: 'Error occurred while logging in' });
    return null;
  }
};

export const getUserProfile = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);

    if (response.status === 200) {
      const user = response.data;
      return user;
    } else {
      // Handle error if needed
      return null;
    }
  } catch (error) {
    // Handle error if needed
    return null;
  }
};
