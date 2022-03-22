<template>
  <div class="overflow-hidden login">
    <div class="h-screen">
      <div class="video h-screen">
        <video loop playsInline autoPlay>
          <source src="https://d2vkoy1na2a6o6.cloudfront.net/videos/fsg-bg-wide-1d7a662b187e51758a166d75380b8e7bcb62ce97ddfd50f0eb0aefef32b27f478fbe293ea6cfff31f8b5e6b1ed2b5fbe1c0e0ca48bbf0408ddf6d4bc0172073b.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="absolute top-0 left-0  h-full w-full flex flex-col pt-12">
        <!--  Abeille Icon  -->
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <router-link class="w-full h-full" to="/">
            <img class="mx-auto h-32 w-auto" src="https://media.discordapp.net/attachments/741715676863135811/888862858992054282/icon_1500x1500.png?width=1424&height=1424" alt="Workflow" />
          </router-link>
        </div>
        <div class="form  mx-auto w-[90%] md:w-[60%] lg:w-[40%]">
          <div class="border-box"/>
          <div class="box px-12 pt-12">
            <div class="">
              <h3 class="text-center uppercase text-gray-300 text-xl font-thin border-b border-gray-500 pb-6 mx-12">Se connecter</h3>
              <form class="space-y-12 mt-12" action="#" method="POST">
                <div class="space-y-3">
                  <div>
                    <label for="email" class="sr-only">Email</label>
                    <input type="text" name="email" id="email"
                           v-model="form.email"
                           class="text-gray-500 shadow-sm py-2 px-3 focus:border-indigo-500 block w-full sm:text-sm border border-gray-700 bg-transparent rounded-md" placeholder="Email" />
                  </div>
                  <div>
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password"
                           v-model="form.password"
                           class="text-gray-500 shadow-sm py-2 px-3 focus:border-indigo-500 block w-full sm:text-sm border border-gray-700 bg-transparent rounded-md" placeholder="Mot de passe" />
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input id="remember-me"

                             name="remember-me" type="checkbox" class="h-4 w-4 text-gray-500 border-gray-300 rounded-xl" />
                      <label for="remember-me" class="ml-2 block text-sm text-gray-500">
                        Se souvenir de moi
                      </label>
                    </div>

                    <div class="text-sm">
                      <a href="#" class="font-normal text-gray-500 hover:text-gray-50 transition ease-in-out duration-200">
                        Mot de passe oublié ?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                        type="submit"
                        @click.prevent="handleSubmit"
                        class="w-full flex justify-center py-2 px-4 border border-gray-700 bg-button-login rounded-md shadow-sm text-sm font-medium text-white  focus:outline-none">
                      Se connecter
                    </button>
                  </div>
                </div>

              </form>


            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";
import { useAuthentication } from '../../provider/Authentication'
const { login, user, isLoggedIn, logout, state } = useAuthentication()
const router = useRouter()
const form = {
  email: '',
  password: ''
}
const handleSubmit = async () => {
  try {
    //const {data} = await http.post('/authentication/api/login', form)
    await login(form)
    await router.push('/')
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  .video video {
    display: block;
    filter: blur(3px);
    width: auto;
    max-width: inherit;
    height: 100vh;
    left: 50%;
    position: relative;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);

  }
  .video::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(14, 14, 14, 0.6);
  }

  .form {
    height: 70%;
    position: relative;
    .border-box {

      position: absolute;
      width: calc(100% + 25px);
      height: calc(100% + 29px);
      left: -10px;
      top: -10px;
      z-index: 1;
      pointer-events: none;
      border-style: solid;
      border-width: 27px 27px 31px;
      -webkit-border-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt47cbe0118299f668/5f1ef3b8bb238f5556376422/homepage-frame-grid.png) 27 27 31 fill stretch;
      border-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt47cbe0118299f668/5f1ef3b8bb238f5556376422/homepage-frame-grid.png) 27 27 31 fill / 1 / 0 stretch;
    }

    .box {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      border-radius: 25px;
      overflow: hidden;
      background-image: url(https://d2vkoy1na2a6o6.cloudfront.net/_next/static/images/homepage_chalk_tile-7e161157dbaaa19b94ba3136d3addc44.jpg);
      background-position: center top;
      background-size: cover;
    }
    .box ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: rgba(14, 14, 14, 0.1);
    }
  }
}

</style>