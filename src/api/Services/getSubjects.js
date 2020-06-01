import {ApiCallGet} from '../ApiConfig/ApiCall';
import { ApiConfig } from '../ApiConfig/ApiConfig';

const GetSubjectService = {
  getSubject: async () => {
    const { baseUrl, getSubject} = ApiConfig;
    const url = baseUrl + getSubject;

    const headers = {
      'Content-Type': 'application/json',
    };

    return ApiCallGet(url, headers);
  },
};

export default GetSubjectService;
