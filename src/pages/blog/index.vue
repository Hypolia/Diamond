<template>
  <div class="overflow-x-hidden blog">
    <Navbar />
    <div>
      <!-- HEADER -->
      <div class="header relative bg-red-500">
        <img class="background--header bg-emerald-500 object-cover" src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt686035e751b05708/61d8fb621757dc6aed2adafc/SS22_TheCall_thumbnail_v2.jpg" alt="background header" />
        <div class="">

        </div>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../../components/navbar/Navbar.vue";
</script>

<style lang="scss">
.blog {
  .header {
    height: 80vh;
    .background--header {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .background--header::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0a3a57;
    }
  }
}
</style>