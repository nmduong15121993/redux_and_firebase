import { 
  createAsyncThunk, 
  createSlice 
} from '@reduxjs/toolkit';
import { notification } from 'antd';
import { firebase } from '../firebase';
import Storage from '../../local-storage';

const initialState = {
  email: '',
  password: '',
  loading: false,
  isLogin: false,
  user: {},
  error: '',
};

export const loginAsync = createAsyncThunk(
  'counter/loginAsync',
  async ({ email, password }) => {
    // const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(email, password);
    const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(res);
    return res.user;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = `[${action.error.name}]: ${action.error.message}`;
        notification.error({
          message: 'Đăng nhập thất bại',
          description: 'Sai tên tài khoản hoặc mật khẩu !!!',
        });
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.error = '';
        notification.success({
          message: 'Đăng nhập thành công',
        });

        console.log(action.payload);

        const { email, displayName, refreshToken } = action.payload;
        console.log(refreshToken);
        Storage.saveUser(refreshToken);
        state.user = {

        }
      })
  }

});

export default loginSlice.reducer;
