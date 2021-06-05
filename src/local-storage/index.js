import User from '../users-management';
import { STORAGE } from '../commons/constants';
import Utils from '../commons/utils';

class Storage {
  constructor() {
    this.user = new User();
  }

  saveUser = (token) => {
    try {
      // this.user = User.clone({
      //   ...this.user,
      //   ...Utils.removeEmptyAttributes(user),
      // });
      localStorage.setItem(STORAGE.USER_DATA, JSON.stringify(token));
    } catch (error) {
      console.log('[Storage] Save user error', error);
    } finally {
      return this.user;
    }
  };

  removeUser = () => {
    try {
      this.user = new User();
      localStorage.removeItem(STORAGE.USER_DATA);
    } catch (error) {
      console.log('[Storage] Remove user data error', error);
    }
  };

  isLoggedIn = () => {
    const isLoggedIn = !!(this.user && this.user.token);
    console.log('storage', this);
    console.log('storage - user', this.user);
    console.log('storage - isLoggedIn', isLoggedIn);
    return this.user && this.user.token;
  };
}

const storage = new Storage();
export default storage;
