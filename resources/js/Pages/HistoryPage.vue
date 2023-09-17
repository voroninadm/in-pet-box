<script setup>
import {normalizeData} from "@/common/helpers.js";
import HistoryPagination from "@/components/modules/HistoryPagination.vue"
import {ref} from "vue";
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    boxes: {
        type: Array,
        required: true,
    },
});

const filter = ref('week');

</script>

<template>
    <div class="grid grid-cols-2 sm:flex sm:w-full mx-20 gap-6 mt-3">
        <Link :href="route('history', { period: 'week' })"
              class="link"
              :class="{ 'active': route().current('history', { period: 'week' }) }">Неделя</Link>
        <Link :href="route('history', { period: '2weeks' })"
              class="link"
              :class="{ 'active': route().current('history', { period: '2weeks' }) }">2 недели</Link>
        <Link :href="route('history', { period: 'month' })"
              class="link"
              :class="{ 'active': route().current('history', { period: 'month' }) }">Месяц</Link>
        <Link :href="route('history', { period: '3months' })"
              class="link"
              :class="{ 'active': route().current('history', { period: '3months' }) }">3 месяца</Link>
        <Link :href="route('history', { period: 'all' })"
              class="link col-span-2"
              :class="{ 'active': route().current('history', { period: 'all' }) }">Все</Link>
    </div>
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
        <tr v-for="box in boxes.data"
            :key="box.id">
            <td class="text-center border noselect">{{ box.cell_id }}</td>
            <td class="text-center border noselect">{{ box.invoice }}</td>
            <td class="hidden md:table-cell text-center border noselect">{{ box.customer }}</td>
            <td class="hidden xl:table-cell text-center border noselect">{{ box.product }}</td>
            <td class="text-center border noselect">{{ normalizeData(box.created_at) }}</td>
            <td class="text-center border noselect">{{ box.deleted_at ? normalizeData(box.deleted_at) : '' }}</td>

        </tr>
        </tbody>
    </table>

    <history-pagination :boxes="props.boxes" />

</template>

<style lang="scss" scoped>
.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    ms-user-select: none;
    user-select: none;
}

.link {
    padding: 0 10px;
    border-radius: 15px;
    text-align: center;
    background-color: rgba(157, 164, 176, 0.3);
    transition: 0.3s;

    &:hover {
        background-color: rgba(237, 128, 67, 0.2);
    }
}

.active {
    background-color: rgba(237, 128, 67, 0.7);

    &:hover {
        background-color: rgba(237, 128, 67, 0.7);
    }
}
</style>
