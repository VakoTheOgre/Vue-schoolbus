export default {
    namespaced: true,

    state: {
        schools: []
    },

    getter: {

    },

    mutations: {
        set(state, payload) {
            state.schools = payload
            // console.log(payload.schools)
        }
    },

    actions: {
        
    }
}