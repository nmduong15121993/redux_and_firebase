export default class User {
  constructor() {
    this.id = '';
    this.name = '';
    this.keypass = '';
    this.fullName = '';
    this.email = '';
    this.address = '';
    this.avatar = '';
    this.token = '';
  }

  update(data) {
    let obj = {...this};
    Object.keys(obj).forEach(item => {
      this[item] = data[item] || this[item];
    });
  }

  static clone(data) {
    const cloneData = new User();
    cloneData.update(data);
    return cloneData;
  }
}
