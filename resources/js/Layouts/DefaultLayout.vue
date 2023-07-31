<script setup>
import HeaderNav from '@/Components/Header/HeaderNav.vue';
</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <header-nav />
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
