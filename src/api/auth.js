import axios from '@/utils/axios';

export async function loginUser(email, password) {
  try {
    const response = await axios.post('/auth/sign-in', {
      email,
      password,
    });

    localStorage.setItem('token', response.data.accessToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(email, password) {
  try {
    const response = await axios.post('/auth/sign-up', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
