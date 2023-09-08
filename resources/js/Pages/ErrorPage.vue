<script setup>
import PrimaryButton from "@/components/PrimaryButton.vue";
import {router} from "@inertiajs/vue3";
</script>

<template>
            <section class="flex flex-col mx-auto product w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 border drop-shadow-xl p-3 bg-slate-50 font-sans"
            >
                <div class="no_place_image"></div>
               <p class="text-center text-lg">Упс!..</p>
               <p class="text-center text-sm mt-4">Что-то пошло не так...</p>
                <div class="flex justify-center mt-5">
                <PrimaryButton @click="router.visit('/main')">Ок, вернемся на главную</PrimaryButton>
                </div>
            </section>
</template>

<style>
.no_place_image {
    width: 200px;
    height: 200px;
    background: url("@assets/img/box-error.webp") 50% 50% no-repeat;
    background-size: contain;
    margin: auto;
}
</style>
