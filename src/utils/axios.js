import axios from 'axios';
import { URL } from '@env';

const getURL = URL;

// Axios register
export const Register = body => {
  return axios.post(`${getURL}/users`, body);
};

// Axios Get user by id
export const userID = token => {
  return axios.get(`${getURL}/users/UserID`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios Login
export const LoginUser = body => {
  return axios.post(`${getURL}/auth`, body);
};

// Axios getHistory
export const getHistory = token => {
  return axios.get(
    `${getURL}/transactions/history?page=1&limit=10`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};

// Axios Logout
export const Logout = token => {
  return axios.delete(`${getURL}/auth`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios Transactions
export const transactions = (token, body) => {
  return axios.post(`${getURL}/transactions`, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios getHistory All
export const getHistoryAll = token => {
  return axios.get(
    `${getURL}/transactions/history`,
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
    `${getURL}/transactions/status`,
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
    `${getURL}/transactions/${id}`,
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
//     `${URL}/transactions/users/${statusPayment}/${id}`,
//     {
//       headers: {
//         'x-access-token': token,
//       },
//     },
//   );
// };
export const changePaymentStatus = (token, body, id) => {
  return axios.patch(
    `${getURL}/transactions/${id}`,
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
    `${getURL}/users/editPasswords`,
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
  return axios.patch(`${getURL}/users/profile`, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

//add product
export const addProduct = (token, body) => {
  return axios.post(`${getURL}/product`, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

//create promo
export const createPromo = (token, body) => {
  return axios.post(`${getURL}/promo`, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

//edit promo
export const editPromo = (token, body, params) => {
  return axios.patch(
    `${getURL}/promo/${params}`,
    body,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};

//edit product
export const editProduct = (token, body, params) => {
  return axios.patch(
    `${getURL}/product/${params}`,
    body,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};
