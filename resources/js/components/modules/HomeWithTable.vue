<script setup>
import { normalizeData, isHoldingDateExpired, daysFromCreate } from "@/common/helpers";
import {router} from "@inertiajs/vue3";

defineProps({
    cells: {
        type: Array,
        required: true,
    },
});

const editCard = (id) => {
    router.visit(`/box/edit/${id}`);
}
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
      <tr
        v-for="cell in cells"
        :key="cell.cell"
        class="border hover:bg-slate-200"
        @click="editCard(cell.cell)"
      >
        <td class="text-center border noselect"
            :class="{
          'animate-pulse': isHoldingDateExpired(cell.box.created_at),
          'text-rose-600': isHoldingDateExpired(cell.box.created_at),
        }">{{ cell.cell }}</td>

        <td class="text-center border noselect">{{ cell.box.invoice }}</td>
        <td class="hidden md:table-cell text-center border noselect">{{ cell.box.customer }}</td>
        <td class="hidden xl:table-cell text-center border noselect">{{ cell.box.product }}</td>
          <td class="text-center border noselect"
              :class="{
          'animate-pulse': isHoldingDateExpired(cell.box.created_at),
          'text-rose-600': isHoldingDateExpired(cell.box.created_at),
        }">
              {{ daysFromCreate(cell.box.created_at)  }}
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
