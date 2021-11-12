import axios from "axios";

const apiClient = () => {

    const axiosInstance = axios.create({
        baseURL: 'https://api.openweathermap.org/',
        responseType: "json",
    });

    return axiosInstance;
};

export default apiClient;