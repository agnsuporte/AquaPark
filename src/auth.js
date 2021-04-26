import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN_KEY = '@AquaParkKEY';

export const signOut = async () => {
  await AsyncStorage.clear();
};

export const setToken = async token => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getToken = async () => {
  const storagedToken = await AsyncStorage.getItem(TOKEN_KEY);
  return storagedToken;
};

export const isEmailValid = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !!re.test(String(email).toLowerCase());
};
