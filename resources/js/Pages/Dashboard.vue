<script setup>
import {Head} from '@inertiajs/vue3';
</script>

<template>
    <Head title="Главная"/>

    <div>
            <template>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">Главная страница</h2>
            </template>

            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6 text-gray-900">Вы залогинились!</div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import DefaultLayout from '@/Layouts/DefaultLayout.vue';
export default {
    layout: DefaultLayout
}
</script>
