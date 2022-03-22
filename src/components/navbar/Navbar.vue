<template>
  <div class="absolute top-[50px] navbar ">
    <!--  VERSION DESKTOP  -->
    <div class="navbar-container hidden lg:block">
        <div class="absolute top-0 flex flex-row h-full items-center justify-between w-full">
          <ul class="flex flex-row h-full items-center space-x-8">
            <!-- LOGO -->
            <li class="menu-item-0 menu-item">
              <button>
                <div class="icon">
                  <img src="https://cdn.discordapp.com/attachments/883079588522131466/912147668308992060/icon.png" alt="" />
                </div>
              </button>
            </li>

            <div class="links flex flex-row space-x-8">
              <li v-for="link in routesNavbar">
                <router-link :to="link.path">{{ link.name }}</router-link>
              </li>
            </div>
          </ul>

          <div class=" flex flex-row place-items-center space-x-4 mr-8 nav-button ">
            <div class="boutique">
              <Button text="boutique" :color='Colors.YELLOW' :size="1"/>
            </div>

            <template v-if="isLoggedIn">
              <div>
                <Menu as="div" class="">
                  <div class="connexion">
                    <MenuButton
                        class=""
                    >
                      <Button :text="user.username" :color='Colors.BLUE' :size="1"/>
                    </MenuButton>
                  </div>
                  <transition
                      enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-in"
                      leave-from-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                        class="absolute right-0  mt-2 origin-top-right divide-y divide-gray-100 "
                    >
                      <div class="box-float">
                        <div class="border" />
                        <div class="box text-white ">
                          <div class="link flex flex-col w-full h-full ">
                            <div class="border-b border-gray-800 px-6 flex flex-col">
                              <span class="text-sm text-gray-100">Connecté entant que</span>
                              <span class="font-medium ">{{ user.email }}</span>
                            </div>
                            <div class="border-b border-gray-800 px-6 flex mt-2 pb-2 space-y-2 flex-col">
                              <span>Profil</span>
                              <span>Paramètres</span>
                              <span>Dashboard</span>
                            </div>
                            <div>
                              <button @click.prevent="logout" class="px-6 pt-2 pb-2">Se déconnecter</button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </template>
            <template v-else>
              <div class="connexion">
                <router-link to="/authentication/login">
                  <Button text="Connexion" :color='Colors.BLUE' :size="1"/>
                </router-link>
              </div>
            </template>

          </div>
        </div>
    </div>
    <!-- VERSION MOBILE -->
    <div class="navbar-container lg:hidden">
      test
    </div>
  </div>
</template>

<script setup lang="ts">
import { Colors } from "../../provider/ColorButton";
import { routesNavbar } from '../../router'
import { useAuthentication } from '../../provider/Authentication'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import Button from "../Button.vue";

const { login, user, isLoggedIn, logout, state, parseCookie } = useAuthentication()


</script>

<style lang="scss">
.navbar {
  width: 90%;
  margin: 0 5%;
  -webkit-transition: all .4s ease-out;
  transition: all .4s ease-out;
  z-index: 50;
}

.navbar-container {
  height: 73px;
  padding-top: 8px;
  padding-bottom: 13px;
  background-image: url("../../assets/navbar/wood--middle.png");
  background-size: 1503px 73px;
  background-position: top;
  background-repeat: repeat-x;
  z-index: 11;
  ul {
    z-index: 20;
  }
}

.navbar::before,
.navbar::after {
  content: '';
  position: absolute;
  top: 0;
}

.navbar::before {
  background-image: url("../../assets/navbar/wood--left.png");
  background-size: 134px 73px;
  background-position: top;
  background-repeat: repeat-x;
  left: -3px;
  width: 134px;
  height: 73px;
  z-index: 0;
}

.navbar::after {
  background-image: url("../../assets/navbar/wood--right.png");
  background-size: 134px 73px;
  background-position: top;
  background-repeat: repeat-x;
  right: 0;
  width: 134px;
  height: 73px;
  z-index: 0;
}

.logo img {
  margin: -65px 15px -40px 20px;
  width: 320px;
  height: auto;
}

.icon img {
  margin: -60px 5px -40px 10px;
  width: 100px;
  height: auto;
}

.menu-item-0 {
  border-right-width: 6px;
  height: 70%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding-right: 10px;
  flex-shrink: 0;
}

.menu-item {
  text-align: center;
  border: solid;
  border-width: 0 6px 0 0;
  -webkit-border-image: url("../../assets/navbar/divider.png") 6 repeat;
  border-image: url("../../assets/navbar/divider.png") 6 repeat;
  position: relative;
  -webkit-transition: width .2s ease-in;
  transition: width .2s ease-in;
  letter-spacing: 1px;
}

.links {
  font-family: Belwe Bold, Georgia, Times, Times New Roman, serif;
  color: rgb(177, 150, 125);
  text-transform: uppercase;
}

.links li:hover {
  transition: all .2s ease-in;
  cursor: pointer;
  color: rgb(223, 202, 183);
}

.link-active {
  color: rgb(223, 202, 183);
}
.box-float {
  height: 210px;
  width: 300px;
  .border {
    position: absolute;
    width: calc(100% + 25px);
    height: calc(100% + 29px);
    left: -10px;
    top: -10px;
    z-index: 2;
    pointer-events: none;
    border-style: solid;
    border-width: 27px 27px 31px;
    -webkit-border-image: url("../../assets/navbar/homepage-frame-grid.png") 27 27 31 fill stretch;
    border-image: url("../../assets/navbar/homepage-frame-grid.png") 27 27 31 fill / 1 / 0 stretch;
  }
  .box {
    position: absolute;
    width: 100%;
    background: rgb(14, 14, 14);
    height: 100%;
    border-radius: 25px;
    overflow: hidden;
    background-size: cover;
  }
  .box .link {
    position: absolute;
    padding-top: 20px;
  }
}
</style>

