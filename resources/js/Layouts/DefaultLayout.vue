<script setup>
import HeaderNav from '@/components/modules/HeaderNav.vue';
</script>

<template>
    <div class="app_layout">
        <header-nav />
        <main>
            <slot />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.app_layout {
    height: 100vh;
    overflow: hidden;
}
</style>
