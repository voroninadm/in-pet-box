<script setup>
import {Link} from "@inertiajs/vue3";

defineProps(['boxes']);
</script>

<template>
    <div class="flex items-center justify-between bg-white px-10 py-4 sm:px-6">
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

                    <Link v-for="link in boxes.links.slice(1, -1)"
                          :href="link.url"
                          class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          :class="[link.active ? 'active' : '']">
                        {{ link.label }}
                    </Link>

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

<style lang="scss" scoped>
.active {
    background-color: rgba(237, 128, 67, 0.7);

&:hover {
     background-color: rgba(237, 128, 67, 0.7);
 }
}
</style>
