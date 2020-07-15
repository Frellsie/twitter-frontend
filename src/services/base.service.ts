import axios from 'axios'
import store from '../store'

let baseService = class BaseService {
    
    baseURL: string = ''
    $http: any;
    headers: object = {}

    constructor() {        

        this.$http = axios.create({
            timeout: 60000
        });

        this.$http.interceptors.request.use((config: any) => {
            return config
        })

        this.$http.interceptors.response.use((response: any) => {
            return response
        })
        

        if(store.getters['account/isLoggedIn'])
        {
            this.headers = {
                Authorization: 'Bearer ' + store.getters['account/getUser'].access_token
            }
        } 
    }

    getHeaders(additionalHeaders = {}, multipart = false) {
        let defaultHeaders = this.headers;

        if (multipart) {
            defaultHeaders = {}
        }

        return {
            ...defaultHeaders,
            ...additionalHeaders
        }
    }

    prepareUrl(url: string, params: any) {
        for (let index in params) {
            let identifier = ':' + index;
            url = url.replace(identifier, params[index]);
        }
        return url;
    }

    getQueryString(params: { [x: string]: string | number | boolean; }) {
        return (
            Object
                .keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&')
        )
    }

    post(uri: string, data: {}, additionalHeaders = {}) {
        return this.$http.post(uri, data, {
            headers: this.getHeaders(additionalHeaders),
        })
    }

    put(uri: any, data: any, additionalHeaders = {}) {
        return this.$http.put(uri, data, {
            headers: this.getHeaders(additionalHeaders),
        })
    }

    patch(uri: any, data: any, additionalHeaders = {}) {
        return this.$http.patch(uri, data, {
            headers: this.getHeaders(additionalHeaders),
        })
    }

    remove(uri: any, additionalHeaders = {}) {
        return this.$http.delete(uri, {
            headers: this.getHeaders(additionalHeaders),
        })
    }

    get(uri: string, data = {}, additionalHeaders = {}) {
        if (Object.keys(data).length > 0) {
            uri = `${uri}?${this.getQueryString(data)}`
        }        
        
        return this.$http.get(uri, {
            headers: this.getHeaders(additionalHeaders),
        })
    }

    mcxGet(uri: string, data = {}, additionalHeaders = {}) {
        if (Object.keys(data).length > 0) {
            uri = `${uri}?${this.getQueryString(data)}`
        }

        return this.$http(uri, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accept-Ranges': 'bytes',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive'
            },            
        })
    }
};

export default baseService
