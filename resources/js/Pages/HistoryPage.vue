<script setup>
import {normalizeData} from "@/common/helpers.js";

const props = defineProps({
    boxes: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <table class="mt-5 mx-auto mx-4 md:mx-6 lg:mx-8 xl:mx-12">
        <thead>
        <tr>
            <th class="md:w-1/12 p-2">Ячейка</th>
            <th class="md:w-2/12 p-2">Накладная</th>
            <th class="hidden md:table-cell md:w-3/12 p-2">Заказчик</th>
            <th class="hidden xl:table-cell md:w-5/12 p-2">Продукт</th>
            <th class="md:w-1/12 p-2">Принят</th>
            <th class="md:w-1/12 p-2">Удален</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="box in boxes"
            :key="box.id">
            <td class="text-center border noselect">{{ box.cell_id }}</td>
            <td class="text-center border noselect">{{ box.invoice }}</td>
            <td class="hidden md:table-cell text-center border noselect">{{ box.customer }}</td>
            <td class="hidden xl:table-cell text-center border noselect">{{ box.product }}</td>
            <td class="text-center border noselect">{{ normalizeData(box.created_at) }}</td>
            <td class="text-center border noselect">{{ box.deleted_at ? normalizeData(box.deleted_at) : '' }}</td>
            <td></td>

        </tr>
        </tbody>
    </table>
</template>

<style scoped>
.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    ms-user-select: none;
    user-select: none;
}
</style>
