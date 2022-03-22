<template>
  <div class="overflow-hidden equipe ">
    <Navbar />
    <div class="header">
      <div class="section--panel--decoration">
        <div class="decoration--left z-20">
          <span />
        </div>
        <div class="decoration--right z-20">
          <span />
        </div>
      </div>
      <div class="flex flex-col  text-center h-4/5 justify-center z-10 relative">
        <h1 class="title">our family</h1>
        <h3 class="subtitle text-gray-300">help us build the future</h3>
      </div>
    </div>
    <div class="separator">
      <div class="separator--container">
        <h3 class="absolute top-0 text-white mx-auto w-full text-center h-full items-center justify-center flex">exploration and adventure</h3>
      </div>
    </div>
    <div class="flex flex-col body">
      <div class="py-8 section--information ">
        <div class="flex flex-row items-center relative max-w-[90%] w-full mx-auto z-10">
          <div class=" w-1/2">
            <img alt="img" class="" src="https://hypixelstudios.com/_nuxt/img/mage-warrior.7ac9fa4.png">
          </div>

          <div class=" w-1/3 space-y-6 paragraph text-gray-300">
            <div class="space-y-1">
              <p>Hypolia is composed of a team that contributes and collaborates remotely, each of our staff has different lobbies as well as different skills but all share a common passion for Hypolia and the happiness of our players</p>
              <p>We are currently a small team that covers all the traditional roles. Art, development, design, management. The three main qualities we look for in candidates are:</p>
            </div>

            <div class="list--quality space-y-2">
              <li class="">Skilled and self-driven.</li>
              <li>Il a l'habitude de faire des trucs cool.</li>
              <li>Puts players first.</li>
            </div>
            <div>
              <p>We strongly recommend that all applicants read the <router-link class="link" to="/">Who We Are</router-link> pages to get a complete picture of who we are, what we do and why. We look forward to receiving your applications and to having you work with us!</p>
            </div>
          </div>
        </div>
        <div class="items--divider relative z-10 max-w-[90%] mx-auto" />
        <div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Navbar from "../../components/navbar/Navbar.vue";
</script>

<style scoped lang="scss">
h1, h2, h3 {
  font-family: 'penumbra-serif-std';
}
.equipe {
  .separator {
    position: relative;
    height: 15px;
    background: #160e11 url("../../assets/section-separator.webp") 50% 50% repeat-x;
    background-size: auto 15px;
    .separator--container {
      background: url("../../assets/bg-slick-dot.png") ;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 100;
      transform: translate(-50%, -50%);
      width: 360px;
      height: 39px;
      bottom: auto;
      display: inline-block !important;
      &::after, &::before {
        content: " ";
        position: absolute;
        display: block;
        width: 18px;
        height: 39px;
        vertical-align: middle;
        top: 0;
      }
      &::before {
        background: url('../../assets/bg-slick-left.png') center center no-repeat transparent;
        left: -18px;
      }
      &::after {
        background: url("../../assets/bg-slick-right.png") center center no-repeat transparent;
        right: -18px;
      }
      h3 {
        font-family: 'penumbra-serif-std';
        text-transform: uppercase;
        font-weight: bold;
        font-size: larger;
      }
    }
  }
  
  .header {
    height: 65vh;
    position: relative;
    background: url("../../assets/Render_1_Jour.png");
    &::after, &::before {
      content: "";
      position: absolute;
    }
    &::before {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background: rgba(0,0,0,0.7);
    }

    .title {
      -webkit-transition: .6s;
      -moz-transition: .6s;
      transition: .6s;
      -webkit-transition-delay: .1s;
      -moz-transition-delay: .1s;
      transition-delay: .1s;
      color: #c4b998;
      font-size: 32px;
      letter-spacing: 7px;
      position: relative;
      text-indent: 8px;
      text-transform: uppercase;
      top: 4px;
    }
    .subtitle {
      -webkit-transition: .6s;
      -moz-transition: .6s;
      transition: .6s;
      -webkit-transition-delay: .1s;
      -moz-transition-delay: .1s;
      transition-delay: .1s;
      font-size: 32px;
      letter-spacing: 7px;
      position: relative;
      text-indent: 8px;
      text-transform: uppercase;
      top: 4px;
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
        background: url("../../assets/decoration--corner.png") no-repeat 0 0;
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
  }

  .body {
    .section--information {
      position: relative;
      background: url("../../assets/Render_1_Jour.png");

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background: rgba(0,0,0,0.8);
      }
      .items--divider {
        margin-top: 120px;
        background: #969285;
        height: 1px;
        width: calc(100% - 14px);
        position: relative;
        &::after, &::before {
          position: absolute;
          content: "";
          width: 5px;
          height: 5px;
          border: 1px solid #969285;
          transform: rotate(45deg);
          top: -2px;
        }
        &::after {
          right: -5px;
        }
        &::before {
          left: -5px;
        }
      }
      .paragraph {
        .list--quality li {
          list-style-type: none;
          position: relative;
          &::before {
            content: "";
            vertical-align: middle;
            display: inline-block;
            margin-right: 0.6em;

            width: 15px;
            height: 15px;
            background: url("../../assets/separator-end-decoration.png") 50% 50% no-repeat;
            background-size: contain;
          }
        }
        .link {
          font-weight: 500;
          color: #c9c990;;
          border-bottom: 1px solid #c9c990;;
        }
      }
    }


  }
}
</style>