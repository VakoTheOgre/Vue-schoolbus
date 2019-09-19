import { client } from '../api'

export default {

    state: {
        schools: [],
        currentSchool: null,
        students: [],
        stops: [],
        paths: []
    },

    getter: {

    },

    mutations: {
        FETCHED_SCHOOLS: (state,schools) => { 
            state.schools = schools 
        },

        SET_CURRENT_SCHOOL: (state, school) => state.currentSchool = school,

        SET_STUDENTS: (state, students) => state.students = students,

        SET_STOPS: (state, stops) => state.stops = stops,

        SET_PATHS: (state, paths) => state.paths = paths
    },

    actions: {
        async FETCH_SCHOOLS({ state, commit, dispatch }) {
            try {
                await client.fetchSchools()
                commit('FETCHED_SCHOOLS', client.schools)
                if (state.schools.length === 1) {
                    commit('SET_CURRENT_SCHOOL', state.schools[0])
                    dispatch('FLATEN_SCHOOL')
                }
            } catch(e) {
                throw e
            }
        },

        FLATEN_SCHOOL({ state, commit }) {
            const paths = state.currentSchool.paths
            const stops = paths.flatMap(p => p.stops)
            const students = stops.flatMap(s => s.passengers)
            
            commit('SET_PATHS', paths)
            commit('SET_STOPS', stops)
            commit('SET_STUDENTS', students)
        }
    }
}