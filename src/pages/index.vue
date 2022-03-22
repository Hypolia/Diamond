<template>
  <div class="overflow-x-hidden">
    <Navbar class="z-20" />
    <div>
      <header class="header flex flex-col w-full">
        <div class="flex flex-col lg:space-y-24 pt-36 z-10 relative">
          <!-- Logo -->
          <div class="w-4/6 lg:w-2/6 mx-auto">
            <img class="" src="../assets/logo_texte.png" alt="logo" />
          </div>
          <div class="flex flex-col space-y-4">
            <div class="mx-auto">
              <h1 class="title text-center">a universe that will make you dream</h1>
            </div>
            <div class="button--container hidden md:flex">
              <div class="box--button">
                <Button class="button" :color="Colors.BLUE" :size="1" text="join the adventure"/>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:grid md:grid-cols-2 items-center lg:max-w-7xl mx-auto z-10 text-gray-100 justify-between mt-24 space-y-8">
          <div class="flex flex-col space-y-6 lg:space-y-16">
            <div class="flex flex-col text-center lg:text-left">
              <h2 class="title--info">what is hypolia ?</h2>
              <div class="space-y-2 text-gray-200 description--header mx-4 lg:mx-0">
                <p>Embark on a journey of adventure and creativity! Hypolia combines the sandbox aspect that minecraft offers coupled with the addition of mechanics, the exploitation to its maximum of the land that has. Moreover we are constantly looking for the perfect look that we try to offer to our community.</p>
                <p>Enjoy a new way to play your favorite game.</p>
              </div>

            </div>

            <Button class="mx-auto lg:mx-0" :color="Colors.GREEN" :size="1" text="read more" />
          </div>
          <div class="render w-11/12 md:ml-12 object-cover">
            <span class="render--border--top">
              <span class="render--border--bottom">

              </span>
            </span>
          </div>
        </div>
      </header>
    </div>
    <div class="separator">
      <div class="separator--container">
          <h3 class="absolute top-0 text-white mx-auto w-full text-center h-full items-center justify-center flex">exploration and adventure</h3>
      </div>
    </div>
    <div class="body--index">
      <div class="part--one">
        <div class="section--panel--decoration">
          <div class="decoration--left z-20">
            <span />
          </div>
          <div class="decoration--right z-20">
            <span />
          </div>
        </div>
        <div class="max-w-[80%] mx-auto flex flex-row z-10 relative items-center justify-between pt-8 h-full">
          <div class="hidden lg:block w-2/6">
            <img src="../assets/NicePng_floating-island-png_1561924.png">
          </div>
          <div class=" relative lg:w-1/2  space-y-8 text-gray-200">
            <h3 class="title  w-2/3">the new skyblock</h3>
            <div class="description w-2/3 space-y-4">
              <p class="">
                Discover our first game, the Hypolia skyblock called "Arkhane". After long hours of work, and experience in this game mode, we managed to review the very functioning of the Skyblock. By putting forward a free side on the guideline you can take during your adventure. By adding a more advanced synergy of each of our mechanics, and a LevelDesign thought to make the immersion more realistic with a real interest of exploration !
              </p>
              <p>
                We don't limit our gameplay to a banal objective of linear evolution. We exploit to the maximum the resources available on Minecraft in order to guarantee a pleasure to all types of players, be it PvE, adventure, farm and so on. Let your creativity take over!
              </p>
            </div>

          </div>
        </div>

      </div>
      <div class="part--two">

      </div>
      <div class="last--part h-[1000px]">
        <div class="section--panel--decoration">
          <div class="decoration--left z-20">
            <span />
          </div>
          <div class="decoration--right z-20">
            <span />
          </div>
        </div>
        <div class="flex flex-col h-full pt-12">
          <h2 class="title mx-auto flex flex-row items-center  w-2/3">
            <span class="border--text" />
            <span class="text relative px-28">blog</span>
            <span class="border--text" />
          </h2>
          <div class="grid grid-cols-2 h-full w-full  max-w-[85%] max-h-[80%] mx-auto pt-16">
            <div class="h-full">
              <div class="grid grid-cols-2 h-1/2">
                <div class="flex box--news flex-col">
                  <div class="box--header">
                  </div>
                  <div class="h-1/5 box--bottom text-center z-10 relative items-center flex justify-center flex-col">
                    <h3>lorem ipsum</h3>
                    <p>je ne sais pas quoi mettre</p>
                  </div>
                </div>
                <div class="flex box--news flex-col ">
                  <div class="box--header">
                  </div>
                  <div class="h-1/5 box--bottom text-center z-10 relative items-center flex justify-center flex-col">
                    <h3>lorem ipsum</h3>
                    <p>je ne sais pas quoi mettre</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 h-1/2">
                <div class="flex box--news flex-col ">
                  <div class="box--header">
                  </div>
                  <div class="h-1/5 box--bottom text-center z-10 relative items-center flex justify-center flex-col">
                    <h3>lorem ipsum</h3>
                    <p>je ne sais pas quoi mettre</p>
                  </div>
                </div>
                <div class="flex box--news flex-col ">
                  <div class="box--header">
                  </div>
                  <div class="h-1/5 box--bottom text-center z-10 relative items-center flex justify-center flex-col">
                    <h3>lorem ipsum</h3>
                    <p>je ne sais pas quoi mettre</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex box--news flex-col ">
              <div class="box--header">
              </div>
              <div class="h-1/5 box--bottom text-center z-10 relative items-center flex justify-center flex-col">
                <h3>lorem ipsum</h3>
                <p>je ne sais pas quoi mettre</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '../components/navbar/Navbar.vue'
