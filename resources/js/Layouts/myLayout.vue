<template>
    <div class="app_layout">
        <default-header @openLoginModal="isLoginOpen = !isLoginOpen" />
        <slot />
    </div>
    <login-modal
        v-if="isLoginOpen"
        @close-login-modal="isLoginOpen = !isLoginOpen"
    />
</template>

<script setup>
import { ref } from "vue";
import DefaultHeader from "@/components/header/DefaultHeader.vue";
import LoginModal from "@/components/modules/LoginModal.vue";

let isLoginOpen = ref(false);
</script>

<style scoped>
.app_layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    /* overflow: hidden; */
}

.content {
    display: flex;
    flex-grow: 1;
}
</style>
