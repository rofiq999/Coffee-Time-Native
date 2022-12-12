import ACTION_STRING from "./actionString";
import { Logout, userID } from '../../utils/axios'



// Action Logout
const logoutPending = () => ({
  type: ACTION_STRING.logout.concat(ACTION_STRING.pending),
});

const logoutRejected = error => ({
  type: ACTION_STRING.logout.concat(ACTION_STRING.rejected),
  payload: { error },
});

const logoutFulfilled = data => ({
  type: ACTION_STRING.logout.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const logoutThunk = (body, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(logoutPending());
      const result = await Logout(body);
      dispatch(logoutFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(logoutRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};



// Action Get user by id
const profilePending = () => ({
  type: ACTION_STRING.profile.concat(ACTION_STRING.pending),
});

const profileRejected = error => ({
  type: ACTION_STRING.profile.concat(ACTION_STRING.rejected),
  payload: { error },
});

const profileFulfilled = data => ({
  type: ACTION_STRING.profile.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const userIDThunk = (token, navigate) => {
  return async dispatch => {
    try {
      dispatch(profilePending());
      const result = await userID(token);
      console.log(result.data)
      dispatch(profileFulfilled(result.data));
      if (typeof navigate === "function") navigate();
    } catch (error) {
      dispatch(profileRejected(error));
    }
  };
};


// Action get data product to payment
const productFulfilled = data => ({
  type: ACTION_STRING.product.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const productThunk = (body, navigate) => {
  return async dispatch => {
    try {       
      dispatch(productFulfilled(body));
      if (typeof navigate === "function") navigate();
    } catch (error) {
      console.log(error)
    }
  };
};





const authAction = {
  logoutThunk,
  userIDThunk,
  productThunk
};

export default authAction;