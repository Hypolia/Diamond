import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/index.vue"
import HomeEquipe from "../pages/equipe/index.vue"
import Maintenance from "../pages/maintenance.vue"
import Login from "../pages/authentication/login.vue"
import Blog from "../pages/blog/index.vue"
import {useAuthentication} from "../provider/Authentication";
export const routesNavbar = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/equipe",
    name: "Team",
    component: HomeEquipe
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  }
]
export const routes = [

  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/equipe",
    name: "Equipe",
    component: HomeEquipe
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/authentication/login",
    name: "Login",
    component: Login
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Maintenance",
    component: Maintenance
  }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach(async (to, from) => {
    console.log(to.path)

    let value = false
    const data = document.cookie.split(';')
    let token = null
    for (let i = 0; i < data.length; i++) {
      if (data[i].includes('hypolia.token')) {
        const splitData = data[i].split('=')
        token = splitData[1]
      }
    }
    if (token) {
      value = true
    }
    console.log(token, value)
    if (!value) {
      if (!(to.path === '/maintenance' || to.path === '/authentication/login')) {
        await router.push('/maintenance')
      }
    }
   /* if (!(to.path === '/maintenance') && !state.isLoggedIn) {
      await router.push('/maintenance')
      return
    }*/
    return
})
export default router