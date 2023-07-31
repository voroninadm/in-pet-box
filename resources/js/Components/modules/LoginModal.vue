<template>
  <transition appear enter-active-class="animate__animated animate__fadeIn">
    <div>
      <section
        class="z-10 w-full h-full bg-gray-500/60 fixed top-0 left-0"
        @click="$emit('close-login-modal')"
      ></section>
      <div class="absolute inset-0">
        <div class="flex h-full">
          <div class="z-20 w-1/5 m-auto bg-white border rounded-lg p-2">
            <div>
              <form class="flex flex-col" @submit.prevent="submit">
                <div class="flex flex-col gap-2 my-2">
                  <div
                    class="login_img"
                    :class="`login_img__${getImgNumber(
                      minBoxImage,
                      maxBoxImage
                    )}`"
                  />
                  <label class="flex justify-between">
                    Логин
                    <input
                      type="text"
                      name="login"
                      class="border rounded-lg bg-gray-200/50 drop-shadow"
                    />
                  </label>
                  <label class="flex justify-between">
                    Пароль
                    <input
                      type="password"
                      name="password"
                      class="border rounded-lg bg-gray-200/50 drop-shadow"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  class="border drop-shadow w-6/12 m-auto px-2 py-1 hover:bg-gray-200"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { minBoxImage, maxBoxImage } from "@/common/constants.js";

defineEmits(["close-login-modal"]);

const getImgNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
</script>

<style lang="scss" scoped>
.login_img {
  width: 250px;
  height: 200px;
  margin: auto;

  &__1 {
    background: url("/img/box-1.webp") 50% 50% no-repeat;
    background-size: contain;
  }

  &__2 {
    background: url("/img/box-2.webp") 50% 50% no-repeat;
    background-size: contain;
  }

  &__3 {
    background: url("/img/box-3.webp") 50% 50% no-repeat;
    background-size: contain;
  }

  &__4 {
    background: url("/img/box-4.webp") 50% 50% no-repeat;
    background-size: contain;
  }
}
</style>
