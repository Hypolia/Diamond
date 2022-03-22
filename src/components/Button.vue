<template>
  <div class="template--button">
    <button class="button button--gradient button--small after:bg-gradient-to-b"
    :class="`${afterFrom} ${afterTo} ${paddingX} ${paddingY}`"
    >
      <span class="text">{{ props.text }}</span>
      <span
          class="highlight before:bg-gradient-to-b"
          :class="`${beforeFrom} ${beforeVia} ${beforeTo}`"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

enum Colors {
  GREEN,
  BLUE,
  YELLOW
}

type Props = {
  color: Colors,
  text: string
  size: number
}
const props = defineProps<Props>()
const paddingX = computed(() => {
  switch (props.size) {
    case 1:
      return `px-[24px]`
    case 2:
      return `px-[16px]`
  }

})

const paddingY = computed(() => {
  switch (props.size) {
    case 1:
      return `py-[10px]`
    case 2:
      return `py-[20px]`
  }
})

const afterFrom = computed(() => {
  switch (props.color) {
    case Colors.BLUE:
      return `after:from-[#218dcc]`
    case Colors.GREEN:
      return `after:from-[#32c76b]`
    case Colors.YELLOW:
      return `after:from-[#f3ff4a]`
  }
})
const afterTo = computed(() => {
  switch (props.color) {
    case Colors.BLUE:
      return `after:to-[#064b74]`
    case Colors.GREEN:
      return `after:to-[#0eb34d]`
    case Colors.YELLOW:
      return `after:to-[#899205]`
  }
})

const beforeFrom = computed(() => {
  switch (props.color) {
    case Colors.BLUE:
      return `before:from-[#08476b]`
    case Colors.GREEN:
      return `before:from-[#038a37]`
    case Colors.YELLOW:
      return `before:from-[#a2ac15]`
  }
})
const beforeVia = computed(() => {
  switch (props.color) {
    case Colors.BLUE:
      return `before:via-[#116799]`
    case Colors.GREEN:
      return `before:via-[#0eb34d]`
    case Colors.YELLOW:
      return `before:via-[#c9d42c]`
  }
})
const beforeTo = computed(() => {
  switch (props.color) {
    case Colors.BLUE:
      return `before:to-[#08476b]`
    case Colors.GREEN:
      return `before:to-[#038a37]`
    case Colors.YELLOW:
      return `before:to-[#a2ac15]`
  }
})
</script>

<style scoped lang="scss">
.template--button {
  button {
    color: #fff;
    text-transform: uppercase;
    font-family: Belwe Bold, Georgia, Times, Times New Roman, serif;
    font-weight: 700;
    letter-spacing: 2px;
    //padding: 10px 20px;
    border: none;
    border-radius: 5px;
    //box-shadow: 0 1px 10px 0 rgb(0 0 0 / 35%);
    text-shadow: 0 0 8px #000;
    font-size: 1em;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 10;
  }
  .highlight,
  .highlight2 {
    opacity: 1;
    -webkit-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
    position: absolute;
    top: 9px;
    left: 9px;
    right: 9px;
    bottom: 9px;
    box-shadow: none;
    -webkit-font-smoothing: antialiased;
  }

  .highlight,
  .highlight2,
  .button--gradient::after {
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
  }

  .button--small::after {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
  }

  .button--small::before {
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
  }

  .button--gradient {
    background-image: -webkit-linear-gradient(top, #ededed, #573b23);
    background-image: linear-gradient( 180deg, #ededed, #573b23);
    border-radius: 6px;
    letter-spacing: .85px;
  }
  .button--gradient::before,
  .button--gradient::after {
    content: "";
    position: absolute;
    z-index: -1;
  }
  .button--gradient::before {
    background-color: #7e5f58;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border-radius: 6px;
  }
  .button--gradient .text {
    position: relative;
    z-index: 1;
    -webkit-font-smoothing: antialiased;
  }
  .button--gradient .highlight,
  .button--gradient::after {
    padding: 2px 3px;
    border-radius: 6px;
    border: none;
  }
  .button--gradient .highlight::before {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    border-radius: 6px;
  }
}
</style>