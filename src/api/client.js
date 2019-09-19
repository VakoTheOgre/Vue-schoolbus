import axios from '../axios'
class ApiClient {
    constructor() {
        this.schools = []
    }

    async fetchSchools() {
        try {
            const res = await axios.get('http://www.mocky.io/v2/5d82108e300000376d699abf')
            this.schools = res.data.schools
        } catch(e) {
            throw e 
        }
    }

    async authMe() {
        return Promise.resolve({ token: 'test-token' })
    }
}
export const client = new ApiClient()
