import axios from 'axios';

export const ApiCallPost = async (url, parameters, headers) => {
  try {
    const response = await axios.post(url, parameters, {headers: headers});
     console.log(url, parameters, {headers: headers});
    return response;
  } catch (error) {
      console.log(JSON.stringify(error))

    return error;
  }
};

export const ApiCallGet = async (url, headers) => {
  try {
    const response = await axios.get(url, {headers: headers});
  //  console.log(response);
    return response;
  } catch (error) {
    console.log(JSON.stringify(error))
    return error;
  }
};
