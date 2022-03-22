import {onMounted, reactive, toRefs} from 'vue'
import axios from 'axios'
import {http} from "./RestService";
import router from "../router";




export function useAuthentication () {
    const state = reactive({
        isLoggedIn: false,
        user: {}
    })

    onMounted(async () => {
        const data = document.cookie.split(';')
        let token = null
        for (let i = 0; i < data.length; i++) {
            if (data[i].includes('hypolia.token')) {
                const splitData = data[i].split('=')
                token = splitData[1]
            }
        }
        if (token) {
            state.isLoggedIn = true
            console.log("mounted:",state.isLoggedIn)
            http.defaults.headers.common['Authorization'] = `Bearer ${token}`
            await getMe()
        } else {
            state.isLoggedIn = false
        }
    })

    async function getMe () {
        const {data} = await http.get('/authentication/user/me')
        state.user = data.user
    }

    async function login (credentials: { [K: string]: string }) {
        try {
            const { data } = await http.post('/authentication/api/login', credentials)
            const token = data.token.token
            document.cookie = `hypolia.token=${token}`
            http.defaults.headers.common['Authorization'] = `Bearer ${token}`
            state.isLoggedIn = true
            console.log("etat",state.isLoggedIn)
        } catch (err) {

        }
    }

    async function logout () {
        try {
            document.cookie = "hypolia.token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"
            try {
                await http.post('/authentication/api/logout')
                delete http.defaults.headers.common['Authorization']
                state.isLoggedIn = false
                await router.push('/')
            } catch (e) {
                console.log(e)
            }


        } catch (err) {
            console.log(err)
        }
    }

    async function parseCookie () {
        const data = document.cookie
        return data
            .split(';')
            .map(v => v.split('='))
            .reduce((acc: any, v) => {
                acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
                return acc;
            }, {})
    }

    return {
        ...toRefs(state),
        login,
        logout,
        parseCookie,
        state
    }
}