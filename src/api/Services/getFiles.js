import {ApiCallGet, ApiCallPost} from '../ApiConfig/ApiCall';
import { ApiConfig } from '../ApiConfig/ApiConfig';

const GetFilesService = {
  getFilesList: async (data) => {
    const { baseUrl, getFiles} = ApiConfig;
    const url = baseUrl + getFiles;

    const params = JSON.stringify({
      mobile: data.mobile,
      role: data.role,
    });

    const headers = {
      'Content-Type': 'application/json',
    };

    return ApiCallPost(url, params, headers);
  },

  queriesRecord: async (data) => {
    const {baseUrl, insertRecord} = ApiConfig;
    const url = baseUrl + insertRecord;

    const headers = {
      "Content-Type": 'application/json',
    };

    const params = JSON.stringify({
       mobile: data.mobile,
       subject: data.subject,
       data: {
         fileName: data.fileName,
         uri: data.uri,
       }
    });

    return ApiCallPost(url, params, headers);
  },

  updateStatus: async (data) => {
    const {baseUrl, updateStatus} = ApiConfig;
    const url = baseUrl + updateStatus;
    const headers = {
      "Content-Type": 'application/json',
    };

    const params = {
      mobile: data.mobile,
      recid: data.recId,
      status: data.status
    };

    return ApiCallPost(url, params, headers);
  }
};

export default GetFilesService;
