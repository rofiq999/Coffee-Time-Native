import axios from 'axios';

const getURL = `coffee-time-be-new.vercel.app/coffee`;

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
    `coffee-time-be-new.vercel.app/coffee/transactions/history?page=1&limit=10`,
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
    `coffee-time-be-new.vercel.app/coffee/transactions/history`,
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
    `coffee-time-be-new.vercel.app/coffee/transactions/${id}`,
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
    `coffee-time-be-new.vercel.app/coffee/users/editPasswords`, body,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};