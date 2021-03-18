import axios from 'axios';

export const getUserList = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = response.data;
    console.log('Users', users);
    return users;
  } catch (error) {
    return error.message;
  }
};
