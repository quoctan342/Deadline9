import api from "@/plugins/api";
import router from "@/router";
import cookie from "@/plugins/cookies"

const state = {
    is_Logged: false,
    user: null,
};

const getters = {
    islogged(state) {
        return state.is_Logged;
    },
    getUser(state) {
        return state.user
    },
};

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },
    setStatus(state, payload) {
        state.is_Logged = payload;
    },
};

const actions = {
    async login({ commit }, payload) {
        try {
            let res = await api.loginUser(payload);
            if (res.data.token) {
                cookie.set('access_token', res.data.token);
                let fetchUser = await api.checkAuth();
                let infoUser = fetchUser.data;
                commit('setUser', infoUser)
            }
            commit('setStatus', res.data.status);
            router.push({ name: 'dashboard' })
        } catch (error) {
            throw error;
        }
    },
    async register({ commit }, payload) {
        try {
            let res = await api.registerUser(payload);
            if (res.data.token) {
                cookie.set('access_token', res.data.token);
                let fetchUser = await api.checkAuth();
                let infoUser = fetchUser.data;
                commit('setUser', infoUser);
            }
            commit('setStatus', res.data.status);
            router.push({ name: 'dashboard' })
        } catch (error) {
            throw error;
        }
    },
    async fetchUser({ commit }) {
        try {
            let res = await api.checkAuth();
            let { data } = res
            if (data) {
                commit('setUser', data);
                commit('setStatus', true);
            }
        } catch (error) {
            throw error
        }
    },
    logout({ commit }) {
        commit('setUser', null)
        cookie.remove('access_token')
        router.push({ name: 'login' })
    }
};

export default {
    state,
    mutations,
    getters,
    actions,
    namespaced: true,
};