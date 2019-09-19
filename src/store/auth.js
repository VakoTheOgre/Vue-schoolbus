
export default {
    state: {
        user: null,
        token: ''
    },

    mutations: {
        SET_USER: (state, user) => state.user = user,
        SET_TOKEN: (state, token) => state.token = token
    },

    getters: {
        token: (state) => state.token,

        isAuthenticated: (state) => state.token.length > 0
    }
}