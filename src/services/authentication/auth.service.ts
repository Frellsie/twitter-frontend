import BaseService from '../base.service'

export default class AuthService extends BaseService {

    constructor() {
        super();  
        this.baseURL = process.env.VUE_APP_API_URL                      
    }

    register(params: object = {}) {
        let url = this.baseURL + '/api/register'
        console.log(url)

        return super.post(url, params);
    }    

    login(params: object = {}) {
        let url = this.baseURL + '/api/login'
        console.log(url)

        return super.post(url, params);
    }
    
    update(params: object = {}) {
        let url = this.baseURL + '/api/update'
        console.log(url)

        return super.post(url, params);
    }
}
