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
