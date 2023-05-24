import User_service from "@/services/user_service.js";
import {AuthenticateAPI} from "@/api/api_routes/authenticate.js"

const currentUser = User_service.getUser();


const initialState = currentUser
    ? {status: {loggedIn: true}, currentUser}
    : {status: {loggedIn: false}, currentUser: null};

export const authenticate = {
    namespaced: true,
    state: initialState,
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.currentUser = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.currentUser = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.currentUser = null;
        },
    },
    getters: {
        isAuthenticated(state) {
            return !!state.status.loggedIn;
        },
    },
    actions: {
        login({commit}, data) {

            return AuthenticateAPI.getToken(data).then(value => {
                    commit('loginSuccess', value.data);
                    User_service.setUser(value.data);
                    return Promise.resolve(value.data);
                }, (error) => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            )
        },
        logout({commit}) {
            User_service.removeUser();
            commit('logout');
        },
        refreshToken({commit}, user) {
            commit('loginSuccess', user);
        }
    },
}
