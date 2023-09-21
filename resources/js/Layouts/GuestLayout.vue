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
    background-image: radial-gradient(circle, rgba(187, 115, 22, 0.5) 10%, rgba(7, 74, 123, 0.7) 67%);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
