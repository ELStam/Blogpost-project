import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.VITE_API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default apiClient