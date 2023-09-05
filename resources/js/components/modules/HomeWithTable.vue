<script setup>

import BoxStateRow from '@/components/BoxStateRow.vue';

defineProps({
    cells: {
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
        <th class="md:w-1/12 p-2">Принят на хранение</th>
      </tr>
    </thead>
    <tbody>
    <box-state-row v-for="cell in cells"
                    :key="cell.id" :cell="cell"
                    :class="`cell-${cell.box}`" />
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
