import axios from 'axios'
import Cookies from "js-cookie";

const apiClient = axios.create({
    baseURL: import.meta.VITE_API_BASE_URL,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

apiClient.interceptors.request.use(config => {
    const token = Cookies.get('auth_token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default apiClient
