export default {
    namespaced: true,

    state: {
        students: []
    },

    getter: {

    },

    mutations: {
        set(state,payload) {
            for ( let i in payload[0].paths ) {
                for ( let stop in payload[0].paths[i].stops ) {
                    for ( let pass in payload[0].paths[i].stops[stop].passengers ) {
                       state.students.push(payload[0].paths[i].stops[stop].passengers[pass])
                    }
                }
            }
        }
    },

    actions: {
        
    }
}