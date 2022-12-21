import axios from 'axios';
import { URL_BE } from '@env';

// Axios register
export const Register = body => {
  return axios.post(`${URL_BE}/users`, body);
};

// Axios Get user by id
export const userID = token => {
  return axios.get(`${URL_BE}/users/UserID`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios Login
export const LoginUser = body => {
  return axios.post(`${URL_BE}/auth`, body);
};

// Axios getHistory
export const getHistory = token => {
  return axios.get(
    `${URL_BE}/transactions/history?page=1&limit=10`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};

// Axios Logout
export const Logout = token => {
  return axios.delete(`${URL_BE}/auth`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios Transactions
export const transactions = (token, body) => {
  return axios.post(`${URL_BE}/transactions`, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios getHistory All
export const getHistoryAll = token => {
  return axios.get(
    `${URL_BE}/transactions/history`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};

// Axios getHistory Admin
export const getHistoryAdmin = token => {
  return axios.get(
    `${URL_BE}/transactions/status`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};

// Axios Delete historyid
export const deleteHistoryId = (token, id) => {
  return axios.delete(
    `${URL_BE}/transactions/${id}`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};

// Axios Change Payment
// export const changePaymentStatus = (token, statusPayment, id) => {
//   return axios.patch(
//     `${URL_BE}/transactions/users/${statusPayment}/${id}`,
//     {
//       headers: {
//         'x-access-token': token,
//       },
//     },
//   );
// };
export const changePaymentStatus = (token, body, id) => {
  return axios.patch(
    `${URL_BE}/transactions/${id}`,
    body,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};

// Axios reset password
export const Resetpassword = (token, body) => {
  return axios.patch(
    `${URL_BE}/users/editPasswords`,
    body,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};

//Axios patch profile
export const editProfile = (token, body) => {
  return axios.patch(`${URL_BE}/users/profile`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-access-token': token,
    },
  });
};

//add product
export const addProduct = (token, body) => {
  return axios.post(`${URL_BE}/product`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-access-token': token,
    },
  });
};

//create promo
export const createPromo = (token, body) => {
  return axios.post(`${URL_BE}/promo`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-access-token': token,
    },
  });
};

//edit promo
export const editPromo = (token, body, params) => {
  return axios.patch(
    `${URL_BE}/promo/${params}`,
    body,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': token,
      },
    },
  );
};

//edit product
export const editProduct = (token, body, params) => {
  return axios.patch(
    `${URL_BE}/product/${params}`,
    body,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': token,
      },
    },
  );
};


// Axios Delete product
export const deleteProduct = (token, id) => {
  return axios.delete(
    `${URL_BE}/product/${id}`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};

// Axios Delete product
export const deletePromo = (token, id) => {
  return axios.delete(
    `${URL_BE}/promo/${id}`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};