import Button from '../components/Button.vue'
import { Colors } from "../provider/ColorButton";


</script>

<style scoped lang="scss">
.box--news {
  @apply border border-gray-700 m-2 shadow-xl;
  .box--header {
    background-image: url("../assets/Render_1_Jour.png");
    opacity: 1;
    position: relative;
    height: 100%;
    width: 100%;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .box--bottom {
    background-color: #101217;
    border-top: 1px solid #7e633b;
    h3 {
      font-weight: 700;
      font-size: 12px;
      color: #937341!important;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    p {
      font-weight: 500;
      font-family: Beaufort for LOL,Arial,serif;
      font-size: 14px;
      color: #c4b998;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
}



h1, h2, h3 {
  font-family: 'penumbra-serif-std';
}
p {
  color: rgba(182, 205, 220, 0.9);
  text-shadow: 0 0 5px #000;
}

.last--part {
  position: relative;
  border-top: 6px solid #0f1428;
  background: url("../assets/Render_1_Jour.png");
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid #454514;
    background: linear-gradient(71deg, rgba(3,3,3,0.95) 0%, rgba(27,27,27,0.90) 100%);
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

    .text {
      &::before, &::after {
        top: 16px;
        content: "";
        position: absolute;
        display: block;
        width: 15px;
        height: 15px;
        background: url("../assets/separator-end-decoration.png") 50% 50% no-repeat;
        background-size: contain;
      }
      &::before {
        left: 0;
        transform: rotate(180deg);
      }
      &::after {
        right: 0;
      }
    }
    .border--text {
      width: 400px;
      height: 1px;
      background: #7d631e;
    }
  }
  .border--title {
    &::before {
      content: "";
      //position: absolute;
      width: 100px;
      height: 1px;
      background: #7d631e;
    }
  }
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
    background: url("../assets/decoration--corner.png") no-repeat 0 0;
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
.part--one {
  position: relative;
  height: 700px;
  z-index: 10;
  border-bottom: 1px solid #454514;
  background: url("../assets/Render_1_Jour.png");
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: linear-gradient(71deg, rgba(3,3,3,0.9374343487394958) 0%, rgba(27,27,27,0.8225884103641457) 100%);
  }

  .title {
    position: relative;
    text-transform: uppercase;
    font-weight: revert;
    background: linear-gradient(#ffd679, #ecb54f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0 0 .5em 0;
    //margin: 0 1em .5em 1em;
    font-size: 1.8em;
    border-bottom: 1px solid #7d631e;
    &::after, &::before {
      content: "";
      position: absolute;
      display: block;
      width: 15px;
      height: 15px;
      background: url("../assets/separator-end-decoration.png") 50% 50% no-repeat;
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
.separator--container {
  background: url("../assets/bg-slick-dot.png") ;
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
    background: url('../assets/bg-slick-left.png') center center no-repeat transparent;
    left: -18px;
  }
  &::after {
    background: url("../assets/bg-slick-right.png") center center no-repeat transparent;
    right: -18px;
  }
  h3 {
    font-family: 'penumbra-serif-std';
    text-transform: uppercase;
    font-weight: bold;
    font-size: larger;
  }
}
.separator {
  position: relative;
  height: 15px;
  background: #160e11 url("../assets/section-separator.webp") 50% 50% repeat-x;
  background-size: auto 15px;

}
.body--index {
  border-top: 1px solid #454514;
}
.header {
  background-image: url("../assets/background-arcane.jpeg") ;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 120vh;
  border-bottom: 1px solid #423b2b;
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) , rgba(0,0,0,0.7) 100%);
  }
  .title {
    background: linear-gradient(#f5fbff, #bfe6ff);
    -webkit-background-clip: text;
    text-transform: uppercase;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    font-family: 'penumbra-serif-std',serif;
    font-size: 3em;
    @media (max-width: 1024px) {
      & {
        font-size: 2.5em;
      }
    }
    @media (max-width: 425px) {
      & {
        font-size: 2em;
      }
    }
    &::before {
      content: attr(data-text);
      z-index: -1;
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      background: none;
      transform: translateX(-50%);
      text-shadow: 0 3px 5px rgb(0 0 0 / 40%);
    }
  }
  .button--container {
    position: relative;
    height: 80px;
    background: url("../assets/cta-container.webp") 50% 50% no-repeat;
    background-size: auto 100%;
    .box--button {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: auto;
      transform: translate(-50%, -50%);
      .button {
        padding: 10px;
      }
      .button--small {
        padding: 15px;
      }
    }

  }
  .title--info {
    background: linear-gradient(#ffe98d, #e19f27);
    -webkit-background-clip: text;
    text-transform: uppercase;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    font-family: 'penumbra-serif-std';
    font-size: 1.8em;
    padding-bottom: 10px;
    &::before {
      content: attr(data-text);
      z-index: -1;
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      background: none;
      transform: translateX(-50%);
      text-shadow: 0 3px 5px rgb(0 0 0 / 40%);
    }
  }

  .render  {
    display: inline-block;
    position: relative;
    max-width: 100%;
    padding-bottom: 56.25%;
    margin-bottom: -0.4em;
    background-size: cover;
    background-image: url("../assets/map.gif");
    box-shadow: inset 0 0 0 2px rgb(175 203 218 / 70%), 0 0 16px rgb(0 0 0 / 10%);
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .render--border--top {
      z-index: 10;
      position: absolute;
      top: 7px;
      right: 7px;
      bottom: 7px;
      left: 7px;
      border: 2px solid rgba(179, 193, 203, 0.3);
      &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        display: block;
        width: 6px;
        height: 6px;
        background: rgba(179, 193, 203, 0.3);
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }

      .render--border--bottom {
        &::after, &::before {
          content: "";
          display: block;
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(179, 193, 203, 0.3);
          bottom: 0;
        }
        &::after {
          left: 0;
        }
        &::before {
          right: 0;
        }
      }
    }
  }
  .description--header {
    font-family: "Noto Sans", sans-serif;
  }
}
</style>