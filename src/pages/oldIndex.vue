<template>
  <div class="overflow-x-hidden main index">
    <Navbar />

    <div class="">
      <Header />
      <div class="body">
        <div class="separateur"/>

        <WhatIs />
        <div class="info--skyblock">
          <div class="info--background h-full"/>
          <div class="absolute top-0 text-teal-50 flex flex-col space-y-10 w-2/3 ">
            <div class="mx-auto">
              <h2 class="text-2xl font-bold text-white">Meet The Team</h2>
              <h5 class="text-gray-400 font-light">Learn about the people who make Origin Realms amazing!</h5>
            </div>

            <div class="flex flex-col space-y-1 mx-auto">
              <h3 class="text-xl text-fuchsia-300 font-bold">NATHAEL - ADMIN</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </div>
<!--
        <div>
          <button @click="toast">Clique sur moi</button>
        </div>-->


      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/navbar/Navbar.vue";
import Header from "../components/header/Header.vue";
import Test from "../components/Test.vue"
import 'mosha-vue-toastify/dist/style.css'
import { createToast } from 'mosha-vue-toastify';
import WhatIs from "../components/index/WhatIs.vue";
import Footer from "../components/Footer.vue";
const toast = () => {
  createToast(Test, {
    transition: "slide",
    toastBackgroundColor: "none",
    hideProgressBar: true,
    showCloseButton: false,
  })
}
</script>

<style lang="scss" >
.index {
  height: 100%;
}

.main {
  background: url(https://d2vkoy1na2a6o6.cloudfront.net/_next/static/images/homepage_chalk_tile-7e161157dbaaa19b94ba3136d3addc44.jpg);
  margin: 0 auto;
  overflow: hidden;
  min-height: 100%;
  position: relative;
}
html {
  background-color: rgb(42, 47, 50);
  z-index: 0;
}
.index {
  .body {
    //background-image: url(https://d2vkoy1na2a6o6.cloudfront.net/images/fireside-gatherings/events/cmsChalkboardBg-d71e280bae3eb4c266e8d57b28e5c5053f7af53d75f87f16bc401df03929711113adf9fc8281b2ffee7ed0c4d240371889d89986e578f5fdca85e71b6e11fc58.jpg);
    // background-position: 50%;
    // background-size: cover;
    padding-bottom: 5em;
    position: relative;
    height: 100%;
    .separateur {
      background: url(https://media.discordapp.net/attachments/883079588522131466/883381897676349440/unknown.png?width=2688&height=56) repeat-x;
      height: 10px;
    }

    .info--skyblock {
      position: relative;
      margin-top: 12px;
      height: 500px;
      &::before, &::after {
        content: "";
        position: absolute;
        height: 8px;
        width: 100%;
        display: block;
      }
      &::before {
        top: 0;
        background: url("../assets/bg-block-top.png") top center repeat-x transparent;
      }
      &::after {
        background: url("../assets/bg-block-bottom.png") bottom center repeat-x transparent;
        bottom: -1px;
      }
      .info--background {

        top: 0;
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-image: url("../assets/bg-caroussel-screen.jpeg");
        //background-image: url("https://static.ankama.com/dofus/ng/modules/misc/prehome/prehome2018/assets/bg-carousel-screen.jpg");
      }
    }

  }
  .circle {
    position: relative;
    width: 30vw;
    height: 30vw;
    max-width: 32.5rem;
    max-height: 32.5rem;
    .circle-image {
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 50%;
    }
    .circle-image>img {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      margin: 0px 0px 0px 0px;
      transition: opacity 0.3s ease 0s;
    }
    .style__OuterRing-g749e2-3-Component {
      animation: 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running dmOboD;
    }
    .svg-1 {
      position: absolute;
      left: -2%;
      top: -2%;
      z-index: 2;
      width: 104%;
      height: 104%;
      fill: none;
      stroke: rgba(255, 255, 255, 0.6);
      stroke-width: 0.25;
      opacity: 1;
    }
    .style__DialRingWrapper-g749e2-4 {
      animation: 3s cubic-bezier(0.165, 0.84, 0.44, 1) 1s 1 normal forwards running eUIslZ;
    }
    .lfilzx {
      overflow: hidden;
      position: absolute;
      left: -5%;
      top: -5%;
      width: 110%;
      height: 110%;
      pointer-events: none;
    }
    .gnMYnN {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      fill: rgba(255, 255, 255, 0.6);
      //animation: 180s linear 0s infinite normal none running hVGmme;
      animation-duration: 60s;
      animation-name: slidein;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    @keyframes slidein {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .pets {}
}
</style>