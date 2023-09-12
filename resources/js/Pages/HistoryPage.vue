<script setup>
import {normalizeData} from "@/common/helpers.js";
import {Link} from "@inertiajs/vue3";

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

    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
            <Link :href="boxes.prev_page_url" as="button" :disabled="boxes.current_page == 1" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Предыдущая</Link>
            <Link :href="boxes.next_page_url" as="button" :disabled="boxes.current_page == boxes.last_page" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Следующая</Link>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Показано
                    <span class="font-medium">{{ boxes.from }}</span>
                    -
                    <span class="font-medium">{{ boxes.to }}</span>
                    из
                    <span class="font-medium">{{ boxes.total }}</span>
                    результатов
                </p>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <Link :href="boxes.prev_page_url"
                          as="button" :disabled="boxes.current_page == 1" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Предыдущая</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                    <!-- Current: "z-10 bg-green-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                    <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                    <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                    <Link :href="boxes.next_page_url"
                          as="button" :disabled="boxes.current_page == boxes.last_page"
                          class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Следующая</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                </nav>
            </div>
        </div>
    </div>
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
