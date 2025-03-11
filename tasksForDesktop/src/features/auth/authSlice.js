import { createSlice } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';
import api from '../../api/api';
import { useNavigate } from 'react-router';

const initialState = {
  user: null,
  currentRole: null,
  loading: false,
  error: null,
};

// Инициализация из localStorage
const token = localStorage.getItem('token');
if (token) {
  try {
    const decoded = jwtDecode(token);
    initialState.user = {
      id: decoded.user_id,
      roles: decoded.roles,
      fullName: decoded.full_name,
      email: decoded.email
    };
    initialState.currentRole = decoded.roles?.[0] || 'player';
  } catch (error) {
    localStorage.removeItem('token');
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      const { token, user } = action.payload;
      const decoded = jwtDecode(token);
      
      state.loading = false;
      state.user = {
        id: decoded.user_id,
        roles: decoded.roles,
        fullName: decoded.full_name,
        email: decoded.sub
      };
      state.currentRole = decoded.roles?.[0] || 'player';
      state.error = null;
      localStorage.setItem('token', token);
      
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      localStorage.removeItem('token');
    },
    logout(state) {
      state.user = null;
      state.currentRole = null;
      state.error = null;
      localStorage.removeItem('token');
    },
    setCurrentRole: (state, action) => {
      state.currentRole = action.payload;
    },
    updateUserData(state) {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          state.user = { ...state.user, ...decoded };
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
    }
  },
});

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  logout, 
  setCurrentRole,
  updateUserData
} = authSlice.actions;

// Thunk для логина с Axios
export const login = (credentials, navigate) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await api.post('/auth/login', credentials);
    
    dispatch(loginSuccess({
      token: response.data.access_token,
      user: response.data.user
    }));
    navigate('/player/home')
    
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Login failed';
    dispatch(loginFailure(errorMessage));
  }
};

// Thunk для автоматической проверки токена
export const checkAuth = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        dispatch(loginSuccess({ token }));
      } else {
        dispatch(logout());
      }
    } catch (error) {
      dispatch(logout());
    }
  }
};

export default authSlice.reducer;