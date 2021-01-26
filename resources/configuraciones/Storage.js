import AsyncStorage from '@react-native-async-storage/async-storage';
const SESION_KEY = 'configuracion';

export default {
  async saveData(data) {
    try {
      await AsyncStorage.setItem(SESION_KEY, JSON.stringify(data));
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async loadData() {
    try {
      const data = await AsyncStorage.getItem(SESION_KEY);
      return JSON.parse(data);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
};