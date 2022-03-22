<template>
  <div class="overflow-x-hidden equipe">
    <Navbar />
    <div class="main flex flex-col">
      <div>
        <div class="video">
          <video loop playsInline autoPlay>
            <source src="https://d2vkoy1na2a6o6.cloudfront.net/videos/fsg-bg-wide-1d7a662b187e51758a166d75380b8e7bcb62ce97ddfd50f0eb0aefef32b27f478fbe293ea6cfff31f8b5e6b1ed2b5fbe1c0e0ca48bbf0408ddf6d4bc0172073b.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="header-body w-full h-full flex flex-col">
          <div class="info text-white text-center w-full h-[80vh]">
            <div class="">
              <img class="w-[200px] mx-auto" src="https://cdn.discordapp.com/attachments/883079588522131466/912147668308992060/icon.png" alt="icon hypolia" />
              <h1 class="font-semibold lg:font-extrabold lg:w-3/6 mx-auto">Aidez-nous à inspirer des générations de joueurs</h1>
            </div>

            <div class="">
              <div class="info1 flex flex-col md:flex-row mx-auto w-full justify-center relative">
                <a class="px-4">
                  <div class="PaperBtn">
                    <div class="textButton font-medium shadow-xl px-8 py-5 items-center ">
                      Nos Postes disponibles
                    </div>
                  </div>
                </a>
                <a class="px-4">
                  <div class="PaperBtn">
                    <div class="textButton font-medium shadow-xl px-8 py-5 items-center ">
                      Notre équipe
                    </div>
                  </div>
                </a>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Body />
    </div>
  </div>
</template>

<script setup lang="ts">

import Navbar from "../../components/navbar/Navbar.vue";
import Body from "../../components/equipe/Body.vue";
</script>

<style lang="scss" scoped>

.header-body {
  position: relative;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  min-height: 350px;
}
.main {
  background: url(https://d2vkoy1na2a6o6.cloudfront.net/_next/static/images/homepage_chalk_tile-7e161157dbaaa19b94ba3136d3addc44.jpg);
  margin: 0 auto;
  overflow: hidden;
  min-height: 100%;
  position: relative;
}
.equipe {
  .video video {
    display: block;
    width: auto;
    max-width: inherit;
    height: 100%;
    left: 50%;
    position: relative;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .body {
    background-image: url(https://d2vkoy1na2a6o6.cloudfront.net/images/fireside-gatherings/events/cmsChalkboardBg-d71e280bae3eb4c266e8d57b28e5c5053f7af53d75f87f16bc401df03929711113adf9fc8281b2ffee7ed0c4d240371889d89986e578f5fdca85e71b6e11fc58.jpg);
    background-position: 50%;
    background-size: cover;
    padding-bottom: 5em;
    position: relative;
    .separateur {
      background: url(https://d2vkoy1na2a6o6.cloudfront.net/images/fireside-gatherings/events/cmsWoodFrame-761876bd6d954f4f4bdf032b522c34f889c547a774763487f3e23ca3c690ffd1f477c7265d3e5571a44f40a7aa5114e2d4a4772e6be878b7d0460571e6202d29.png);
      background-repeat: repeat-x;
      height: 89px;
    }
  }
  .info1 {
    .PaperBtn {
      position: relative;
      justify-content: center;
      align-items: center;
      display: flex;
      height: 100%;
      text-align: center;
      color: #725a37;
      width: auto;
      z-index: 0;
    }
    .PaperBtn ::before,
    .PaperBtn ::after {
      content: "";
      position: absolute;
      top: 0;
      z-index: -1;
    }
    .PaperBtn ::before {
      background-image: url(https://d2vkoy1na2a6o6.cloudfront.net/images/fireside-gatherings/events/fsg-events-sprite-1831d557aab6e1a4b1b5846607539c441364455a4eb5f1c18ebcf1cd2d35d548f023a6ffc34bbe64517bc1ca179660a28c60add462eff8e4474447a28ff0d7c6.png);
      background-position: -182px -80px;
      height: 75px;
      width: calc(100% - 31px);
      left: 0;
    }
    .PaperBtn ::after {
      top: 0;
      content: "";
      background-image: url(https://d2vkoy1na2a6o6.cloudfront.net/images/fireside-gatherings/events/fsg-events-sprite-1831d557aab6e1a4b1b5846607539c441364455a4eb5f1c18ebcf1cd2d35d548f023a6ffc34bbe64517bc1ca179660a28c60add462eff8e4474447a28ff0d7c6.png);
      right: 0px;
      background-position: -77px -310px;
      width: 31px;
      height: 75px;
      background-size: 716px 388px;
    }
    .textButton {
      position: relative;
      top: 0;
      z-index: 10;
      font-family: Bliz Quadrata, Hiragino Kaku Gothic Pro, Hiragino Kaku Gothic ProN W3, Osaka, メイリオ, Meiryo, ＭＳ\ Ｐゴシック, Siara, Times New Roman, Serif;
      font-size: 1.25em;
      white-space: nowrap;
    }
  }
}
</style>