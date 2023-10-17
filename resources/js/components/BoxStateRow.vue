<script setup>
import {router} from "@inertiajs/vue3";
import { isHoldingDateExpired, daysFromCreate } from "@/common/helpers";

defineProps({
    cell: {
        type: Object,
        required: false,
    },
});

const editBox = (id) => {
    router.visit(`/box/edit/${id}`);
}

const createBox = (id) => {
    router.visit(`/box/create/${id}`);
}
</script>

<template>
    <tr v-if="cell.box"
        class="border hover:bg-slate-200"
        @click="editBox(cell.box.id)"
        tabindex="0"
    >
        <td class="text-center border noselect"
            :class="{
          'animate-pulse': isHoldingDateExpired(cell.box.created_at),
          'bg-red-100/80': isHoldingDateExpired(cell.box.created_at),
        }">{{ cell.id }}</td>

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

    <tr v-else
        class="border hover:bg-slate-200"
        tabindex="0"
        @click="createBox(cell.id)">
        <td class="text-center border noselect bg-green-100/50">{{ cell.id }}</td>
        <td colspan="4" class="text-center border noselect"></td>
    </tr>
</template>



<style scoped>

</style>
