import BaseService from '../base.service'

export default class TweetService extends BaseService {

    constructor() {
        super();  
        this.baseURL = process.env.VUE_APP_API_URL                      
    }

    add(params: object = {}) {
        let url = this.baseURL + '/api/tweet'

        return super.post(url, params);
    }        

    all() {
        let url = this.baseURL + '/api/tweets'

        return super.get(url);
    }
    
    comment(params: object = {}) {
        let url = this.baseURL + '/api/comment'

        return super.post(url, params);
    }

    react(params: object = {}) {
        let url = this.baseURL + '/api/react'

        return super.post(url, params);
    }

    delete(params: object = {}) {
        let url = this.baseURL + '/api/delete'

        return super.post(url, params);
    }
}
