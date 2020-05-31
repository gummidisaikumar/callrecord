import {ApiCallGet} from '../ApiConfig/ApiCall';
import { ApiConfig } from '../ApiConfig/ApiConfig';

const GetFilesService = {
  getFilesList: async () => {
    const { baseUrl, getFiles} = ApiConfig;
    const url = baseUrl + getFiles;
     console.log('url', url);
    const headers = {
      'Content-Type': 'application/json',
    };

    return ApiCallGet(url, headers);
  },
};

export default GetFilesService;
