import axios from 'axios';

// API base URL'inizi buraya koyun
const API_BASE_URL = 'http://localhost:8080/api';

// Axios örneğini oluştur
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Token'ı localStorage'a kaydet
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
  }
};

// Uygulama başlatıldığında, localStorage'dan token'ı al ve ayarla
const token = localStorage.getItem('token');
if (token) {
  setAuthToken(token);
}

export default api;
