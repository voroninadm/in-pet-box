<template>
  <div class="shelves">
<!--    <div-->
<!--      v-for="box in boxes"-->
<!--      :key="box.id"-->
<!--      tabindex="0"-->
<!--      class="box"-->
<!--      :class="[-->
<!--        `box-${box.cell}`,-->
<!--        isHoldingDateExpired(box.date_add) ? 'box-forgotten' : 'box-ok',-->
<!--      ]"-->
<!--      @click="$emit('clickToBox', box.id)"-->
<!--      @keyup.enter="$emit('clickToBox', box.id)"-->
<!--    />-->
  </div>
</template>

<script setup>
import { isHoldingDateExpired } from "@/common/helpers";

// defineProps({
//   boxes: {
//     type: Array,
//     required: true,
//   },
// });

defineEmits(["clickToBox"]);
</script>

<style lang="scss" scoped>
.shelves {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("@assets/img/shelves.webp") 50% 50% no-repeat;
  background-size: cover;
}

.box {
  position: absolute;
  width: 110px;
  height: 90px;
  transition: 0.3s;

  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    scale: 1.1;
    opacity: 0.85;
  }

  &:focus {
    outline: none;
    scale: 1.1;
    opacity: 0.85;
  }
}

.box-ok {
  background-image: url("@assets/img/box-ok.webp");
}

.box-forgotten {
  background-image: url("@assets/img/box-forgotten.webp");
}

/* First shelf */
.box-1 {
  top: 165px;
  left: 235px;
}

.box-2 {
  top: 165px;
  left: 420px;
}

.box-3 {
  top: 287px;
  left: 235px;
}

.box-4 {
  top: 287px;
  left: 420px;
}

.box-5 {
  top: 410px;
  left: 235px;
}

.box-6 {
  top: 410px;
  left: 420px;
}

.box-7 {
  top: 530px;
  left: 235px;
}

.box-8 {
  top: 530px;
  left: 420px;
}

/* Second Shelf */

.box-9 {
  top: 165px;
  left: 730px;
}

.box-10 {
  top: 165px;
  left: 915px;
}

.box-11 {
  top: 287px;
  left: 730px;
}

.box-12 {
  top: 287px;
  left: 915px;
}

.box-13 {
  top: 410px;
  left: 730px;
}

.box-14 {
  top: 410px;
  left: 915px;
}

.box-15 {
  top: 530px;
  left: 730px;
}

.box-16 {
  top: 530px;
  left: 915px;
}

/* Third Shelf */

.box-17 {
  top: 165px;
  left: 1210px;
}

.box-18 {
  top: 165px;
  left: 1385px;
}

.box-19 {
  top: 287px;
  left: 1210px;
}

.box-20 {
  top: 287px;
  left: 1385px;
}

.box-21 {
  top: 410px;
  left: 1210px;
}

.box-22 {
  top: 410px;
  left: 1385px;
}

.box-23 {
  top: 530px;
  left: 1210px;
}

.box-24 {
  top: 530px;
  left: 1385px;
}
</style>
