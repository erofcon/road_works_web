import axios from "axios";
import store from "@/store";
import User_service from "@/services/user_service";
import router from "@/router";
// import router from "../router/index.js";

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Authorization': '',
}

const defaultUrl = 'http://192.168.1.253:8000';
// const defaultUrl = 'http://127.0.0.1:8000';
// const defaultUrl = 'http://0.0.0.0:8000'

export const defaultApiInstance = axios.create({
    baseURL: defaultUrl,
    headers: defaultHeaders,
});


defaultApiInstance.interceptors.request.use(
    (config) => {
        const token = User_service.getLocalAccessToken();
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

defaultApiInstance.interceptors.response.use(
    (result) => {
        return result;
    },
    async (error) => {
        const originalConfig = error.config;

        if (store.getters['authenticate/isAuthenticated'] && originalConfig.url !== '/token' && error.response.status === 401) {
            try {
                const form = new FormData();
                form.append('token', User_service.getLocalRefreshToken());
                form.append('username', User_service.getLocalUserName());

                await store.dispatch('authenticate/logout');
                User_service.removeUser();

                const result = await defaultApiInstance.post('/refresh', form, {headers: {'Content-Type': 'multipart/form-data'}});
                const user = result.data;

                await store.dispatch('authenticate/refreshToken', user)
                User_service.setUser(user)

                return defaultApiInstance(originalConfig);
            } catch (_error) {
                await router.push('/login')
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    },
);
