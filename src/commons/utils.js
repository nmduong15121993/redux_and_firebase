
export default class Utils {
  
  static removeEmptyAttributes = data => {
    let obj = data;
    if (obj) {
      obj = { ...data };
      Object.keys(obj).forEach(key => {
        if (obj[key] === undefined || obj[key] === null) {
          delete obj[key];
        }
      });
    }
    return obj;
  };

}
