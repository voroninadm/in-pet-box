<script setup>
import {Link} from "@inertiajs/vue3";

const props = defineProps(['users'])
</script>

<template>
    <header>
        <h2 class="text-lg font-medium text-gray-900">Все пользователи программы</h2>

        <p class="mt-1 text-sm text-gray-600">
            Выбрав пользователя Вы, как администратор, можете внести изменения в его профиль
        </p>
    </header>

    <div class="overflow-x-auto">
        <div class="w-full">
            <div class="bg-white shadow-md rounded my-6">
                <table class="min-w-max w-full table-auto">
                    <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-center">Имя</th>
                        <th class="py-3 px-6 text-center hidden md:table-cell">E-mail</th>
                        <th class="py-3 px-6 text-center hidden sm:table-cell">Статус</th>
                        <th class="py-3 px-6 text-center">Действия</th>
                    </tr>
                    </thead>

                    <tbody class="text-gray-600 text-sm font-light">

                    <tr v-for="user in props.users" :key="user.id"
                        class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left">
                            <p>{{ user.name }}</p>
                        </td>

                        <td class="hidden md:table-cell py-3 px-6 text-center">
                            <p>{{ user.email }}</p>
                        </td>

                        <td class="py-3 px-6 text-center hidden sm:table-cell">
            <span v-if="user.is_admin"
                  class="bg-orange-200 text-orange-800 py-1 px-3 rounded-full text-xs">Админ</span>
                            <span v-else
                                  class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Пользователь</span>

                        </td>
                        <td class="py-3 px-6 text-center">
                            <div class="flex item-center justify-center">
                                <div class="w-5 mx-3 transform hover:text-orange-500 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                    </svg>
                                </div>
                                <div class="w-5 mx-3 transform hover:text-orange-500 hover:scale-110">
                                    <Link :href="route('users.destroy', {id: user.id})" method="post">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
