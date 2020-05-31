import {AsyncStorage} from 'react-native';

const AppAsyncStorage = {
  save: async (key, value) => {
    await AsyncStorage.setItem(`${key}`, value);
    return true;
  },
  get: async key => {
    let result = await AsyncStorage.getItem(`${key}`);
    // console.log(`get : ${key} = ${result}`);
    return result;
  },
};

export default AppAsyncStorage;
