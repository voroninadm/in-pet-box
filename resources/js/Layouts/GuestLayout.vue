<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-4 sm:pt-0 bg-gray-100 shelves">
        <slot/>
    </div>
</template>

<style scoped>
.shelves {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: radial-gradient(circle, rgba(2, 0, 36, 0.6161247702205883) 0%, rgba(59, 61, 61, 0.6133236497724089) 67%), url("@assets/img/shelves.webp");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
