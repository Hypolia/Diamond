<template>
  <div class="index overflow-hidden">
    <div class="section--panel--decoration ">
      <div class="decoration--left z-20">
        <span />
      </div>
      <div class="decoration--right z-20">
        <span />
      </div>
    </div>
    <div class="flex flex-col  z-10 relative space-y-12  justify-center h-full -translate-y-28">
      <div class="">
        <img class="w-1/3 mx-auto" src="../assets/logo_texte.png">
      </div>
      <div class="text-center">
        <h1 class="title w-1/3 mx-auto ">play with passion</h1>
      </div>
      <div class="mx-auto">
        <Button :color="Colors.YELLOW" :size="1" text="Se Connecter" @click.prevent="login"/>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
import { Colors } from "../provider/ColorButton";
import Button from "../components/Button.vue";
import router from "../router";

const login = () => {
  router.push('/authentication/login')
}
</script>

<style lang="scss" scoped>
h1, h2, h3 {
  -webkit-transition: .6s;
  -moz-transition: .6s;
  transition: .6s;
  -webkit-transition-delay: .1s;
  -moz-transition-delay: .1s;
  transition-delay: .1s;
}
.section--panel--decoration {
  .decoration--left, .decoration--right {
    position: absolute;
    top: 1em;
    bottom: 1em;
    span {
      display: block;
      position: absolute;
      top: 16px;
      bottom: 16px;
      width: 2px;
      background: #b3c1cb;
      opacity: 0.14;
    }
  }
  .decoration--left {
    left: 1em;
  }
  .decoration--right {
    right: 1em;
  }
  .decoration--right::before, .decoration--right::after, .decoration--left::before, .decoration--left::after {
    content: "";
    display: block;
    position: absolute;
    width: 50px;
    height: 16px;
    background: url("https://cdn.discordapp.com/attachments/936741758635769866/948267984638590986/decoration--corner.png") no-repeat 0 0;
    background-size: contain;
  }
  .decoration--left::after{
    bottom: 0;
    transform: rotate(180deg) scaleX(-1);
  }
  .decoration--right::after, .decoration--right::before {
    transform: scaleX(-1);
    right: 0;
  }
  .decoration--right::after {
    bottom: 0;
    transform: rotate(-180deg);
  }
}
.index {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url("https://cdn.discordapp.com/attachments/936741758635769866/948191889138524190/Render_1_Jour.png");

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.8);
  }
  .title {

    color: #c4b998;
    font-size: 32px;
    letter-spacing: 7px;
    position: relative;
    text-indent: 8px;
    text-transform: uppercase;
    top: 4px;
    font-weight: bold;
    padding: 0 0 .8em 0;
    font-family: 'penumbra-serif-std';
    border-bottom: 1px solid #7d631e;
    &::after, &::before {
      content: "";
      position: absolute;
      display: block;
      width: 15px;
      height: 15px;
      background: url("https://cdn.discordapp.com/attachments/936741758635769866/948199592858624080/separator-end-decoration.png") 50% 50% no-repeat;
      background-size: contain;
    }
    &::before {
      left: -14px;
      bottom: -8px;
    }
    &::after {
      right: -14px;
      bottom: -8px;
      transform: rotate(180deg);
    }
  }

}


</style>