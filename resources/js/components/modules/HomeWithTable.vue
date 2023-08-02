<template>
  <table class="w-8/12 mt-5">
    <thead>
      <tr>
        <th class="w-1/12 p-2">Ячейка</th>
        <th class="w-1/12 p-2">Накладная</th>
        <th class="w-4/12 p-2">Заказчик</th>
        <th class="w-2/12 p-2">Начало хранения</th>
      </tr>
    </thead>
    <tbody>
<!--      <tr-->
<!--        v-for="box in boxes"-->
<!--        :key="box.id"-->
<!--        class="border hover:bg-slate-200"-->
<!--        :class="{-->
<!--          'animate-pulse': isHoldingDateExpired(box.date_add),-->
<!--          'text-rose-600': isHoldingDateExpired(box.date_add),-->
<!--        }"-->
<!--        @click="$emit('clickToBox', box.id)"-->
<!--      >-->
<!--        <td class="text-center border noselect">{{ box.cell }}</td>-->
<!--        <td class="text-center border noselect">{{ box.invoice }}</td>-->
<!--        <td class="text-center border noselect">{{ box.customer }}</td>-->
<!--        <td class="text-center border noselect">-->
<!--          {{ normalizeData(box.date_add) }}-->
<!--        </td>-->
<!--      </tr>-->
    </tbody>
  </table>
</template>

<script setup>
import { normalizeData, isHoldingDateExpired } from "@/common/helpers";

// defineProps({
//   boxes: {
//     type: Array,
//     required: true,
//   },
// });

defineEmits(["clickToBox"]);
</script>

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
