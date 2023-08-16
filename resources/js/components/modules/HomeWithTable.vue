<script setup>
import { normalizeData, isHoldingDateExpired } from "@/common/helpers";
import {router} from "@inertiajs/vue3";

defineProps({
    boxes: {
        type: Array,
        required: true,
    },
});

const editCard = (id) => {
    router.visit(`/box/edit/${id}`);
}
</script>

<template>
  <table class="mt-5 mx-auto">
    <thead>
      <tr>
        <th class="md:w-1/12 p-2">Ячейка</th>
        <th class="md:w-3/12 p-2">Накладная</th>
        <th class="md:w-4/12 p-2">Заказчик</th>
        <th class="md:w-4/12 p-2">Начало хранения</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="box in boxes"
        :key="box.id"
        class="border hover:bg-slate-200"
        @click="editCard(box['id'])"
      >
        <td class="text-center border noselect"
            :class="{
          'animate-pulse': isHoldingDateExpired(box.created_at),
          'text-rose-600': isHoldingDateExpired(box.created_at),
        }">{{ box.cell }}</td>

        <td class="text-center border noselect">{{ box.invoice }}</td>
        <td class="text-center border noselect">{{ box.customer }}</td>
        <td class="text-center border noselect"
            :class="{
          'animate-pulse': isHoldingDateExpired(box.created_at),
          'text-rose-600': isHoldingDateExpired(box.created_at),
        }">
          {{ normalizeData(box.created_at) }}
        </td>
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
