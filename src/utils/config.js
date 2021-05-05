export default class Config {
  static getHeaderConfig = () => {
    const config = {
      headers: { authorization: 'mysecrettoken' }
    };
    return config;
  };
}