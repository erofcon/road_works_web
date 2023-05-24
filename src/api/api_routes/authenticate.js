import {defaultApiInstance} from "@/api";

export const AuthenticateAPI = {
    getToken(data) {
        const url = '/token';
        return defaultApiInstance.post(url, data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    },
}




