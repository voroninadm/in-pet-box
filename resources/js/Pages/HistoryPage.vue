<script setup>
import {currentDate, normalizeData} from "@/common/helpers.js";
import HistoryPagination from "@/components/modules/HistoryPagination.vue"
import {ref} from "vue";
import {Link, useForm} from "@inertiajs/vue3";
import {Head} from '@inertiajs/vue3';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const totalDaysHolding = import.meta.env.VITE_PAGINATION_COUNT;
const props = defineProps({
    boxes: {
        type: Object,
        required: true,
    },
});

const filter = ref('week');

const date = ref();
const form = useForm({
    start_date: null,
    finish_date: null
});
const submit = (modelData) => {
    date.value = modelData;
    form.start_date = date.value[0];
    form.finish_date = date.value[1];
    form.post(route('history.filter'));
}
</script>

<template>
    <Head title="История"/>

    <div class="grid grid-cols-2 sm:flex items-center mx-20 gap-6 mt-3">
        <Link :href="route('history', { period: 'week' })"
              class="history-link"
              :class="{ 'history-link__active': route().current('history', { period: 'week' }) }">Неделя</Link>
        <Link :href="route('history', { period: '2weeks' })"
              class="history-link"
              :class="{ 'history-link__active': route().current('history', { period: '2weeks' }) }">2 недели</Link>
        <Link :href="route('history', { period: 'month' })"
              class="history-link"
              :class="{ 'history-link__active': route().current('history', { period: 'month' }) }">Месяц</Link>
        <Link :href="route('history', { period: 'all' })"
              class="history-link"
              :class="{ 'history-link__active': route().current('history', { period: 'all' }) }">Все</Link>

        <div class="grid-cols-2 w-52 sm:w-96">
            <VueDatePicker locale="ru" :format="'dd.MM.yyyy HH:mm'" range auto-apply
                           placeholder="Выберите даты" :model-value="date" @update:model-value="submit"
                           input-class-name="dp-custom-input" calendar-cell-class-name="dp-custom-cell">
            </VueDatePicker>
        </div>
    </div>

    <table v-if="boxes.data.length" class="mt-5 mx-auto mx-4 md:mx-6 lg:mx-8 xl:mx-12">
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
    <div v-else class="flex mx-auto mt-10 text-lg text-center p-2 italic outline-dotted outline-3 outline-offset-8 outline-slate-300 rounded-lg">
        <p >По текущему запросу записи отсутствуют или потерялись на складе...</p>
    </div>

    <history-pagination v-if="boxes.total > totalDaysHolding" :boxes="props.boxes" class="mt-6" />

</template>

<style lang="scss">
.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    ms-user-select: none;
    user-select: none;
}

.history-link {
    padding: 5px 10px;
    max-width: 250px;
    border-radius: 15px;
    text-align: center;
    background-color: rgba(157, 164, 176, 0.3);
    transition: 0.3s;

    &:hover {
        background-color: rgba(237, 128, 67, 0.2);
    }
}

.history-link__active {
    background-color: rgba(237, 128, 67, 0.7);

    &:hover {
        background-color: rgba(237, 128, 67, 0.7);
    }
}

.dp-custom-input{
    &:focus {
        border-color: rgba(237, 128, 67, 0.7);
        --tw-ring-color: rgba(237, 128, 67, 0.7);
    }
}

.dp__theme_light {
    --dp-primary-color: rgba(237, 128, 67, 0.7);
    --dp-primary-text-color: black;
    --dp-hover-color: #ffeeee;
    --tw-ring-color: rgba(237, 128, 67, 0.7);
}
</style>
