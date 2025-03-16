import axios from 'axios';


const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

// Интерцептор для добавления токена
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Интерцептор для обработки ошибок
api.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response || {};
    
    if (status === 401) {
      // Удаляем токен
      localStorage.removeItem('token');
      
      // Перенаправляем на страницу авторизации
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;