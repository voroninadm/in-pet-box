<script setup>
import {isHoldingDateExpired} from "@/common/helpers";
import {router} from "@inertiajs/vue3";

defineProps({
    cell: {
        type: Object || null,
        required: false
    }
})

const editBox = (id) => {
    router.visit(`/box/edit/${id}`);
}
const createBox = (id) => {
    router.visit(`/box/create/${id}`);
}
</script>

<template>
    <div v-if="cell.box"
        class="box"
         tabindex="0"
        :class="[isHoldingDateExpired(cell.box.created_at) ? 'box-forgotten' : 'box-ok']"
         @click="editBox(cell.box.id)"
    ></div>
    <div v-else
         class="box box-to-create"
         tabindex="0"
         @click="createBox(cell.id)"
         @keydown.enter="createBox(cell.id)"></div>
</template>


<style lang="scss" scoped>
.box {
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
        filter: drop-shadow(2px 2px 3px);
    }

    &-forgotten {
        background-image: url("@assets/img/box-forgotten.webp");
        filter: drop-shadow(2px 2px 3px);
    }

    &-to-create {
        background-image: url("@assets/img/box-ok.webp");
        opacity: 0.5;
        filter:  blur(1px) saturate(70%) grayscale(40%) drop-shadow(2px 2px 3px);

        &:hover {
            filter: blur(0px) saturate(80%) grayscale(10%) opacity(0.7) drop-shadow(2px 2px 3px);
        }

        &:focus {
            filter: blur(0px) saturate(80%) grayscale(10%) opacity(0.7) drop-shadow(2px 2px 3px);
        }
    }
}
</style>
