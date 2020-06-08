import {ApiCallPost} from '../ApiConfig/ApiCall';
import {ApiConfig} from '../ApiConfig/ApiConfig';

const UserService = {
  register: async data => {
    const {baseUrl, adduser} = ApiConfig;
    const url = baseUrl + adduser;

    const params = {
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
      gender: data.gender,
      mobile: data.mobile,
      email: data.email,
      password: data.password
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    return ApiCallPost(url, params, headers);
  },

  login: async data => {
    const {baseUrl, login} = ApiConfig;
    const url = baseUrl + login;

    const params = {
      mobile: data.mobile,
      password: data.password
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    return ApiCallPost(url, params, headers);
  },
};

export default UserService;
