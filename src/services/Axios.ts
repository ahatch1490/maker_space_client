import axios from 'axios'
import type {App} from 'vue'
import {AxiosOptions} from "../Types/AxiosOptions.ts";



export default {
    install: (app: App, options: AxiosOptions) => {
        app.config.globalProperties.$axios = axios.create({
            baseURL: options.baseUrl,
            headers: {
                Authorization: options.token ? `Bearer ${options.token}` : '',
            }
        })
    }
}