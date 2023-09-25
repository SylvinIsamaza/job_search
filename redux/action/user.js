import axios from "axios";
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
} from "../reducer/user";

export const login = (data) => async (dispatch) => {
  loginStart();
  try {
    const { data } = await axios.get("http://localhost:6764", {
      withCredentials: true,
    });
    // console.warn(data)
    console.log(data);
    loginSuccess(data);
  } catch (error) {
    loginFailure(error);
    console.log(error.message);
  }
};

export const createUser = (data) => async (dispatch) => {
  createUserStart();
  try {
    const { data } = await axios.post("http://localhost:6764/create", data, {
      withCredentials: true,
    });
    console.log(data);
    createUserSuccess(data);
  } catch (error) {
    createUserFailure(error);
    console.log(error);
  }
};
