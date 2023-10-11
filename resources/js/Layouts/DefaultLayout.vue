<script setup>
import HeaderNav from '@/components/modules/HeaderNav.vue';
</script>

<template>
    <div class="page">
        <header-nav/>
        <slot/>
    </div>
</template>

<style>
.page {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>
