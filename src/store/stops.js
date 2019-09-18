export default {
    namespaced: true,

    state: {
        stops: []
    },

    getter: {

    },

    mutations: {
        set(state,payload) {
            for ( let i in payload[0].paths ) {
                for ( let stop in payload[0].paths[i].stops ) {
                    state.stops.push(payload[0].paths[i].stops[stop])
                }
            }
        }
    },

    actions: {
        
    }
}