<script setup>
import {isHoldingDateExpired} from "@/common/helpers";
import {router} from "@inertiajs/vue3";

defineProps({
    cell: {
        type: Object || null,
        required: false
    }
})

const editCard = (id) => {
    router.visit(`/box/edit/${id}`);
}
const createBox = (id) => {
    router.visit(`/box/create/${id}`);
}
</script>

<template>
    <div v-if="cell.box"
        class="box"
        :class="[isHoldingDateExpired(cell.box.created_at) ? 'box-forgotten' : 'box-ok']"
         @click="editCard(cell.box.id)"
    ></div>
    <div v-else
         class="box box-to-create"
         @click="createBox(cell.id)"></div>
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
    }

    &-forgotten {
        background-image: url("@assets/img/box-forgotten.webp");
    }

    &-to-create {
        background-image: url("@assets/img/box-to-create.webp");
    }
}
</style>
