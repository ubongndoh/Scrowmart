/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
// api.js
import axios from "axios";

const API_BASE_URL = "https://scrowmart.online/api/v1"; // Replace with your API URL

const headers = {
  Accept: "application/json",
  // 'Authorization': 'JWT fefege...'
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email: credentials.email,
      password: credentials.password,
    });
    return console.log(response.data);
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (userData) => {
  console.log(userData);
  try {
    await axios
      .post(
        `${API_BASE_URL}/buyer/register`,
        {
          fullname: userData.fullname,
          email: userData.email,
          phone_number: userData.phone_number,
          address: userData.address,
          city: userData.city,
          state: userData.state,
          date_of_birth: userData.date_of_birth,
          password: userData.password,
          password_confirmation: userData.password_confirmation,
        },
        { headers: headers }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    throw error;
  }
};

// import axios from 'axios';

export default axios.create({
  baseURL: "https://scrowmart.online/api/v1",
});
//http://scrowmart.online/api/v1/login/verify-otp
