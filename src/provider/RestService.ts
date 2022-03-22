import axios from "axios";
import {reactive} from "vue";

export const http = axios.create({
    baseURL: 'http://localhost:3333/api',
    withCredentials: true
})

export function restService () {

    const state = reactive({
        user: {},
        minecraft: {},
        discord: {},
        roles: {},
        permissions: {}
    })

    async function getUser (email: string) {
        const {data} = await http.get(`/user/${email}`)
        state.user = data.user
    }

    async function getMinecraft (uuid: string) {
        const {data} = await http.get(`/minecraft/${uuid}`)
        state.minecraft = data.minecraft
    }

    async function getDiscord (id: string) {
        const {data} = await http.get(`discord/${id}`)
        state.discord = data.discord
    }
}