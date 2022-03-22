<template>
<!--  <div class="absolute top-0 border lef-0 w-full -translate-x-2 h-full text-white">-->
<!--    test-->
<!--  </div>-->
  <div class="border"></div>
  <div class="box">
    <div class="text-white">
      <h2 class="text-white">test</h2>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
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
  -webkit-border-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt47cbe0118299f668/5f1ef3b8bb238f5556376422/homepage-frame-grid.png) 27 27 31 fill stretch;
  border-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt47cbe0118299f668/5f1ef3b8bb238f5556376422/homepage-frame-grid.png) 27 27 31 fill / 1 / 0 stretch;
}
.box {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  overflow: hidden;
  background-size: cover;
  background: rgb(0, 0, 0);
}
.box ::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(14, 14, 14, 0.4);
}

</style>