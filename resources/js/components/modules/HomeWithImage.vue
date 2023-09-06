<script setup>
import BoxStateImage from "@/components/BoxStateImage.vue";

defineProps({
    cells: {
        type: Array,
        required: true,
    },
});

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 relative">

        <div class="grid grid-cols-2 gap-y-7 justify-items-center w-full mt-5 md:mt-5 relative pb-8 pt-2">
            <box-state-image v-for="cell in cells.slice(0,8)"
                       :key="cell.id" :cell="cell"
            :class="`cell-${cell.box}`"/>
            <img class="shelf shelf-1">
            <img class="shelf shelf-2">
            <img class="shelf shelf-3">
            <img class="shelf shelf-4">
        </div>

        <div class="grid grid-cols-2 gap-y-7 justify-items-center w-full mt-14 md:mt-5 relative pb-8 pt-2">
            <box-state-image v-for="cell in cells.slice(8,16)"
                             :key="cell.id" :cell="cell"
                             :class="`cell-${cell.box}`"/>
            <img class="shelf shelf-5">
            <img class="shelf shelf-6">
            <img class="shelf shelf-7">
            <img class="shelf shelf-8">
        </div>

        <div class="grid grid-cols-2 gap-y-7 justify-items-center w-full mt-14 md:mt-5 relative pb-8 pt-2">
            <box-state-image v-for="cell in cells.slice(16,24)"
                             :key="cell.id" :cell="cell"
                             :class="`cell-${cell.box}`"/>
            <img class="shelf shelf-9">
            <img class="shelf shelf-10">
            <img class="shelf shelf-11">
            <img class="shelf shelf-12">
        </div>
    </div>
</template>


<style lang="scss" scoped>
.shelf {
    z-index: 1;
    padding: 0 10px;
    position: absolute;
    content: url("@assets/img/shelff.webp");

    &-1, &-5, &-9 {
        top: 80px;
    }

    &-2, &-6, &-10 {
        top: 210px;
    }

    &-3, &-7, &-11 {
        top: 340px;
    }

    &-4, &-8, &-12{
        top: 465px;
    }
}

.box {
    z-index: 5;
    width: 100px;
    height: 100px;
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

    &-ok {
        background-image: url("@assets/img/box-ok.webp");
    }

    &-forgotten {
        background-image: url("@assets/img/box-forgotten.webp");
    }
}
</style>
