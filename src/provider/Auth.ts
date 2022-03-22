import axios, {Axios} from "axios";
import {useRouter} from "vue-router";
import {markRaw, onMounted} from "vue";

export default class Http {

    private static instance: Http

    private axios: Axios = axios.create({
        baseURL: 'http://localhost:3333/api',
        withCredentials: true
    })


    public static createRequest () {
        const instance = this.getInstance()

        return instance.axios
    }

    public static async disconnected () {
        const instance = this.getInstance()
        try {
            console.log(instance)
            await instance.axios.post('/authentication/api/logout')
            instance.axios.defaults.headers.common['Authorization'] = ""
        } catch (e) {
            console.log(e)
        }

    }

    public static async isConnected (): Promise<boolean> {
        const instance = this.getInstance()
        try {
            const user = await instance.axios.get('/authentication/user/me')
            console.log("test", user)
            console.log(!!user)
            return !!user;
        } catch (e) {
            return false
        }


    }

    public static async getUser () {
        const instance = this.getInstance()
        try {
            console.log(instance)
            const user = await instance.axios.get('/authentication/user/me')
            console.log(user)
        } catch (e) {
            console.log(instance.axios.defaults.headers.head)
            console.log(e)
        }

    }

    public static getInstance () {
        if (!this.instance) {
            this.instance = new Http()
        }
        return this.instance
    }

    public static async defineBearer(token: string) {
        const instance = this.getInstance()
        instance.axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    }

    public static insertToken() {
        onMounted(() => {
            const cookie = document.cookie
            const data = cookie.split('=')
            const token = data[1].split(' ')
            console.log(token)
            const instance = this.getInstance()

            instance.axios.defaults.headers.common['Authorization'] = `${token}`
        })
    }
}